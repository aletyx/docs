#!/usr/bin/env python3
"""
MkDocs to Mintlify MDX Migration Script

Converts MkDocs content from /Users/porcelli/Code/aletyx/docs/docs/
to Mintlify MDX format in /Users/porcelli/Code/aletyx/docs-mintlify/

Usage:
    python3 migrate.py

This script is idempotent and safe to run multiple times.
"""

import os
import re
import sys
import logging
from pathlib import Path
from datetime import datetime
from collections import OrderedDict

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

SRC_ROOT = Path("/Users/porcelli/Code/aletyx/docs/docs")
DST_ROOT = Path("/Users/porcelli/Code/aletyx/docs-mintlify")

FILE_MAP = {
    # === GET STARTED ===
    "guides/getting-started.md": "get-started/overview.mdx",
    "guides/getting-started/getting-started-playground.md": "get-started/playground-overview.mdx",
    "guides/getting-started/getting-started-playground-dmn.md": "get-started/playground-dmn.mdx",
    "guides/getting-started/getting-started-playground-bpmn.md": "get-started/playground-bpmn.mdx",
    "guides/getting-started/getting-started-start-aletyx.md": "get-started/start-aletyx.mdx",
    "getting-started/environment-setup.md": "get-started/environment-setup.mdx",
    "getting-started/java-setup.md": "get-started/java.mdx",
    "getting-started/maven.md": "get-started/maven.mdx",
    "getting-started/container-tools.md": "get-started/docker.mdx",
    "getting-started/git-configuration.md": "get-started/git.mdx",
    "getting-started/cloud-tools.md": "get-started/cloud-tools.mdx",
    "getting-started/vscode.md": "get-started/vscode.mdx",
    "getting-started/ubuntu.md": "get-started/ubuntu.mdx",

    # === DECISIONS ===
    "core/decisions/index.md": "decisions/overview.mdx",
    "core/decisions/rule-language.md": "decisions/rule-language.mdx",
    "core/decisions/drl/index.md": "decisions/drl/overview.mdx",
    "core/decisions/drl/syntax-introduction.md": "decisions/drl/syntax.mdx",
    "core/decisions/drl/drl-building-blocks.md": "decisions/drl/building-blocks.mdx",
    "core/decisions/drl/data-stores.md": "decisions/drl/data-stores.mdx",
    "core/decisions/drl/rule-units.md": "decisions/drl/rule-units.mdx",
    "core/decisions/drl/phreak.md": "decisions/drl/phreak.mdx",
    "core/decisions/drl/oopath-details.md": "decisions/drl/oopath.mdx",
    "core/decisions/drl/drl-conditions.md": "decisions/drl/conditions.mdx",
    "core/decisions/drl/drl-actions.md": "decisions/drl/actions.mdx",
    "core/decisions/drl/implementing-decision-services.md": "decisions/drl/decision-services.mdx",
    "core/decisions/drl/decision-tables/index.md": "decisions/tables/overview.mdx",
    "core/decisions/drl/decision-tables/getting-started/first-table.md": "decisions/tables/first-table.mdx",
    "core/decisions/drl/decision-tables/getting-started/running.md": "decisions/tables/running.mdx",
    "core/decisions/dmn/index.md": "decisions/dmn/overview.mdx",
    "core/decisions/dmn/concepts.md": "decisions/dmn/concepts.mdx",
    "core/decisions/dmn/decision-services.md": "decisions/dmn/decision-services.mdx",
    "core/decisions/dmn/feel-handbook.md": "decisions/dmn/feel-handbook.mdx",
    "core/decisions/dmn/listeners.md": "decisions/dmn/listeners.mdx",

    # === PROCESSES ===
    "core/processes/index.md": "processes/overview.mdx",
    "core/processes/architecture/compact-architecture.md": "processes/architecture/compact-architecture.mdx",
    "core/processes/engine.md": "processes/architecture/engine.mdx",
    "core/processes/runtimes.md": "processes/architecture/runtimes.mdx",
    "core/processes/architecture/data-index.md": "processes/architecture/data-index.mdx",
    "core/processes/architecture/data-audit.md": "processes/architecture/data-audit.mdx",
    "core/processes/data.md": "processes/components/data.mdx",
    "core/processes/job-service.md": "processes/components/job-service.mdx",
    "core/processes/user-task.md": "processes/components/user-tasks.mdx",
    "core/processes/basic-bpmn/index.md": "processes/bpmn/overview.mdx",
    "core/processes/basic-bpmn/editor.md": "processes/bpmn/editor.mdx",
    "core/processes/basic-bpmn/start-events.md": "processes/bpmn/start-events.mdx",
    "core/processes/basic-bpmn/end-events.md": "processes/bpmn/end-events.mdx",
    "core/processes/basic-bpmn/intermediate-events.md": "processes/bpmn/intermediate-events.mdx",
    "core/processes/basic-bpmn/gateways.md": "processes/bpmn/gateways.mdx",
    "core/processes/basic-bpmn/activities.md": "processes/bpmn/activities.mdx",
    "core/processes/basic-bpmn/api.md": "processes/bpmn/api.mdx",
    "core/processes/advanced-bpmn/index.md": "processes/advanced/overview.mdx",
    "core/processes/advanced-bpmn/iso-8601-guide.md": "processes/advanced/iso-8601.mdx",
    "core/processes/advanced-bpmn/event-driven.md": "processes/advanced/event-driven.mdx",
    "core/processes/advanced-bpmn/flex-processes.md": "processes/advanced/flex-processes.mdx",
    "core/processes/advanced-bpmn/graphql.md": "processes/advanced/graphql.mdx",
    "core/processes/advanced-bpmn/listeners.md": "processes/advanced/listeners.mdx",
    "core/processes/advanced-bpmn/monitoring.md": "processes/advanced/monitoring.mdx",
    "core/processes/advanced-bpmn/subprocesses.md": "processes/advanced/subprocesses.mdx",
    "core/processes/advanced-bpmn/sub-embedded.md": "processes/advanced/sub-embedded.mdx",
    "core/processes/advanced-bpmn/sub-reusable.md": "processes/advanced/sub-reusable.mdx",
    "core/processes/advanced-bpmn/sub-event.md": "processes/advanced/sub-event.mdx",
    "core/processes/advanced-bpmn/tasks/human-tasks.md": "processes/advanced/human-tasks.mdx",
    "core/processes/advanced-bpmn/new-process-versions.md": "processes/advanced/process-versioning.mdx",
    "core/integration/index.md": "processes/integration/overview.mdx",
    "core/integration/decision-process.md": "processes/integration/decision-process.mdx",
    "core/integration/event-driven.md": "processes/integration/event-driven.mdx",
    "core/integration/service-orchestration.md": "processes/integration/service-orchestration.mdx",
    "test-scenarios/index.md": "processes/testing/overview.mdx",
    "test-scenarios/authoring-scesim.md": "processes/testing/authoring-scesim.mdx",

    # === PLATFORM ===
    "components/index.md": "platform/overview.mdx",
    "decision-control/index.md": "platform/decision-control/overview.mdx",
    "decision-control/architecture.md": "platform/decision-control/architecture.mdx",
    "decision-control/setup-and-config.md": "platform/decision-control/setup.mdx",
    "decision-control/integration-and-apis.md": "platform/decision-control/apis.mdx",
    "decision-control/usage-scenarios.md": "platform/decision-control/usage-scenarios.mdx",
    "decision-control/governance-workflow.md": "platform/decision-control/governance.mdx",
    "decision-control/control-tower/index.md": "platform/decision-control/control-tower.mdx",
    "decision-control/control-tower/setup.md": "platform/decision-control/ct-setup.mdx",
    "decision-control/control-tower/dashboard.md": "platform/decision-control/ct-dashboard.mdx",
    "decision-control/control-tower/environments.md": "platform/decision-control/ct-environments.mdx",
    "decision-control/control-tower/tasks.md": "platform/decision-control/ct-tasks.mdx",
    "decision-control/aws/index.md": "platform/decision-control/aws.mdx",
    "decision-control/aws/sandbox.md": "platform/decision-control/aws-sandbox.mdx",
    "decision-control/faq-troubleshooting.md": "platform/decision-control/faq.mdx",
    "components/drools/index.md": "platform/drools/overview.mdx",
    "components/drools/drools-getting-started.md": "platform/drools/getting-started.mdx",
    "components/drools/drools-visual-guide.md": "platform/drools/visual-guide.mdx",
    "components/drools/drools-engine.md": "platform/drools/engine.mdx",
    "components/drools/drools-ruleflow.md": "platform/drools/ruleflow.mdx",
    "components/drools/troubleshooting.md": "platform/drools/troubleshooting.mdx",
    "components/jbpm/index.md": "platform/jbpm.mdx",
    "components/kogito/index.md": "platform/kogito.mdx",
    "components/compact-architecture/index.md": "platform/architecture/overview.mdx",
    "components/compact-architecture/scaling.md": "platform/architecture/scaling.mdx",
    "components/playground/index.md": "platform/playground/overview.mdx",
    "components/playground/components.md": "platform/playground/components.mdx",
    "components/playground/accelerators.md": "platform/playground/accelerators.mdx",
    "components/playground/advanced-accelerator.md": "platform/playground/advanced.mdx",
    "components/playground/dev-deployment.md": "platform/playground/dev-deployments.mdx",
    "components/playground/customizing.md": "platform/playground/customization.mdx",
    "components/mcp/index.md": "platform/mcp/overview.mdx",
    "components/mcp/first-interaction.md": "platform/mcp/first-interaction.mdx",

    # === GUIDES ===
    "guides/index.md": "guides/overview.mdx",
    "guides/drools-7-eol.md": "guides/drools-7-eol.mdx",
    "guides/examples/dmn/index.md": "guides/dmn/overview.mdx",
    "guides/examples/dmn/dmn-intro.md": "guides/dmn/intro.mdx",
    "guides/examples/dmn/dmn-basic-example.md": "guides/dmn/basic.mdx",
    "guides/examples/dmn/dmn-accelerators.md": "guides/dmn/accelerators.mdx",
    "guides/examples/dmn/dmn-basic-deployment.md": "guides/dmn/basic-deployment.mdx",
    "guides/examples/dmn/dmn-deeper.md": "guides/dmn/advanced-modeling.mdx",
    "guides/examples/dmn/dmn-advanced-deployment.md": "guides/dmn/advanced-deployment.mdx",
    "core/tutorials/index.md": "guides/drl/overview.mdx",
    "core/tutorials/first-rule.md": "guides/drl/first-rule.mdx",
    "core/tutorials/decision-tables.md": "guides/drl/decision-tables.mdx",
    "guides/examples/drl-example.md": "guides/drl/examples.mdx",
    "core/decisions/drl/intro-queries.md": "guides/drl/queries.mdx",
    "core/processes/basic-bpmn/lab-rules-orchestration.md": "guides/process/rules-orchestration.mdx",
    "core/processes/basic-bpmn/lab-saga.md": "guides/process/saga-pattern.mdx",
    "core/processes/advanced-bpmn/lab-eda.md": "guides/process/event-driven.mdx",
    "guides/examples/bpmn-example.md": "guides/process/bpmn-examples.mdx",
    "core/processes/advanced-bpmn/sub-adhoc.md": "guides/process/adhoc-subprocesses.mdx",
    "guides/getting-started/use-cases/index.md": "guides/use-cases/overview.mdx",
    "guides/getting-started/use-cases/compliance.md": "guides/use-cases/compliance.mdx",
    "guides/getting-started/use-cases/finance.md": "guides/use-cases/finance.mdx",
    "guides/getting-started/use-cases/healthcare.md": "guides/use-cases/healthcare.mdx",
    "guides/getting-started/use-cases/human-resources.md": "guides/use-cases/human-resources.mdx",
    "guides/getting-started/use-cases/insurance.md": "guides/use-cases/insurance.mdx",
    "guides/getting-started/use-cases/lending.md": "guides/use-cases/lending.mdx",
    "guides/getting-started/use-cases/manufacturing.md": "guides/use-cases/manufacturing.mdx",
    "guides/getting-started/use-cases/onboarding.md": "guides/use-cases/onboarding.mdx",
    "guides/getting-started/use-cases/retail.md": "guides/use-cases/retail.mdx",
    "guides/best-practices.md": "guides/best-practices.mdx",

    # === DEPLOY ===
    "deployment/index.md": "deploy/overview.mdx",
    "deployment/aws-marketplace/index.md": "deploy/aws/overview.mdx",
    "deployment/aws-marketplace/sandbox.md": "deploy/aws/sandbox.mdx",
    "deployment/aws-marketplace/ssl-https.md": "deploy/aws/ssl-https.mdx",
    "deployment/aws-marketplace/security.md": "deploy/aws/security.mdx",
    "deployment/aws-marketplace/troubleshooting.md": "deploy/aws/troubleshooting.mdx",
    "deployment/cloud-native/index.md": "deploy/cloud-native/overview.mdx",
    "deployment/cloud-native/jvm-vs-native.md": "deploy/cloud-native/jvm-vs-native.mdx",
    "deployment/kubernetes.md": "deploy/cloud-native/kubernetes.mdx",
    "deployment/openshift.md": "deploy/cloud-native/openshift.mdx",
    "components/compact-architecture/securing-the-architecture.md": "deploy/cloud-native/securing-console.mdx",
    "deployment/playground/index.md": "deploy/playground.mdx",

    # === REFERENCE ===
    "reference/index.md": "reference/overview.mdx",
    "reference/dmn/index.md": "reference/dmn/overview.mdx",
    "reference/dmn/reserved-words.md": "reference/dmn/reserved-words.mdx",
    "reference/dmn/select-reference.md": "reference/dmn/select-expression.mdx",
    "product/index.md": "reference/enterprise-features.mdx",
    "reference/release-notes.md": "reference/release-notes.mdx",
    "legal/cookie-policy.md": "reference/cookie-policy.mdx",
    "migration/community-to-aletyx.md": "get-started/migration.mdx",
}

