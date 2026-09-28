#!/usr/bin/env python3
"""links-check.py: verify internal links in a built Blume site.

Scans every .html file in the build output, collects link targets from
href="..." and src="..." attributes, and checks that each internal one
resolves to a file in the build.

A target is internal when it is:
  - root-relative ("/docs/x", "/logo.png"), or
  - relative to the page ("x", "../y"), or
  - absolute on the site's own origin (https://aletyx.ai/docs/...). Notion
    pages store links in this form, because Notion rewrites relative links.

A target resolves when the build has the literal file, <path>/index.html, or
<path>.html. For links with a #fragment, a missing anchor on an existing page
is reported as a warning and does not fail the check.

External links, mailto:/tel:/data:/javascript: links, and pure in-page
anchors are ignored.

Usage: scripts/links-check.py <dist-dir>
Exit code: 1 if any internal link is broken, else 0.
"""

import os
import re
import sys
from collections import defaultdict
from html.parser import HTMLParser
from urllib.parse import unquote, urljoin, urlsplit

SITE_ORIGINS = {"aletyx.ai", "www.aletyx.ai"}
BASE_PATH = "/docs"
IGNORED_SCHEMES = {"mailto", "tel", "data", "javascript"}


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if value is None:
                continue
            if name == "id":
                self.ids.add(value)
            elif name in ("href", "src") and tag not in ("link", "script"):
                self.links.append(value)


def page_url(dist, file):
    """The URL path a built file is served at."""
    rel = "/" + os.path.relpath(file, dist).replace(os.sep, "/")
    if rel.endswith("/index.html"):
        return rel[: -len("index.html")]
    return rel


def resolve(dist, path):
    """Return the built file serving a URL path, or None."""
    local = os.path.join(dist, unquote(path).lstrip("/"))
    candidates = [os.path.join(local, "index.html")] if path.endswith("/") else [
        local,
        os.path.join(local, "index.html"),
        local + ".html",
    ]
    for candidate in candidates:
        if os.path.isfile(candidate):
            return candidate
    return None


def internal_target(page, target):
    """Normalize a link to a site path (with fragment), or None if external."""
    parts = urlsplit(target)
    if parts.scheme in IGNORED_SCHEMES:
        return None
    if parts.scheme in ("http", "https") or target.startswith("//"):
        if parts.hostname not in SITE_ORIGINS:
            return None
        if not (parts.path == BASE_PATH or parts.path.startswith(BASE_PATH + "/")):
            return None
        return parts.path + ("#" + parts.fragment if parts.fragment else "")
    if not parts.path:
        return None  # pure in-page anchor or query
    joined = urlsplit(urljoin(page, target))
    return joined.path + ("#" + joined.fragment if joined.fragment else "")


def main():
    if len(sys.argv) != 2:
        print(__doc__.strip().splitlines()[-2], file=sys.stderr)
        return 2
    dist = os.path.abspath(sys.argv[1])
    if not os.path.isdir(dist):
        print(f"error: build output not found: {dist}", file=sys.stderr)
        return 2

    pages = {}
    for dirpath, _, filenames in os.walk(dist):
        for name in filenames:
            if name.endswith(".html"):
                file = os.path.join(dirpath, name)
                parser = LinkParser()
                with open(file, encoding="utf-8") as fh:
                    parser.feed(fh.read())
                pages[file] = parser

    total_ok = 0
    broken = defaultdict(list)
    missing_anchors = defaultdict(list)
    for file in sorted(pages):
        url = page_url(dist, file)
        for raw in pages[file].links:
            target = internal_target(url, raw)
            if target is None:
                continue
            path, _, fragment = target.partition("#")
            hit = resolve(dist, path)
            if hit is None:
                broken[url].append(raw)
                continue
            total_ok += 1
            if fragment and hit in pages and unquote(fragment) not in pages[hit].ids:
                missing_anchors[url].append(raw)

    for url in sorted(set(broken) | set(missing_anchors)):
        print(url)
        for raw in sorted(set(broken.get(url, []))):
            print(f"    BROKEN: {raw}")
        for raw in sorted(set(missing_anchors.get(url, []))):
            print(f"    MISSING ANCHOR (warning): {raw}")

    total_broken = sum(len(set(v)) for v in broken.values())
    total_anchors = sum(len(set(v)) for v in missing_anchors.values())
    print(
        f"\n{len(pages)} pages  ok={total_ok}  broken={total_broken}"
        f"  missing-anchor warnings={total_anchors}"
    )
    return 1 if total_broken else 0


if __name__ == "__main__":
    sys.exit(main())
