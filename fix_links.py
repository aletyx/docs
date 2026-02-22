#!/usr/bin/env python3
"""
Fix broken links, broken images, and unreplaced template variables
across all .mdx files in the Mintlify docs repository.
"""

import os
import re
import glob

REPO_ROOT = os.path.dirname(os.path.abspath(__file__))

# =============================================================================
# 1. GLOBAL LINK REPLACEMENTS (old path -> new path)
#    These are applied ONLY within link contexts:
#      - Markdown links: [text](OLD_PATH)
#      - href attributes: href="OLD_PATH"
#    NOT within image src paths or arbitrary text.
#    Sorted longest-first to avoid partial matches.
# =============================================================================
LINK_FIXES = {
    "/guides/getting-started/getting-started-playground-dmn/": "/get-started/playground-dmn",
    "/guides/getting-started/getting-started-playground-dmn": "/get-started/playground-dmn",
    "/guides/getting-started/getting-started-playground-bpmn/": "/get-started/playground-bpmn",
    "/guides/getting-started/getting-started-playground-bpmn": "/get-started/playground-bpmn",
    "/guides/getting-started/getting-started-start-aletyx/": "/get-started/start-aletyx",
    "/guides/getting-started/getting-started-start-aletyx": "/get-started/start-aletyx",
    "/components/kogito/getting-started": "/platform/kogito",
    "/components/kogito/architecture": "/platform/kogito",
    "/components/kogito/serverless-workflows": "/platform/kogito",
    "/components/kogito/kubernetes-deployment": "/platform/kogito",
    "/components/compact-architecture/": "/platform/architecture/overview",
    "/components/compact-architecture": "/platform/architecture/overview",
    "/components/playground/": "/platform/playground/overview",
    "/components/playground": "/platform/playground/overview",
    "/components/drools/dmn": "/decisions/dmn/overview",
    "/components/mcp/": "/platform/mcp/overview",
    "/getting-started/environment-setup/": "/get-started/environment-setup",
    "/getting-started/environment-setup": "/get-started/environment-setup",
    "/getting-started/java-setup/": "/get-started/java",
    "/getting-started/java-setup": "/get-started/java",
    "/getting-started/container-tools/": "/get-started/docker",
    "/getting-started/container-tools": "/get-started/docker",
    "/getting-started/vscode/": "/get-started/vscode",
    "/getting-started/vscode": "/get-started/vscode",
    "/getting-started/cloud-tools/": "/get-started/cloud-tools",
    "/getting-started/cloud-tools": "/get-started/cloud-tools",
    "/getting-started/git-configuration/": "/get-started/git",
    "/getting-started/git-configuration": "/get-started/git",
    "/core/processes/architecture/compact-architecture/": "/processes/architecture/compact-architecture",
    "/core/processes/architecture/compact-architecture": "/processes/architecture/compact-architecture",
    "/core/processes/advanced-bpmn/event-driven/": "/processes/advanced/event-driven",
    "/core/processes/advanced-bpmn/event-driven": "/processes/advanced/event-driven",
    "/core/decisions/drl/data-objects": "/decisions/drl/data-stores",
    "/core/tutorials/rule-unit-guide": "/decisions/drl/rule-units",
    "/core/decisions/dmn/": "/decisions/dmn/overview",
    "/core/decisions/dmn": "/decisions/dmn/overview",
    "/core/processes/basic-bpmn/": "/processes/bpmn/overview",
    "/core/processes/basic-bpmn": "/processes/bpmn/overview",
    "/core/processes/best-practices": "/guides/best-practices",
    "/core/decisions/": "/decisions/overview",
    "/core/decisions": "/decisions/overview",
    "/core/": "/decisions/overview",
    "/deployment/kubernetes/": "/deploy/cloud-native/kubernetes",
    "/deployment/kubernetes": "/deploy/cloud-native/kubernetes",
    "/deployment/openshift/": "/deploy/cloud-native/openshift",
    "/deployment/openshift": "/deploy/cloud-native/openshift",
    "/deployment/docker/": "/get-started/docker",
    "/deployment/": "/deploy/overview",
    "/deployment": "/deploy/overview",
    "/migration-guide/": "/get-started/migration",
    "/migration-guide": "/get-started/migration",
}

