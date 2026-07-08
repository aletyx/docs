#!/usr/bin/env python3
"""Convert d2-generated SVG foreignObject labels to native SVG <text> elements.

Mintlify's image CDN strips <foreignObject> from SVGs as a security measure
(https://www.mintlify.com/docs/create/image-embeds#svg-images), which removes
all shape labels from the d2 diagrams copied from the aletyx-docs repo. The
d2 fonts are embedded in each SVG via @font-face, so replacing each label's
foreignObject/HTML with a native <text> element at the same coordinates renders
identically while surviving the CDN sanitizer.

Usage: python3 scripts/svg-foreignobject-to-text.py <file.svg> [...]
Idempotent: files without foreignObject are left untouched.
"""
import re
import sys
import xml.etree.ElementTree as ET

FO_RE = re.compile(r"<foreignObject[^>]*?x=\"([\d.]+)\" y=\"([\d.]+)\" width=\"([\d.]+)\" height=\"([\d.]+)\">(.*?)</foreignObject>", re.S)
DIV_RE = re.compile(r"<div[^>]*class=\"([^\"]*)\"(?:[^>]*style=\"([^\"]*)\")?[^>]*>(.*)</div>\s*$", re.S)
LINE_HEIGHT = 1.5


def convert_label(m, font_hash):
    x, y, w, h = (float(m.group(i)) for i in range(1, 5))
    dm = DIV_RE.search(m.group(5).strip())
    if not dm:
        return m.group(0)  # unknown structure: keep as-is
    cls, style, body = dm.group(1), dm.group(2) or "", dm.group(3)
    color = (re.search(r"color:\s*(#[0-9A-Fa-f]{3,8}|\w+)\s*(?:;|$)", re.sub(r"background-color:[^;]*;?", "", style)) or [None]) and None
    cm = re.search(r"(?<!background-)color:\s*(#[0-9A-Fa-f]{3,8}|\w+)", re.sub(r"background-color:[^;]*;?", "", style))
    fill = cm.group(1) if cm else None
    fsm = re.search(r"font-size:\s*(\d+)px", style)
    font_size = int(fsm.group(1)) if fsm else 16
    bold = "<strong>" in body
    # label text: strip p/strong/em/br tags, split lines on newlines
    text = re.sub(r"</?(p|strong|em|b|span|br\s*/?)>", "\n", body)
    lines = [ln.strip() for ln in text.split("\n") if ln.strip()]
    if not lines:
        return ""  # empty label
    cx, cy = x + w / 2, y + h / 2
    family = f"{font_hash}-font-{'bold' if bold else 'regular'}"
    text_cls = "text fill-N1" if "color-N1" in cls else "text"
    fill_attr = f' fill="{fill}"' if fill else ""
    common = f'class="{text_cls}"{fill_attr} style="text-anchor:middle;dominant-baseline:central;font-family:\'{family}\';font-size:{font_size}px"'
    if len(lines) == 1:
        return f'<text x="{cx:.6f}" y="{cy:.6f}" {common}>{lines[0]}</text>'
    lh = font_size * LINE_HEIGHT
    y0 = cy - lh * (len(lines) - 1) / 2
    tspans = "".join(
        f'<tspan x="{cx:.6f}" y="{y0 + i * lh:.6f}">{ln}</tspan>' for i, ln in enumerate(lines)
    )
    return f'<text {common}>{tspans}</text>'


def process(path):
    src = open(path, encoding="utf-8").read()
    if "foreignObject" not in src:
        return 0
    hm = re.search(r"d2-\d+", src)
    if not hm:
        print(f"SKIP {path}: no d2 font hash found", file=sys.stderr)
        return 0
    out, n = FO_RE.subn(lambda m: convert_label(m, hm.group(0)), src)
    if "foreignObject" in out:
        print(f"WARN {path}: unconverted foreignObject remains", file=sys.stderr)
    ET.fromstring(out)  # raises if not well-formed
    open(path, "w", encoding="utf-8").write(out)
    return n


if __name__ == "__main__":
    total = 0
    for p in sys.argv[1:]:
        n = process(p)
        total += n
        if n:
            print(f"{p}: {n} labels converted")
    print(f"TOTAL: {total} labels")