# Template variables sorted by key length (longest first) to avoid partial matches
VARIABLES = OrderedDict(sorted({
    # Product sub-objects (longest keys first due to sort)
    "{{ product.compactarchitecture }}": "Adaptive Process Architecture",
    "{{ product.decision_control.version }}": "1.2.1",
    "{{ product.decision_control.name }}": "Decision Control",
    "{{ product.dmnwebformcontainer }}": "apache/incubator-kie-sandbox-dev-deployment-dmn-form-webapp:latest",
    "{{ product.extendedservices.container }}": "quay.io/aletyx/extended-services:latest",
    "{{ product.archetype.archetype_version }}": "1.0.0",
    "{{ product.archetype.quarkus_id }}": "quarkus-kogito-jbpm-archetype",
    "{{ product.archetype.quarkus }}": "Quarkus Maven Archetype",
    "{{ product.playground.container }}": "quay.io/aletyx/playground:latest",
    "{{ product.playground.url }}": "https://playground.aletyx.ai",
    "{{ product.management.console }}": "postgres",
    "{{ product.management.version }}": "16.0",
    "{{ product.quarkusblankapp }}": "apache/incubator-kie-sandbox-dev-deployment-quarkus-blank-app:10.0.0",
    "{{ product.cors.container }}": "quay.io/aletyx/cors:latest",
    "{{ product.docker.sandbox }}": "aletyx/playground:latest",
    "{{ product.drools.version }}": "10.1.0",
    "{{ product.drools.name }}": "Aletyx Enterprise Build of Drools",
    "{{ product.kogito.bom_name }}": "kogito-quarkus-bom",
    "{{ product.kogito.version }}": "10.1.0",
    "{{ product.kogito.name }}": "Aletyx Enterprise Build of Kogito",
    "{{ product.kogito.group }}": "org.kie",
    "{{ product.kogito.bom }}": "10.1.0-aletyx",
    "{{ product.jbpm.version }}": "10.1.0",
    "{{ product.jbpm.name }}": "Aletyx Enterprise Build of jBPM",
    "{{ product.aws.sandbox }}": "Aletyx Decision Control Sandbox",
    "{{ product.accelerator_link }}": "https://github.com/timwuthenow/sandbox-accelerators.git",
    "{{ product.acceleratorIcon }}": "https://raw.githubusercontent.com/timwuthenow/sandbox-accelerators/refs/heads/main/quarkus-logo.png",
    "{{ product.dmncompliance }}": "1.5",
    "{{ product.ghactions }}": "updateThis",
    "{{ product.jobservice }}": "Temporal Intelligence Coordinator",
    "{{ product.workflow }}": "Intelligent Process Orchestrations",
    "{{ product.decision }}": "Intelligent Decision Automation",
    "{{ product.compact }}": "Adaptive Process Architecture",
    "{{ product.plugins }}": "Aletyx Developer Tools",
    "{{ product.sandbox }}": "Aletyx Playground",
    "{{ product.version }}": "10.1.0-aletyx",
    "{{ product.studio }}": "Aletyx Playground",
    "{{ product.tower }}": "Aletyx Decision Control Tower",
    "{{ product.start }}": "https://start.aletyx.ai",
    "{{ product.short }}": "ake",
    "{{ product.name }}": "Aletyx Enterprise Build of Kogito and Drools",
    "{{ product.pam }}": "Process Automation Manager",
    "{{ product.dm }}": "Decision Manager",

    # Trademarks
    "{{ trademarks.dockerdesktop }}": "Docker Desktop",
    "{{ trademarks.dockercompose }}": "Docker Compose",
    "{{ trademarks.podmandesktop }}": "Podman Desktop",
    "{{ trademarks.podmancompose }}": "Podman Compose",
    "{{ trademarks.eclipsetemurin }}": "Eclipse Temurin",
    "{{ trademarks.adoptopenjdk }}": "AdoptOpenJDK",
    "{{ trademarks.apache.parent }}": "Apache",
    "{{ trademarks.apache.kafka }}": "Apache Kafka",
    "{{ trademarks.apache.maven }}": "Apache Maven",
    "{{ trademarks.apache.kie }}": "Apache KIE",
    "{{ trademarks.chocolatey }}": "Chocolatey",
    "{{ trademarks.powershell }}": "PowerShell",
    "{{ trademarks.openshift }}": "Red Hat OpenShift",
    "{{ trademarks.kubernetes }}": "Kubernetes",
    "{{ trademarks.postgresql }}": "PostgreSQL",
    "{{ trademarks.springboot }}": "Spring Boot",
    "{{ trademarks.swaggerui }}": "Swagger UI",
    "{{ trademarks.bpmnlong }}": "Business Process Model and Notation",
    "{{ trademarks.dmnlong }}": "Decision Model and Notation",
    "{{ trademarks.intellij }}": "IntelliJ",
    "{{ trademarks.keycloak }}": "Keycloak",
    "{{ trademarks.openapi }}": "OpenAPI",
    "{{ trademarks.prometheus }}": "Prometheus",
    "{{ trademarks.homebrew }}": "Homebrew",
    "{{ trademarks.windows }}": "Microsoft Windows",
    "{{ trademarks.postgres }}": "PostgreSQL",
    "{{ trademarks.quarkus }}": "Quarkus",
    "{{ trademarks.graphql }}": "GraphQL",
    "{{ trademarks.grafana }}": "Grafana",
    "{{ trademarks.kubectl }}": "kubectl",
    "{{ trademarks.openjdk }}": "OpenJDK",
    "{{ trademarks.podman }}": "Podman",
    "{{ trademarks.ubuntu }}": "Ubuntu",
    "{{ trademarks.debian }}": "Debian",
    "{{ trademarks.spring }}": "Spring",
    "{{ trademarks.docker }}": "Docker",
    "{{ trademarks.openid }}": "OpenID Connect",
    "{{ trademarks.fedora }}": "Fedora",
    "{{ trademarks.linux }}": "Linux",
    "{{ trademarks.excel }}": "Microsoft Excel",
    "{{ trademarks.macOS }}": "macOS",
    "{{ trademarks.apple }}": "Apple",
    "{{ trademarks.bpmn }}": "BPMN",
    "{{ trademarks.feel }}": "FEEL",
    "{{ trademarks.pmml }}": "PMML",
    "{{ trademarks.rhel }}": "Red Hat Enterprise Linux",
    "{{ trademarks.fico }}": "FICO",
    "{{ trademarks.oidc }}": "OIDC",
    "{{ trademarks.vscode }}": "Visual Studio Code",
    "{{ trademarks.kafka }}": "Kafka",
    "{{ trademarks.sdkman }}": "SDKMAN!",
    "{{ trademarks.github }}": "GitHub",
    "{{ trademarks.intel }}": "Intel",
    "{{ trademarks.java }}": "Java",
    "{{ trademarks.mac }}": "Mac",
    "{{ trademarks.apt }}": "APT",
    "{{ trademarks.omg }}": "OMG",
    "{{ trademarks.dmn }}": "DMN",
    "{{ trademarks.kie }}": "KIE",

    # Community
    "{{ community.version }}": "10.0.0",
    "{{ community.sandbox }}": "KIE Sandbox",
    "{{ community.drools }}": "Drools from Apache KIE",
    "{{ community.Kogito }}": "Kogito from Apache KIE",
    "{{ community.jbpm }}": "jBPM from Apache KIE",
    "{{ community.name }}": "Apache KIE (Incubating)",

    # POM
    "{{ pom.groupId }}": "ai.aletyx",
    "{{ pom.version }}": "10.1.0-aletyx",

    # Java
    "{{ java.compiler }}": "17",
    "{{ java.version }}": "JDK 17",
    "{{ java.maven }}": "Maven 3.9.6",
    "{{ java.jdk }}": "java-17-openjdk-amd64",

    # Quarkus
    "{{ quarkus.version }}": "3.20.3",

    # Simple variables
    "{{ community_docs_version }}": "10.1.0",
    "{{ current_version }}": "10.1.1",
    "{{ contactus }}": "https://aletyx.ai/contact-us",
    "{{ company }}": "Aletyx",
}.items(), key=lambda item: len(item[0]), reverse=True))