# =============================================================================
# 2. GLOBAL IMAGE PATH FIXES (old path -> new path)
#    Applied as exact substring replacements across ALL files.
#    These are specific enough that they won't cause unintended matches.
# =============================================================================
IMAGE_FIXES = {
    # /assets/images/ -> /images/brand/
    "/assets/images/": "/images/brand/",

    # Reference DMN icons missing segment
    "/images/reference/images/icons/": "/images/reference/dmn/images/icons/",

    # Process versioning images
    "/images/core/processes/images/version-to-version.svg": "/images/core/processes/advanced-bpmn/images/version-to-version.svg",
    "/images/core/processes/images/container-single.svg": "/images/core/processes/advanced-bpmn/images/container-single.svg",
    "/images/core/processes/images/container-strategy-2.svg": "/images/core/processes/advanced-bpmn/images/container-strategy-2.svg",
    "/images/core/processes/images/container-strategy-1.svg": "/images/core/processes/advanced-bpmn/images/container-strategy-1.svg",

    # Compact architecture image
    "/images/core/processes/images/wf-compact-arch.png": "/images/components/compact-architecture/images/compact-arch-overall.png",

    # Guides images missing getting-started segment
    "/images/guides/images/": "/images/guides/getting-started/images/",

    # MCP image wrong path
    "/images/components/images/intelligent-decision-service.png": "/images/components/mcp/images/intelligent-decision-service.png",
}

# =============================================================================
# 3. FILE-SPECIFIC LINK FIXES
#    Each entry: relative file path -> list of (old, new) replacements
#    These are applied as exact string replacements within the specific file.
# =============================================================================
FILE_SPECIFIC_FIXES = {
    # --- decisions/overview.mdx ---
    "decisions/overview.mdx": [
        ("(drl/introduction)", "(/decisions/drl/overview)"),
        ("(core/playground)", "(/platform/playground/overview)"),
        ("(guides/examples/dmn/dmn-intro-lab)", "(/guides/dmn/intro)"),
        ("(guides/examples/dmn/dmn-advanced-modeling)", "(/guides/dmn/advanced-modeling)"),
        ("(drl/rule-language)", "(/decisions/rule-language)"),
    ],

    # --- decisions/rule-language.mdx ---
    "decisions/rule-language.mdx": [
        ("(rule-attributes)", "(#rule-attributes)"),
        ("(pattern-matching)", "(#pattern-matching)"),
        ("(rule-execution)", "(#rule-execution)"),
    ],

    # --- deploy/overview.mdx ---
    "deploy/overview.mdx": [
        ("[Learn More](kubernetes/)", "[Learn More](/deploy/cloud-native/kubernetes)"),
        ("[Learn More](docker/)", "[Learn More](/get-started/docker)"),
        ("[Learn More](openshift/)", "[Learn More](/deploy/cloud-native/openshift)"),
        ("(aws-marketplace/sandbox/)", "(/deploy/aws/sandbox)"),
        ("(../decision-control/setup-and-config/#docker-deployment)", "(/platform/decision-control/setup#docker-deployment)"),
        ("(../decision-control/setup-and-config/#kubernetes-deployment)", "(/platform/decision-control/setup#kubernetes-deployment)"),
    ],

    # --- deploy/aws/security.mdx ---
    "deploy/aws/security.mdx": [
        ("[Production Edition](production)", "[Production Edition](/deploy/aws/overview)"),
    ],

    # --- deploy/aws/ssl-https.mdx ---
    "deploy/aws/ssl-https.mdx": [
        ("[Production](production)", "[Production](/deploy/aws/overview)"),
    ],

    # --- deploy/aws/troubleshooting.mdx ---
    "deploy/aws/troubleshooting.mdx": [
        ("[Production Edition](production)", "[Production Edition](/deploy/aws/overview)"),
    ],

    # --- deploy/cloud-native/jvm-vs-native.mdx ---
    "deploy/cloud-native/jvm-vs-native.mdx": [
        ("(../deployment/kubernetes)", "(/deploy/cloud-native/kubernetes)"),
    ],

    # --- platform/decision-control/overview.mdx ---
    "platform/decision-control/overview.mdx": [
        ("(setup-and-config/)", "(/platform/decision-control/setup)"),
        ("(aws/sandbox/)", "(/platform/decision-control/aws-sandbox)"),
        ("(governance-workflow/)", "(/platform/decision-control/governance)"),
        ("(integration-and-apis/)", "(/platform/decision-control/apis)"),
    ],

    # --- platform/playground/customization.mdx ---
    "platform/playground/customization.mdx": [
        ("(advanced-accelerators)", "(/platform/playground/advanced)"),
    ],

    # --- processes/architecture/compact-architecture.mdx ---
    "processes/architecture/compact-architecture.mdx": [
        ("(../data-index)", "(/processes/architecture/data-index)"),
        ("(../data-audit)", "(/processes/architecture/data-audit)"),
        ("(../../../components/compact-architecture/getting-started)", "(/platform/architecture/overview)"),
        ("(../../../components/compact-architecture/key-components)", "(/platform/architecture/overview)"),
        ("(../../../components/compact-architecture/configuration)", "(/platform/architecture/overview)"),
        ("(../../../components/compact-architecture/best-practices)", "(/platform/architecture/overview)"),
        ("(../../../deployment/compact-architecture/basic-setup)", "(/deploy/overview)"),
    ],

    # --- processes/architecture/data-audit.mdx ---
    "processes/architecture/data-audit.mdx": [
        ("[Process Data & Persistence](data)", "[Process Data & Persistence](/processes/components/data)"),
        ("(../../apis/graphql-api)", "(/processes/advanced/graphql)"),
    ],

    # --- processes/architecture/data-index.mdx ---
    "processes/architecture/data-index.mdx": [
        ("[Process Data & Persistence](data)", "[Process Data & Persistence](/processes/components/data)"),
        ("(../../apis/graphql-api)", "(/processes/advanced/graphql)"),
    ],

    # --- guides/drl/first-rule.mdx ---
    "guides/drl/first-rule.mdx": [
        ("(/core/decisions/drl/data-objects)", "(/decisions/drl/data-stores)"),
        ("(/core/tutorials/rule-unit-guide)", "(/decisions/drl/rule-units)"),
    ],

    # --- guides/dmn/overview.mdx ---
    "guides/dmn/overview.mdx": [
        ("(guides/examples/dmn/dmn-best-practices)", "(/guides/best-practices)"),
        ("(guides/examples/dmn/vacation-days-example)", "(/guides/dmn/basic)"),
        ("(guides/examples/dmn/travel-insurance-example)", "(/guides/dmn/advanced-modeling)"),
    ],

    # --- reference/enterprise-features.mdx ---
    "reference/enterprise-features.mdx": [
        ("(deployment/standalone)", "(/deploy/overview)"),
        ("(deployment/container)", "(/deploy/cloud-native/overview)"),
    ],

    # --- get-started/maven.mdx ---
    "get-started/maven.mdx": [
        ("(../guides/getting-started/getting-start-aletyx)", "(/get-started/start-aletyx)"),
        ("(../core)", "(/decisions/overview)"),
    ],

    # --- get-started/playground-dmn.mdx ---
    "get-started/playground-dmn.mdx": [
        ("(deploy-kubernetes)", "(/deploy/cloud-native/kubernetes)"),
        ("(java-integration)", "(/get-started/java)"),
        ("(dmn-modeling-guide)", "(/decisions/dmn/overview)"),
        ("(bpmn-modeling-guide)", "(/processes/bpmn/overview)"),
        ("(playground-api)", "(/platform/playground/overview)"),
    ],

    # --- get-started/overview.mdx ---
    "get-started/overview.mdx": [
        ("(core/processes/architecture/hybrid-cloud)", "(/deploy/cloud-native/overview)"),
        ("(monitoring-security/index)", "(/deploy/cloud-native/securing-console)"),
        ('href="use-cases/lending/"', 'href="/guides/use-cases/lending"'),
        ('href="use-cases/insurance/"', 'href="/guides/use-cases/insurance"'),
        ('href="use-cases/onboarding/"', 'href="/guides/use-cases/onboarding"'),
        ('href="use-cases/compliance/"', 'href="/guides/use-cases/compliance"'),
    ],

    # --- platform/mcp/first-interaction.mdx ---
    # (Image fix is already handled by IMAGE_FIXES globally)

    # --- guides/dmn/advanced-modeling.mdx ---
    "guides/dmn/advanced-modeling.mdx": [
        ('../images/highest-risk-context.png', '/images/guides/examples/dmn/images/highest-risk-context.png'),
        ('../images/context-select-expression.png', '/images/guides/examples/dmn/images/context-select-expression.png'),
        ('images/destination-risk-context.png', '/images/guides/examples/dmn/images/destination-risk-factor-context.png'),
    ],

    # --- guides/dmn/basic.mdx ---
    "guides/dmn/basic.mdx": [
        ('images/context-select-expression.png', '/images/guides/examples/dmn/images/context-select-expression.png'),
    ],
}