# Admonition type mapping for MkDocs -> Mintlify
ADMONITION_MAP = {
    "note": "Note",
    "info": "Info",
    "tip": "Tip",
    "success": "Tip",
    "warning": "Warning",
    "danger": "Warning",
    "bug": "Warning",
    "abstract": "Info",
    "example": "Info",
    "question": "Note",
    "failure": "Warning",
    "aletyx": "Info",       # Custom admonition used by aletyx docs
    "quote": "blockquote",  # Special handling
}

# Default titles for admonitions without explicit titles
ADMONITION_DEFAULT_TITLES = {
    "note": "Note",
    "info": "Info",
    "tip": "Tip",
    "success": "Success",
    "warning": "Warning",
    "danger": "Danger",
    "bug": "Bug",
    "abstract": "Abstract",
    "example": "Example",
    "question": "Question",
    "failure": "Failure",
    "aletyx": "Aletyx",
    "quote": "Quote",
}

# Custom HTML div classes to strip
CUSTOM_HTML_CLASSES = [
    "hero-banner",
    "product-banner",
    "feature-cards-grid",
    "path-selector-grid",
    "benefits-grid",
    "whats-new-cards",
    "cta-section",
    "annotated-image-container",
    "hero-content",
    "path-card",
    "why-aletyx",
    "benefit-card",
    "benefit-icon",
    "feature-cards",
    "feature-card",
    "md-button-row",
]