# =============================================================================
# 4. RELATIVE IMAGE FIXES for playground-dmn.mdx and playground-bpmn.mdx
#    Replace all ../images/ relative image references with absolute paths
# =============================================================================
PLAYGROUND_IMAGE_PREFIX = "/images/guides/getting-started/images/"

# =============================================================================
# 5. TEMPLATE VARIABLE FIXES (file-specific)
# =============================================================================
TEMPLATE_FIXES = {
    "deploy/playground.mdx": [
        ("{{ product.kogito }}", "Aletyx Enterprise Build of Kogito"),
        ("{{product.drools }}", "Aletyx Enterprise Build of Drools"),
    ],
    "platform/decision-control/ct-setup.mdx": [
        ("registry-{{edition}}.aletyx.services", "registry.aletyx.services"),
    ],
    "platform/playground/accelerators.mdx": [
        ("{{ product.playground }}", "Aletyx Playground"),
    ],
}

# =============================================================================
# 6. PLACEHOLDER URL FIXES
# =============================================================================
PLACEHOLDER_FIXES = {
    "platform/drools/engine.mdx": [
        ("![Drools Rule Engine Components](https://placeholder-image-url.com/drools-components.png)",
         "<!-- Image placeholder removed: Drools Rule Engine Components diagram -->"),
    ],
    "guides/drl/examples.mdx": [
        ("GitHubLocation/DecisionTable.drl.xlsx", "https://github.com/aletyx"),
    ],
}


def sort_by_length_desc(d):
    """Return dict items sorted by key length descending to avoid partial matches."""
    return sorted(d.items(), key=lambda x: len(x[0]), reverse=True)


def apply_link_fixes_in_context(content):
    """
    Apply global LINK_FIXES only within link contexts:
      - Markdown links: ](OLD_PATH) or ](OLD_PATH#anchor) or ](OLD_PATH "title")
      - href attributes: href="OLD_PATH"

    This prevents replacing /core/ or /deployment/ inside image paths like
    /images/core/processes/... or /images/deployment/...
    """
    count = 0
    sorted_fixes = sort_by_length_desc(LINK_FIXES)

    for old_path, new_path in sorted_fixes:
        # Pattern 1: Markdown link syntax: ](OLD_PATH) or ](OLD_PATH#...) or ](OLD_PATH "...")
        # We match ]( then the old_path, then either ), #, space/quote, or end
        escaped_old = re.escape(old_path)

        # Match ](OLD_PATH) - the old path right after ]( and before ) or # or space
        pattern = r'(\]\()' + escaped_old + r'(?=[)#"\s])'
        matches = re.findall(pattern, content)
        if matches:
            count += len(matches)
            content = re.sub(pattern, r'\1' + new_path, content)

        # Pattern 2: href="OLD_PATH" or href='OLD_PATH'
        pattern2 = r'(href=["\'])' + escaped_old + r'(?=["\'\s#>])'
        matches2 = re.findall(pattern2, content)
        if matches2:
            count += len(matches2)
            content = re.sub(pattern2, r'\1' + new_path, content)

    return content, count


def apply_image_fixes(content):
    """Apply global image path fixes (exact substring replacement)."""
    count = 0
    for old, new in sort_by_length_desc(IMAGE_FIXES):
        if old in content:
            occurrences = content.count(old)
            content = content.replace(old, new)
            count += occurrences
    return content, count