# ---------------------------------------------------------------------------
# Logging Setup
# ---------------------------------------------------------------------------

logger = logging.getLogger("migrate")
logger.setLevel(logging.DEBUG)

# Console handler
console_handler = logging.StreamHandler(sys.stdout)
console_handler.setLevel(logging.INFO)
console_fmt = logging.Formatter("[%(levelname)s] %(message)s")
console_handler.setFormatter(console_fmt)
logger.addHandler(console_handler)

# Collect warnings/errors for report
report_warnings = []
report_errors = []
report_files_processed = []


def warn(msg, src_file=None):
    """Log a warning and record it for the report."""
    prefix = f"[{src_file}] " if src_file else ""
    full = f"{prefix}{msg}"
    logger.warning(full)
    report_warnings.append(full)


def error(msg, src_file=None):
    """Log an error and record it for the report."""
    prefix = f"[{src_file}] " if src_file else ""
    full = f"{prefix}{msg}"
    logger.error(full)
    report_errors.append(full)


# ---------------------------------------------------------------------------
# Build reverse link map (old path -> new Mintlify path without extension)
# ---------------------------------------------------------------------------

def build_link_map():
    """
    Build a mapping from old MkDocs paths (and their variants) to new
    Mintlify paths (without .mdx extension, with leading /).
    """
    link_map = {}
    for old_path, new_path in FILE_MAP.items():
        # New path without extension, with leading /
        new_link = "/" + new_path.replace(".mdx", "")

        # Store the full old path
        link_map[old_path] = new_link

        # Also store without .md extension
        without_md = old_path.replace(".md", "")
        link_map[without_md] = new_link

        # Store with leading /
        link_map["/" + old_path] = new_link
        link_map["/" + without_md] = new_link

        # If it ends in index.md, also map the directory path
        if old_path.endswith("/index.md"):
            dir_path = old_path.rsplit("/index.md", 1)[0]
            link_map[dir_path] = new_link
            link_map[dir_path + "/"] = new_link
            link_map["/" + dir_path] = new_link
            link_map["/" + dir_path + "/"] = new_link

    return link_map


LINK_MAP = build_link_map()


# ---------------------------------------------------------------------------
# Transformation Functions
# ---------------------------------------------------------------------------

def strip_frontmatter(content):
    """
    Remove existing MkDocs YAML frontmatter and return (frontmatter_dict, body).
    Returns empty dict if no frontmatter found.
    """
    fm_dict = {}
    body = content

    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            fm_raw = parts[1].strip()
            body = parts[2]
            # Parse simple key: value pairs
            for line in fm_raw.split("\n"):
                line = line.strip()
                if ":" in line and not line.startswith("-") and not line.startswith("#"):
                    key, _, val = line.partition(":")
                    fm_dict[key.strip()] = val.strip().strip('"').strip("'")

    return fm_dict, body


def extract_title(body):
    """Extract the first # heading from the body."""
    for line in body.split("\n"):
        stripped = line.strip()
        if stripped.startswith("# ") and not stripped.startswith("##"):
            return stripped[2:].strip()
    return None


def extract_description(body):
    """
    Extract the first paragraph of content as a description.
    Skip blank lines, headings, HTML, admonitions, JSX components, and frontmatter.
    """
    lines = body.split("\n")
    in_paragraph = False
    para_lines = []
    skip_indented = False
    inside_jsx = False  # Track when we're inside a JSX component like <Info>...</Info>

    # JSX component names that might wrap content
    jsx_components = {"Note", "Info", "Tip", "Warning", "Accordion", "Tabs", "Tab"}

    for line in lines:
        stripped = line.strip()

        # Track JSX component blocks
        if not inside_jsx:
            for comp in jsx_components:
                if stripped.startswith(f"<{comp}") and not stripped.endswith(f"</{comp}>"):
                    inside_jsx = comp
                    break
        if inside_jsx:
            if stripped.startswith(f"</{inside_jsx}>"):
                inside_jsx = False
            continue

        # Skip blank lines before paragraph starts
        if not stripped and not in_paragraph:
            skip_indented = False
            continue

        # Skip headings
        if stripped.startswith("#"):
            if in_paragraph:
                break
            continue

        # Skip admonitions and their indented content
        if stripped.startswith("!!!") or stripped.startswith("???"):
            skip_indented = True
            if in_paragraph:
                break
            continue

        # Skip indented lines that follow admonitions
        if skip_indented and (line.startswith("    ") or line.startswith("\t")):
            continue
        elif skip_indented and stripped:
            skip_indented = False

        # Skip HTML/JSX tags (including Mintlify components)
        if stripped.startswith("<") and not stripped.startswith("<http"):
            if in_paragraph:
                break
            continue

        # Skip closing JSX/HTML tags
        if stripped.startswith("</"):
            continue

        # Skip link-only lines
        if stripped.startswith("[") and stripped.endswith(")"):
            if in_paragraph:
                break
            continue

        # Skip lines that are just images
        if stripped.startswith("!["):
            if in_paragraph:
                break
            continue

        # Skip lines containing HTML class attributes or JS
        if 'class="' in stripped or 'onclick=' in stripped:
            continue

        # Skip HTML-only lines (<h2>, <p>, etc.)
        if re.match(r'^<\w+[^>]*>.*</\w+>$', stripped):
            if in_paragraph:
                break
            continue

        # Found a text line
        if stripped:
            in_paragraph = True
            para_lines.append(stripped)
        elif in_paragraph:
            break

    desc = " ".join(para_lines)
    # Clean up any remaining markdown/template syntax in description
    desc = re.sub(r'\{\{[^}]*\}\}', '', desc)
    desc = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', desc)
    desc = re.sub(r'[*_`]', '', desc)
    # Remove any HTML tags from description
    desc = re.sub(r'<[^>]+>', '', desc)
    # Remove onclick and other JS attributes that may leak in
    desc = re.sub(r'onclick="[^"]*"', '', desc)
    # Clean up extra whitespace
    desc = re.sub(r'\s+', ' ', desc).strip()

    # If description still has garbage (e.g., JS code, HTML), discard it
    if any(junk in desc for junk in [
        'event.preventDefault', 'document.querySelector',
        'class="', 'onclick=', '<div', '<span',
    ]):
        return None

    # Discard very short or meaningless descriptions
    if len(desc) < 10 or desc in ('---', '...', ''):
        return None

    # Truncate to a reasonable length
    if len(desc) > 200:
        desc = desc[:197].rsplit(" ", 1)[0] + "..."

    return desc if desc else None


def generate_frontmatter(title, description):
    """Generate Mintlify YAML frontmatter."""
    lines = ["---"]
    if title:
        # Escape quotes in title
        safe_title = title.replace('"', '\\"')
        lines.append(f'title: "{safe_title}"')
    if description:
        safe_desc = description.replace('"', '\\"')
        lines.append(f'description: "{safe_desc}"')
    lines.append("---")
    return "\n".join(lines)


def replace_variables(content, src_file=None):
    """Replace all {{ variable }} patterns with their values.

    Handles various whitespace variants:
    - {{ variable }}   (standard)
    - {{variable}}     (no spaces)
    - {{ variable}}    (mixed)
    - {{variable }}    (mixed)
    """
    for pattern, value in VARIABLES.items():
        content = content.replace(pattern, value)

    # Also handle variants with different whitespace
    for pattern, value in VARIABLES.items():
        # Extract the inner key (e.g., "product.name" from "{{ product.name }}")
        inner = pattern[2:-2].strip()
        # Generate all whitespace variants
        variants = [
            "{{" + inner + "}}",           # {{variable}}
            "{{ " + inner + "}}",          # {{ variable}}
            "{{" + inner + " }}",          # {{variable }}
            "{{ " + inner + " }}",         # {{ variable }} (original, already done)
        ]
        for variant in variants:
            content = content.replace(variant, value)

    # Check for any remaining unresolved {{ ... }} patterns
    remaining = re.findall(r'\{\{[^}]+\}\}', content)
    seen = set()
    for match in remaining:
        # Skip Jinja2 control flow / macros and code blocks
        if match.startswith("{%") or match.startswith("{#"):
            continue
        # Skip if inside a code block (basic heuristic: single-letter vars like {{B}}, {{C}} are likely code)
        inner = match[2:-2].strip()
        if len(inner) <= 2 and inner.isalpha():
            continue
        if match not in seen:
            seen.add(match)
            warn(f"Unresolved variable: {match}", src_file)

    return content


def convert_admonitions(content, src_file=None):
    """
    Convert MkDocs admonitions (!!!/???) to Mintlify callout components.

    Handles:
    - !!! type "title"  -> <Type title="title">
    - !!! type          -> <Type>
    - ??? type "title"  -> <Accordion title="title">
    - Nested content with proper indentation
    """
    lines = content.split("\n")
    result = []
    i = 0

    while i < len(lines):
        line = lines[i]

        # Match admonition opening: !!! type "optional title" or ??? type "optional title"
        admonition_match = re.match(
            r'^(\s*)(!!!|\?\?\?)\s+(\w+)?\s*(?:"([^"]*)")?(.*)$', line
        )

        if admonition_match:
            indent = admonition_match.group(1)
            marker = admonition_match.group(2)  # !!! or ???
            admonition_type = (admonition_match.group(3) or "note").lower()
            title = admonition_match.group(4)  # May be None
            extra = (admonition_match.group(5) or "").strip()

            # Handle multi-line title (title that is the content when no quotes)
            is_collapsible = marker == "???"

            # Determine the Mintlify component
            mintlify_type = ADMONITION_MAP.get(admonition_type, "Note")

            # If no explicit title, use default
            if title is None:
                title = ADMONITION_DEFAULT_TITLES.get(admonition_type, admonition_type.capitalize())

            # Collect the admonition body (indented content)
            body_lines = []
            i += 1
            # Determine expected indentation (typically 4 spaces more than the marker)
            expected_indent = indent + "    "

            while i < len(lines):
                # Check if this line is part of the admonition body
                if lines[i].strip() == "":
                    # Blank lines inside admonition are kept
                    body_lines.append("")
                    i += 1
                    continue
                elif lines[i].startswith(expected_indent) or lines[i].startswith(indent + "\t"):
                    # Remove the admonition indentation
                    body_content = lines[i]
                    if body_content.startswith(expected_indent):
                        body_content = body_content[len(expected_indent):]
                    elif body_content.startswith(indent + "\t"):
                        body_content = body_content[len(indent) + 1:]
                    body_lines.append(body_content)
                    i += 1
                else:
                    break

            # Remove trailing blank lines from body
            while body_lines and body_lines[-1].strip() == "":
                body_lines.pop()

            body_text = "\n".join(body_lines)

            # Special handling for blockquote type
            if mintlify_type == "blockquote":
                for bl in body_lines:
                    result.append(f"{indent}> {bl}")
                continue

            # Generate the Mintlify component
            if is_collapsible:
                result.append(f'{indent}<Accordion title="{title}">')
                for bl in body_lines:
                    result.append(f"{indent}{bl}" if bl.strip() else "")
                result.append(f"{indent}</Accordion>")
            else:
                title_attr = f' title="{title}"' if title else ""
                result.append(f"{indent}<{mintlify_type}{title_attr}>")
                for bl in body_lines:
                    result.append(f"{indent}{bl}" if bl.strip() else "")
                result.append(f"{indent}</{mintlify_type}>")

            continue

        result.append(line)
        i += 1

    return "\n".join(result)