def apply_file_specific_fixes(content, rel_path):
    """Apply file-specific link fixes."""
    count = 0
    if rel_path in FILE_SPECIFIC_FIXES:
        for old, new in FILE_SPECIFIC_FIXES[rel_path]:
            if old in content:
                occurrences = content.count(old)
                content = content.replace(old, new)
                count += occurrences
    return content, count


def apply_playground_image_fixes(content, rel_path):
    """Fix relative ../images/ paths in playground-dmn.mdx and playground-bpmn.mdx."""
    count = 0
    if rel_path in ("get-started/playground-dmn.mdx", "get-started/playground-bpmn.mdx"):
        pattern = r'(\.\./images/)([a-zA-Z0-9_-]+\.(png|jpg|jpeg|gif|svg|webp))'

        def replacer(m):
            return PLAYGROUND_IMAGE_PREFIX + m.group(2)

        new_content = re.sub(pattern, replacer, content)
        if new_content != content:
            count = len(re.findall(pattern, content))
            content = new_content
    return content, count


def apply_template_fixes(content, rel_path):
    """Apply template variable fixes."""
    count = 0
    if rel_path in TEMPLATE_FIXES:
        for old, new in TEMPLATE_FIXES[rel_path]:
            if old in content:
                occurrences = content.count(old)
                content = content.replace(old, new)
                count += occurrences
    return content, count


def apply_placeholder_fixes(content, rel_path):
    """Apply placeholder URL fixes."""
    count = 0
    if rel_path in PLACEHOLDER_FIXES:
        for old, new in PLACEHOLDER_FIXES[rel_path]:
            if old in content:
                occurrences = content.count(old)
                content = content.replace(old, new)
                count += occurrences
    return content, count


def process_file(filepath):
    """Process a single .mdx file, applying all fixes."""
    rel_path = os.path.relpath(filepath, REPO_ROOT)
    rel_path = rel_path.replace(os.sep, "/")

    with open(filepath, "r", encoding="utf-8") as f:
        original = f.read()

    content = original
    total_fixes = 0

    # 1. File-specific fixes first (most precise, avoid conflicts with global fixes)
    content, c = apply_file_specific_fixes(content, rel_path)
    total_fixes += c

    # 2. Global image fixes (exact substring, very specific paths)
    content, c = apply_image_fixes(content)
    total_fixes += c

    # 3. Global link fixes (context-aware, only within link syntax)
    content, c = apply_link_fixes_in_context(content)
    total_fixes += c

    # 4. Playground relative image fixes
    content, c = apply_playground_image_fixes(content, rel_path)
    total_fixes += c

    # 5. Template variable fixes
    content, c = apply_template_fixes(content, rel_path)
    total_fixes += c

    # 6. Placeholder URL fixes
    content, c = apply_placeholder_fixes(content, rel_path)
    total_fixes += c

    # Only write if changes were made
    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return rel_path, total_fixes
    return None, 0


def main():
    """Main entry point."""
    print("=" * 70)
    print("Mintlify Docs Link/Image/Template Fix Script")
    print("=" * 70)
    print(f"Repository root: {REPO_ROOT}")
    print()

    # Find all .mdx files
    mdx_files = glob.glob(os.path.join(REPO_ROOT, "**", "*.mdx"), recursive=True)
    mdx_files.sort()

    print(f"Found {len(mdx_files)} .mdx files to process.")
    print()

    total_files_changed = 0
    total_fixes_applied = 0
    changed_files = []

    for filepath in mdx_files:
        rel_path, fixes = process_file(filepath)
        if rel_path:
            total_files_changed += 1
            total_fixes_applied += fixes
            changed_files.append((rel_path, fixes))
            print(f"  [FIXED] {rel_path} ({fixes} fix(es))")

    print()
    print("-" * 70)
    print(f"Summary:")
    print(f"  Files scanned:   {len(mdx_files)}")
    print(f"  Files changed:   {total_files_changed}")
    print(f"  Total fixes:     {total_fixes_applied}")
    print("-" * 70)

    if changed_files:
        print()
        print("Changed files breakdown:")
        for path, fixes in changed_files:
            print(f"  {fixes:4d}  {path}")

    print()
    print("Done.")


if __name__ == "__main__":
    main()