def convert_tabs(content, src_file=None):
    """
    Convert MkDocs tabs (=== "Tab Title") to Mintlify <Tabs>/<Tab> components.
    """
    lines = content.split("\n")
    result = []
    i = 0

    while i < len(lines):
        line = lines[i]

        # Match tab opening: === "Tab Title"
        tab_match = re.match(r'^(\s*)=== "([^"]*)"', line)

        if tab_match:
            indent = tab_match.group(1)
            tabs = []

            # Collect all tabs in this group
            while i < len(lines):
                tab_header_match = re.match(r'^(\s*)=== "([^"]*)"', lines[i])
                if not tab_header_match:
                    break

                tab_title = tab_header_match.group(2)
                tab_lines = []
                i += 1

                # Determine expected indentation
                expected_indent = indent + "    "

                while i < len(lines):
                    # Check if we hit the next tab or end of tabs
                    if re.match(r'^(\s*)=== "', lines[i]):
                        break
                    # Check if line is part of this tab (indented or blank)
                    if lines[i].strip() == "":
                        tab_lines.append("")
                        i += 1
                        continue
                    elif lines[i].startswith(expected_indent) or lines[i].startswith(indent + "\t"):
                        body_content = lines[i]
                        if body_content.startswith(expected_indent):
                            body_content = body_content[len(expected_indent):]
                        elif body_content.startswith(indent + "\t"):
                            body_content = body_content[len(indent) + 1:]
                        tab_lines.append(body_content)
                        i += 1
                    else:
                        # Not indented enough; end of this tab group
                        break

                # Remove trailing blank lines
                while tab_lines and tab_lines[-1].strip() == "":
                    tab_lines.pop()

                tabs.append((tab_title, tab_lines))

            # Generate Mintlify Tabs
            result.append(f"{indent}<Tabs>")
            for tab_title, tab_body in tabs:
                result.append(f'{indent}  <Tab title="{tab_title}">')
                for tl in tab_body:
                    result.append(f"{indent}    {tl}" if tl.strip() else "")
                result.append(f"{indent}  </Tab>")
            result.append(f"{indent}</Tabs>")
            continue

        result.append(line)
        i += 1

    return "\n".join(result)


def fix_internal_links(content, src_file_old_path, src_file=None):
    """
    Fix internal links to use new Mintlify paths.
    Handles relative paths, absolute paths, and anchor links.
    """
    src_dir = os.path.dirname(src_file_old_path)

    def replace_link(match):
        text = match.group(1)
        href = match.group(2)

        # Skip external links
        if href.startswith("http://") or href.startswith("https://"):
            return match.group(0)

        # Skip pure anchor links
        if href.startswith("#"):
            return match.group(0)

        # Skip mailto links
        if href.startswith("mailto:"):
            return match.group(0)

        # Split anchor from path
        anchor = ""
        if "#" in href:
            href, anchor = href.rsplit("#", 1)
            anchor = "#" + anchor

        # Resolve the path relative to the source file
        if href.startswith("/"):
            # Absolute path within docs
            resolved = href.lstrip("/")
        else:
            # Relative path
            resolved = os.path.normpath(os.path.join(src_dir, href))
            # Remove any leading ./
            resolved = resolved.lstrip("./")

        # Try to find in link map
        # Try multiple variants (resolved relative to file, then as absolute from doc root)
        candidates = [
            resolved,
            resolved + ".md",
            resolved + "/index.md",
            resolved.rstrip("/"),
            resolved.rstrip("/") + ".md",
            resolved.rstrip("/") + "/index.md",
        ]

        # Also try the href as-is (could be relative to doc root)
        if not href.startswith("/") and not href.startswith("."):
            candidates.extend([
                href,
                href.rstrip("/"),
                href + ".md" if not href.endswith(".md") else href,
            ])

        new_link = None
        for candidate in candidates:
            if candidate in LINK_MAP:
                new_link = LINK_MAP[candidate]
                break

        if new_link:
            return f"[{text}]({new_link}{anchor})"
        else:
            # Remove .md extension at minimum
            cleaned = href
            if cleaned.endswith(".md"):
                cleaned = cleaned[:-3]
            if cleaned.endswith("/index"):
                cleaned = cleaned[:-6]
            if cleaned:
                warn(f"Unresolved internal link: [{text}]({href}{anchor})", src_file)
                return f"[{text}]({cleaned}{anchor})"
            else:
                return f"[{text}]({anchor})"

    # Match markdown links: [text](url) but NOT image links: ![alt](url)
    # Use a negative lookbehind to exclude image syntax
    content = re.sub(r'(?<!!)\[([^\]]*)\]\(([^)]+)\)', replace_link, content)

    return content


def fix_image_paths(content, src_file_old_path, src_file=None):
    """
    Fix image paths for the Mintlify structure.

    Rules:
    - images/something.png (relative to content) -> /images/<source_dir>/images/something.png
    - /assets/images/something.png -> /images/brand/something.png
    - ../../assets/images/something.png -> /images/brand/something.png
    - /assets/diagrams/something.svg -> /images/diagrams/something.svg
    - ../../assets/diagrams/something.svg -> /images/diagrams/something.svg
    """
    src_dir = os.path.dirname(src_file_old_path)

    def replace_image(match):
        full_match = match.group(0)
        alt_text = match.group(1)
        img_path = match.group(2)

        # Skip external images
        if img_path.startswith("http://") or img_path.startswith("https://"):
            return full_match

        # Resolve relative paths
        if img_path.startswith("/"):
            resolved = img_path.lstrip("/")
        else:
            resolved = os.path.normpath(os.path.join(src_dir, img_path))

        # Apply mapping rules
        new_path = None

        # Rule: assets/images/* -> /images/brand/*
        assets_images_match = re.match(r'(?:.*/?)?assets/images/(.+)$', resolved)
        if assets_images_match:
            filename = assets_images_match.group(1)
            new_path = f"/images/brand/{filename}"

        # Rule: assets/diagrams/* -> /images/diagrams/*
        if not new_path:
            assets_diagrams_match = re.match(r'(?:.*/?)?assets/diagrams/(.+)$', resolved)
            if assets_diagrams_match:
                diagram_subpath = assets_diagrams_match.group(1)
                new_path = f"/images/diagrams/{diagram_subpath}"

        # Rule: relative images/* -> /images/<source_dir>/images/*
        if not new_path:
            # Check if the resolved path starts with the source directory
            if "/images/" in resolved or resolved.startswith("images/"):
                # Build path under /images/ mirroring the source structure
                new_path = f"/images/{resolved}"
            elif resolved.endswith((".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp")):
                # Generic image reference
                new_path = f"/images/{resolved}"

        if new_path:
            # Clean up double slashes
            new_path = re.sub(r'/+', '/', new_path)
            if not new_path.startswith("/"):
                new_path = "/" + new_path
            return f"![{alt_text}]({new_path})"
        else:
            warn(f"Unresolved image path: {img_path}", src_file)
            return full_match

    # Match markdown images: ![alt](path) with optional trailing attributes
    content = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', replace_image, content)

    return content


def strip_mkdocs_image_attributes(content):
    """Remove MkDocs image attribute syntax like { style="..." } and {: .class }."""
    # Remove { style="..." } after images
    content = re.sub(r'\)\{[^}]*style=[^}]*\}', ')', content)
    # Remove {: .class } attribute lists
    content = re.sub(r'\{:\s*\.[^}]+\}', '', content)
    return content


def strip_custom_html(content, src_file=None):
    """
    Strip custom HTML divs used for MkDocs Material styling.
    For pages that are mostly custom HTML, leave a placeholder comment.
    """
    # Remove <link> tags (Google fonts, etc.)
    content = re.sub(r'<link\s+[^>]*>', '', content)

    # Remove <span class="time-estimate">...</span>
    content = re.sub(r'<span\s+class="time-estimate">[^<]*</span>', '', content)

    # Remove <i class="material-icons">...</i>
    content = re.sub(r'<i\s+class="material-icons">[^<]*</i>', '', content)

    # Remove inline <style> blocks
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)

    # Remove <script> blocks
    content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL)

    # Remove custom div blocks (opening and closing tags)
    for css_class in CUSTOM_HTML_CLASSES:
        # Remove opening div with this class (including any content on same line)
        content = re.sub(
            rf'<div\s+[^>]*class="[^"]*{re.escape(css_class)}[^"]*"[^>]*>',
            '',
            content
        )

    # Remove any remaining <div> tags with class or other attributes (generic cleanup)
    content = re.sub(r'<div\s+[^>]*>', '', content)

    # Remove all plain <div> tags
    content = re.sub(r'<div>', '', content)

    # Remove standalone </div> lines
    content = re.sub(r'^\s*</div>\s*$', '', content, flags=re.MULTILINE)

    # Remove onclick JavaScript attributes from anchor tags
    content = re.sub(r'\s+onclick="[^"]*"', '', content)

    # Remove SVG elements inline in text
    content = re.sub(r'<svg[^>]*>.*?</svg>', '', content, flags=re.DOTALL)

    # Convert anchor tags with href to regular markdown links
    content = re.sub(
        r'<a\s+href="([^"]*)"[^>]*>([^<]*(?:<[^/][^>]*>[^<]*)*)</a>',
        lambda m: f'[{re.sub(r"<[^>]+>", "", m.group(2)).strip()}]({m.group(1)})',
        content
    )

    return content


def handle_snippet_includes(content, src_file=None):
    """Convert --8<-- snippet includes to comments noting manual review needed."""
    def replace_snippet(match):
        snippet_file = match.group(1)
        warn(f"Snippet include needs manual review: {snippet_file}", src_file)
        return f'{{/* TODO: Migrate snippet include from "{snippet_file}" - needs manual review */}}'

    content = re.sub(r'--8<--\s*"([^"]*)"', replace_snippet, content)
    return content


def handle_edition_content(content, src_file=None):
    """
    Handle edition-specific content patterns.
    Flatten edition tabs and add a callout note.
    """
    # Check for edition-related patterns
    has_edition_content = False

    # Check for Pioneer/Innovator/Horizon/Keystone edition tabs
    edition_patterns = [
        r'=== "Pioneer"',
        r'=== "Innovator"',
        r'=== "Horizon"',
        r'=== "Keystone"',
        r'edition_maven',
        r'edition_docker',
    ]

    for pattern in edition_patterns:
        if re.search(pattern, content):
            has_edition_content = True
            break

    if has_edition_content:
        # Add edition note at the beginning (after frontmatter)
        edition_note = (
            '\n<Info title="Edition Note">\n'
            "Docker registry paths and Maven coordinates vary by edition. "
            "Contact [sales](https://aletyx.ai/contact-us) for your edition-specific values.\n"
            "</Info>\n"
        )

        # Find the right place to insert (after first heading)
        lines = content.split("\n")
        insert_idx = 0
        for idx, line in enumerate(lines):
            if line.strip().startswith("# "):
                insert_idx = idx + 1
                break

        if insert_idx > 0:
            lines.insert(insert_idx, edition_note)
            content = "\n".join(lines)

    # Handle Jinja2 macros
    content = re.sub(
        r'\{\{%?\s*macro\s+.*?%?\}\}.*?\{\{%?\s*endmacro\s*%?\}\}',
        '',
        content,
        flags=re.DOTALL
    )

    # Handle Jinja2 control flow
    content = re.sub(r'\{%\s*.*?\s*%\}', '', content)
    content = re.sub(r'\{#\s*.*?\s*#\}', '', content)

    return content


def clean_code_block_attributes(content):
    """
    Clean up MkDocs code block attributes.
    Convert ```{ .language .copy } to ```language
    """
    # Match code fence with attribute syntax
    def clean_fence(match):
        attrs = match.group(1)
        # Extract language from .language pattern
        lang_match = re.search(r'\.(\w+)', attrs)
        if lang_match:
            lang = lang_match.group(1)
            # Map some common aliases
            lang_map = {
                "sh": "bash",
                "shell": "bash",
                "powershell": "powershell",
                "ps1": "powershell",
                "yml": "yaml",
            }
            lang = lang_map.get(lang, lang)
            return f"```{lang}"
        return "```"

    content = re.sub(r'```\s*\{\s*([^}]+)\s*\}', clean_fence, content)

    return content


def remove_mkdocs_attributes(content):
    """Remove various MkDocs-specific attribute markers."""
    # Remove { .md-button } and similar
    content = re.sub(r'\{\s*\.md-button[^}]*\}', '', content)

    # Remove {: .note } and similar attribute list syntax
    content = re.sub(r'\{:\s*\.[^}]+\}', '', content)

    # Remove { .annotate } markers
    content = re.sub(r'\{\s*\.annotate\s*\}', '', content)

    return content


def convert_critic_markup(content):
    """Convert critic markup to standard markdown."""
    # {== highlighted ==} -> **highlighted**
    content = re.sub(r'\{==\s*(.*?)\s*==\}', r'**\1**', content)

    # ^^superscript^^ -> <sup>superscript</sup>
    content = re.sub(r'\^\^([^^]+)\^\^', r'<sup>\1</sup>', content)

    # ~~strikethrough~~ is already standard markdown, keep as-is

    return content


def remove_mkdocs_html_comments(content):
    """Remove MkDocs-specific HTML comments."""
    # Remove comments like <!-- md:extension --> etc.
    content = re.sub(r'<!--\s*md:[^>]*-->', '', content)
    return content


def clean_empty_lines(content):
    """Clean up excessive blank lines (3+ consecutive -> 2)."""
    content = re.sub(r'\n{4,}', '\n\n\n', content)
    return content


def remove_first_heading(body, title):
    """
    Remove the first # heading from the body if it matches the title,
    since Mintlify renders the title from frontmatter.
    """
    lines = body.split("\n")
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith("# ") and not stripped.startswith("##"):
            # Found first H1 - remove it
            lines[i] = ""
            break
        elif stripped and not stripped.startswith("#"):
            # Found non-heading content first, don't remove anything
            break
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Main Migration Pipeline
# ---------------------------------------------------------------------------

def migrate_file(old_rel_path, new_rel_path):
    """Migrate a single file through the full pipeline."""
    src_path = SRC_ROOT / old_rel_path
    dst_path = DST_ROOT / new_rel_path

    if not src_path.exists():
        error(f"Source file not found: {src_path}", old_rel_path)
        return False

    logger.info(f"Processing: {old_rel_path} -> {new_rel_path}")

    # Read source content
    content = src_path.read_text(encoding="utf-8")

    # 1. Strip existing frontmatter
    fm_dict, body = strip_frontmatter(content)

    # 2. Replace template variables (do this early, before other processing)
    body = replace_variables(body, src_file=old_rel_path)

    # 3. Extract title from body (after variable replacement)
    title = extract_title(body)
    if not title:
        title = fm_dict.get("title", None)
    if not title:
        # Derive from filename
        title = os.path.basename(new_rel_path).replace(".mdx", "").replace("-", " ").title()

    # 4. Handle edition-specific content (before tab conversion)
    body = handle_edition_content(body, src_file=old_rel_path)

    # 5. Handle snippet includes
    body = handle_snippet_includes(body, src_file=old_rel_path)

    # 6. Convert admonitions (before tabs, since admonitions can be inside tabs)
    body = convert_admonitions(body, src_file=old_rel_path)

    # 7. Convert tabs
    body = convert_tabs(body, src_file=old_rel_path)

    # 8. Fix internal links
    body = fix_internal_links(body, old_rel_path, src_file=old_rel_path)

    # 9. Fix image paths
    body = fix_image_paths(body, old_rel_path, src_file=old_rel_path)
    body = strip_mkdocs_image_attributes(body)

    # 10. Strip custom HTML (must happen before description extraction)
    body = strip_custom_html(body, src_file=old_rel_path)

    # 11. Clean code block attributes
    body = clean_code_block_attributes(body)

    # 12. Remove MkDocs-specific attributes
    body = remove_mkdocs_attributes(body)

    # 13. Convert critic markup
    body = convert_critic_markup(body)

    # 14. Remove MkDocs HTML comments
    body = remove_mkdocs_html_comments(body)

    # 15. Remove the first H1 heading (Mintlify uses frontmatter title)
    body = remove_first_heading(body, title)

    # 16. Clean up empty lines
    body = clean_empty_lines(body)

    # 17. Extract description (after all HTML stripping and cleanup)
    description = extract_description(body)

    # 18. Generate frontmatter
    frontmatter = generate_frontmatter(title, description)

    # 19. Assemble final content
    final_content = frontmatter + "\n" + body.strip() + "\n"

    # 20. Ensure destination directory exists
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    # 21. Write the output file
    dst_path.write_text(final_content, encoding="utf-8")

    report_files_processed.append((old_rel_path, new_rel_path))
    return True


def generate_report():
    """Generate a migration report."""
    report_path = DST_ROOT / "migration-report.md"
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    lines = [
        "# Migration Report",
        "",
        f"Generated: {timestamp}",
        "",
        "## Summary",
        "",
        f"- **Files processed:** {len(report_files_processed)}",
        f"- **Warnings:** {len(report_warnings)}",
        f"- **Errors:** {len(report_errors)}",
        "",
    ]

    # Files processed
    lines.append("## Files Processed")
    lines.append("")
    lines.append("| Source (MkDocs) | Destination (Mintlify) |")
    lines.append("|---|---|")
    for old_path, new_path in report_files_processed:
        lines.append(f"| `{old_path}` | `{new_path}` |")
    lines.append("")

    # Warnings
    if report_warnings:
        lines.append("## Warnings")
        lines.append("")
        for w in report_warnings:
            lines.append(f"- {w}")
        lines.append("")

    # Errors
    if report_errors:
        lines.append("## Errors")
        lines.append("")
        for e in report_errors:
            lines.append(f"- {e}")
        lines.append("")

    # Files not found in source
    missing = []
    for old_path in FILE_MAP:
        src = SRC_ROOT / old_path
        if not src.exists():
            missing.append(old_path)

    if missing:
        lines.append("## Missing Source Files")
        lines.append("")
        for m in missing:
            lines.append(f"- `{m}`")
        lines.append("")

    report_path.write_text("\n".join(lines), encoding="utf-8")
    logger.info(f"Report written to: {report_path}")


def main():
    """Main entry point for the migration script."""
    logger.info("=" * 60)
    logger.info("MkDocs to Mintlify Migration")
    logger.info(f"Source: {SRC_ROOT}")
    logger.info(f"Destination: {DST_ROOT}")
    logger.info(f"Files to migrate: {len(FILE_MAP)}")
    logger.info("=" * 60)

    success_count = 0
    fail_count = 0

    for old_path, new_path in FILE_MAP.items():
        try:
            if migrate_file(old_path, new_path):
                success_count += 1
            else:
                fail_count += 1
        except Exception as e:
            error(f"Exception processing file: {e}", old_path)
            fail_count += 1
            import traceback
            traceback.print_exc()

    # Generate report
    generate_report()

    # Print summary
    logger.info("=" * 60)
    logger.info("Migration Complete")
    logger.info(f"  Successful: {success_count}")
    logger.info(f"  Failed:     {fail_count}")
    logger.info(f"  Warnings:   {len(report_warnings)}")
    logger.info(f"  Errors:     {len(report_errors)}")
    logger.info("=" * 60)

    if fail_count > 0 or report_errors:
        sys.exit(1)


if __name__ == "__main__":
    main()
