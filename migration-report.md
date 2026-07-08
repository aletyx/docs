# Old-docs migration report

Review of all pages served by the source site (https://aletyx-docs-preview.aletyx.workers.dev/, mkdocs nav of `aletyx/aletyx-docs`) against this repo, 2026-07-08.

| Category | Pages |
|---|---|
| Migrated in this pass | 54 |
| Already migrated previously | 124 |
| Covered by rewritten/renamed equivalent | 8 |
| Orphans in source (not in site nav) — skipped | 54 |

## 1. Migrated in this pass

Matched by URL slug and content blocks against the repo; no equivalent found, so each was converted per the mkdocs→Mintlify spec (prose verbatim; admonitions→callouts, tabs→`<Tabs>`, macros resolved, images downloaded/copied, links remapped).

| Old page | New file | Action | Notes |
|---|---|---|---|
| decision-control-tower/index.md | decision-control-tower/overview.mdx | migrated | Keystone Edition callout; grammar fix after macro expansion |
| decision-control-tower/architecture.md | decision-control-tower/architecture.mdx | migrated | |
| decision-control-tower/dashboard.md | decision-control-tower/dashboard.mdx | migrated | nav label "Portal Tour" |
| decision-control-tower/environments.md | decision-control-tower/environments.mdx | migrated | |
| decision-control-tower/tasks.md | decision-control-tower/tasks.mdx | migrated | |
| decision-control-tower/deployment/index.md | decision-control-tower/deployment/overview.mdx | migrated | sidebarTitle "Deployment" |
| decision-control-tower/deployment/identity-access-management.md | decision-control-tower/deployment/identity-access-management.mdx | migrated | |
| decision-control-tower/deployment/database-configuration.md | decision-control-tower/deployment/database-configuration.mdx | migrated | |
| decision-control-tower/deployment/container-configuration.md | decision-control-tower/deployment/container-configuration.mdx | migrated | |
| decision-control-tower/deployment/kubernetes-openshift-deployment.md | decision-control-tower/deployment/kubernetes-openshift-deployment.mdx | migrated | light/dark architecture diagram pair |
| decision-control-tower/deployment/supported-operating-environments.md | decision-control-tower/deployment/supported-operating-environments.mdx | migrated | |
| decision-control-tower/how-to/index.md | decision-control-tower/how-to/overview.mdx | migrated | feature-card grid -> CardGroup |
| decision-control-tower/how-to/sign-in-and-global.md | decision-control-tower/how-to/sign-in-and-global.mdx | migrated | |
| decision-control-tower/how-to/environments.md | decision-control-tower/how-to/environments.mdx | migrated | tabs -> Tabs; kbd keys |
| decision-control-tower/how-to/promotions.md | decision-control-tower/how-to/promotions.mdx | migrated | |
| decision-control-tower/how-to/governance-tasks.md | decision-control-tower/how-to/governance-tasks.mdx | migrated | tabs -> Tabs |
| decision-control-tower/how-to/audit-trail.md | decision-control-tower/how-to/audit-trail.mdx | migrated | nav label "Promotion History" |
| decision-control-tower-sidecar/index.md | decision-control-tower-sidecar/overview.mdx | migrated | sidebarTitle "Sidecar" |
| decision-control-tower-sidecar/architecture.md | decision-control-tower-sidecar/architecture.mdx | migrated | source author-note blockquote kept verbatim |
| decision-control-tower-sidecar/deployment/index.md | decision-control-tower-sidecar/deployment/overview.mdx | migrated | sidebarTitle "Deployment" |
| decision-control-tower-sidecar/deployment/configuration.md | decision-control-tower-sidecar/deployment/configuration.mdx | migrated | |
| decision-control-tower-sidecar/how-to/index.md | decision-control-tower-sidecar/how-to/overview.mdx | migrated | |
| decision-control-tower-sidecar/how-to/customize-workflow.md | decision-control-tower-sidecar/how-to/customize-workflow.mdx | migrated | |
| decision-control-tower-sidecar/how-to/git-model-versioning.md | decision-control-tower-sidecar/how-to/git-model-versioning.mdx | migrated | |
| getting-started/environment-setup.md | getting-started/environment-setup.mdx | migrated | nested tabs preserved; fixed source indentation bug |
| getting-started/java-setup.md | getting-started/java-setup.mdx | migrated | sidebarTitle "Java & Quarkus" |
| getting-started/maven.md | getting-started/maven.mdx | migrated | fixed broken source link (getting-start-aletyx typo) |
| getting-started/container-tools.md | getting-started/container-tools.mdx | migrated | tabs converted; fence info-string comments moved into body |
| getting-started/git-configuration.md | getting-started/git-configuration.mdx | migrated | |
| getting-started/cloud-tools.md | getting-started/cloud-tools.mdx | migrated | source numbering quirks preserved |
| getting-started/vscode.md | getting-started/vscode.mdx | migrated | trademark macros resolved |
| getting-started/ubuntu.md | getting-started/ubuntu.mdx | migrated | java.maven macro resolved to 3.9.6 in URLs |
| guides/getting-started/ai-assistant.md | guides/getting-started/ai-assistant.mdx | migrated | 7 admonitions mapped; cancel-subscription image was only a TODO comment in source, dropped |
| guides/getting-started/getting-started-playground.md | guides/getting-started/getting-started-playground.mdx | migrated | sidebarTitle "Playground Tour"; HTML quick-nav grids -> CardGroup |
| guides/getting-started/getting-started-start-aletyx.md | guides/getting-started/getting-started-start-aletyx.mdx | migrated | sidebarTitle "Project Starter"; custom aletyx admonition -> Info |
| guides/getting-started/use-cases/index.md | guides/use-cases/overview.mdx | migrated | links all 9 cases |
| guides/getting-started/use-cases/finance.md | guides/use-cases/finance.mdx | migrated | sidebarTitle "Finance & Banking"; 3 light/dark diagrams |
| guides/getting-started/use-cases/healthcare.md | guides/use-cases/healthcare.mdx | migrated | 3 light/dark diagrams |
| guides/getting-started/use-cases/human-resources.md | guides/use-cases/human-resources.mdx | migrated | 3 light/dark diagrams |
| guides/getting-started/use-cases/manufacturing.md | guides/use-cases/manufacturing.mdx | migrated | 3 light/dark diagrams |
| guides/getting-started/use-cases/retail.md | guides/use-cases/retail.mdx | migrated | 3 light/dark diagrams |
| core/tutorials/index.md | drools/tutorials/overview.mdx | migrated | |
| core/tutorials/first-rule.md | drools/tutorials/first-rule.mdx | migrated | 2 links kept on preview host (data-objects, rule-unit-guide: orphan pages) |
| core/tutorials/decision-tables.md | drools/tutorials/decision-tables.mdx | migrated | table cells escaped; source quirks preserved |
| core/decisions/drl/intro-queries.md | drools/drl/queries.mdx | migrated | sidebarTitle "Queries" |
| core/processes/basic-bpmn/lab-rules-orchestration.md | guides/tutorials/lab-rules-orchestration.mdx | migrated | sidebarTitle "Rules Orchestration Lab" |
| core/processes/basic-bpmn/lab-saga.md | guides/tutorials/lab-saga.mdx | migrated | sidebarTitle "SAGA Pattern Lab" |
| core/processes/advanced-bpmn/lab-eda.md | guides/tutorials/lab-eda.mdx | migrated | sidebarTitle "Event-Driven Lab" |
| core/processes/advanced-bpmn/sub-adhoc.md | guides/tutorials/sub-adhoc.mdx | migrated | sidebarTitle "Ad-Hoc Subprocesses" |
| guides/index.md | guides/overview.mdx | migrated | links resolved via map; dropped tags frontmatter |
| deployment/cloud-native/ecs.md | deployment/cloud-native/ecs.mdx | migrated | image /images/deployment/ecs-architecture.svg; macros resolved |
| components/compact-architecture/securing-the-architecture.md | components/compact-architecture/securing-the-architecture.mdx | migrated | sidebarTitle "Securing Console"; fixed unpaired backtick from source |
| product/index.md | product/overview.mdx | migrated | sidebarTitle "Enterprise Features"; 3 links kept on preview host (product/deployment/{standalone,container,kubernetes} unmigrated) |
| legal/cookie-policy.md | legal/cookie-policy.mdx | migrated | no frontmatter in source; title from H1 |

## 2. Already migrated previously

Matched by `source:` frontmatter or by slug + content-block comparison.

| Old page | Current page |
|---|---|
| components | /components/overview |
| components/compact-architecture | /components/compact-architecture/overview |
| components/compact-architecture/scaling | /components/compact-architecture/scaling |
| components/drools | /drools/overview |
| components/drools/drools-engine | /drools/engine |
| components/drools/drools-getting-started | /drools/getting-started |
| components/drools/drools-ruleflow | /drools/ruleflow |
| components/drools/drools-visual-guide | /drools/visual-guide |
| components/drools/troubleshooting | /drools/troubleshooting |
| components/jbpm | /components/jbpm |
| components/kogito | /components/kogito |
| components/mcp | /components/mcp/overview |
| components/mcp/first-interaction | /components/mcp/first-interaction |
| components/playground | /components/playground/overview |
| components/playground/accelerators | /components/playground/accelerators |
| components/playground/advanced-accelerator | /components/playground/advanced-accelerator |
| components/playground/components | /components/playground/components |
| components/playground/customizing | /components/playground/customizing |
| components/playground/dev-deployment | /components/playground/dev-deployment |
| core | /architecture/overview |
| core/decisions | /architecture/decisions/overview |
| core/decisions/dmn | /architecture/decisions/dmn/overview |
| core/decisions/dmn/concepts | /architecture/decisions/dmn/concepts |
| core/decisions/dmn/decision-services | /architecture/decisions/dmn/decision-services |
| core/decisions/dmn/feel-handbook | /architecture/decisions/dmn/feel-handbook |
| core/decisions/dmn/listeners | /architecture/decisions/dmn/listeners |
| core/decisions/drl | /drools/drl/overview |
| core/decisions/drl/data-stores | /drools/drl/data-stores |
| core/decisions/drl/decision-tables | /drools/decision-tables/overview |
| core/decisions/drl/decision-tables/getting-started/first-table | /drools/decision-tables/first-table |
| core/decisions/drl/decision-tables/getting-started/running | /drools/decision-tables/running |
| core/decisions/drl/drl-actions | /drools/drl/actions |
| core/decisions/drl/drl-building-blocks | /drools/drl/building-blocks |
| core/decisions/drl/drl-conditions | /drools/drl/conditions |
| core/decisions/drl/implementing-decision-services | /drools/drl/decision-services |
| core/decisions/drl/oopath-details | /drools/drl/oopath |
| core/decisions/drl/phreak | /drools/drl/phreak |
| core/decisions/drl/rule-units | /drools/drl/rule-units |
| core/decisions/drl/syntax-introduction | /drools/drl/syntax-basics |
| core/decisions/rule-language | /architecture/decisions/rule-language |
| core/integration | /architecture/integration/overview |
| core/integration/decision-process | /architecture/integration/decision-process |
| core/integration/event-driven | /architecture/integration/event-driven |
| core/integration/service-orchestration | /architecture/integration/service-orchestration |
| core/processes | /architecture/processes/overview |
| core/processes/advanced-bpmn | /architecture/processes/advanced-bpmn/overview |
| core/processes/advanced-bpmn/event-driven | /architecture/processes/advanced-bpmn/event-driven |
| core/processes/advanced-bpmn/flex-processes | /architecture/processes/advanced-bpmn/flexible-processes |
| core/processes/advanced-bpmn/graphql | /architecture/processes/advanced-bpmn/graphql |
| core/processes/advanced-bpmn/iso-8601-guide | /architecture/processes/advanced-bpmn/iso-8601 |
| core/processes/advanced-bpmn/listeners | /architecture/processes/advanced-bpmn/listeners |
| core/processes/advanced-bpmn/monitoring | /architecture/processes/advanced-bpmn/monitoring |
| core/processes/advanced-bpmn/new-process-versions | /architecture/processes/advanced-bpmn/process-versioning |
| core/processes/advanced-bpmn/sub-embedded | /architecture/processes/advanced-bpmn/subprocesses/embedded |
| core/processes/advanced-bpmn/sub-event | /architecture/processes/advanced-bpmn/subprocesses/event |
| core/processes/advanced-bpmn/sub-reusable | /architecture/processes/advanced-bpmn/subprocesses/reusable |
| core/processes/advanced-bpmn/subprocesses | /architecture/processes/advanced-bpmn/subprocesses/overview |
| core/processes/advanced-bpmn/tasks/human-tasks | /architecture/processes/advanced-bpmn/human-tasks |
| core/processes/architecture/compact-architecture | /architecture/processes/architecture/adaptive-process-architecture |
| core/processes/architecture/data-audit | /architecture/processes/architecture/process-history |
| core/processes/architecture/data-index | /architecture/processes/architecture/data-intelligence-layer |
| core/processes/basic-bpmn | /architecture/processes/basic-bpmn/overview |
| core/processes/basic-bpmn/activities | /architecture/processes/basic-bpmn/activities |
| core/processes/basic-bpmn/api | /architecture/processes/basic-bpmn/api |
| core/processes/basic-bpmn/editor | /architecture/processes/basic-bpmn/editor |
| core/processes/basic-bpmn/end-events | /architecture/processes/basic-bpmn/end-events |
| core/processes/basic-bpmn/gateways | /architecture/processes/basic-bpmn/gateways |
| core/processes/basic-bpmn/intermediate-events | /architecture/processes/basic-bpmn/intermediate-events |
| core/processes/basic-bpmn/start-events | /architecture/processes/basic-bpmn/start-events |
| core/processes/data | /architecture/processes/components/data-index-audit |
| core/processes/engine | /architecture/processes/architecture/engine |
| core/processes/job-service | /architecture/processes/components/job-service |
| core/processes/runtimes | /architecture/processes/architecture/runtimes |
| core/processes/user-task | /architecture/processes/components/user-tasks |
| decision-control | /decision-control/overview |
| decision-control/architecture | /decision-control/architecture |
| decision-control/aws | /decision-control/aws/overview |
| decision-control/aws/sandbox | /decision-control/aws/sandbox |
| decision-control/deployment | /decision-control/deployment/overview |
| decision-control/deployment/container-configuration | /decision-control/deployment/container-configuration |
| decision-control/deployment/database-configuration | /decision-control/deployment/database-configuration |
| decision-control/deployment/identity-access-management | /decision-control/deployment/identity-access-management |
| decision-control/deployment/kubernetes-openshift-deployment | /decision-control/deployment/kubernetes-openshift-deployment |
| decision-control/deployment/supported-operating-environments | /decision-control/deployment/supported-operating-environments |
| decision-control/faq-troubleshooting | /decision-control/faq-troubleshooting |
| decision-control/how-to | /decision-control/how-to/overview |
| decision-control/how-to/authoring-ai | /decision-control/how-to/authoring-ai |
| decision-control/how-to/authoring-models | /decision-control/how-to/authoring-models |
| decision-control/how-to/authoring-testing | /decision-control/how-to/authoring-testing |
| decision-control/how-to/home-and-global | /decision-control/how-to/home-and-global |
| decision-control/how-to/management-execute | /decision-control/how-to/management-execute |
| decision-control/how-to/management-models | /decision-control/how-to/management-models |
| decision-control/how-to/monitoring | /decision-control/how-to/monitoring |
| decision-control/how-to/prompting | /decision-control/how-to/prompting |
| decision-control/integration-and-apis | /decision-control/integration-and-apis |
| decision-control/usage-scenarios | /decision-control/usage-scenarios |
| deployment | /deployment/overview |
| deployment/aws-marketplace | /deployment/aws-marketplace/overview |
| deployment/aws-marketplace/sandbox | /deployment/aws-marketplace/sandbox |
| deployment/aws-marketplace/security | /deployment/aws-marketplace/security |
| deployment/aws-marketplace/ssl-https | /deployment/aws-marketplace/ssl-https |
| deployment/aws-marketplace/troubleshooting | /deployment/aws-marketplace/troubleshooting |
| deployment/cloud-native | /deployment/cloud-native/overview |
| deployment/cloud-native/jvm-vs-native | /deployment/cloud-native/jvm-vs-native |
| deployment/kubernetes | /deployment/kubernetes |
| deployment/openshift | /deployment/openshift |
| guides/best-practices | /guides/best-practices |
| guides/drools-7-eol | /drools/drools-7-migration |
| guides/examples/bpmn-example | /guides/tutorials/bpmn-example |
| guides/examples/dmn | /guides/tutorials/dmn/overview |
| guides/examples/dmn/dmn-accelerators | /guides/tutorials/dmn/dmn-accelerators |
| guides/examples/dmn/dmn-advanced-deployment | /guides/tutorials/dmn/dmn-advanced-deployment |
| guides/examples/dmn/dmn-basic-deployment | /guides/tutorials/dmn/dmn-basic-deployment |
| guides/examples/dmn/dmn-basic-example | /guides/tutorials/dmn/dmn-basic-example |
| guides/examples/dmn/dmn-deeper | /guides/tutorials/dmn/dmn-deeper |
| guides/examples/dmn/dmn-intro | /guides/tutorials/dmn/dmn-intro |
| guides/examples/drl-example | /drools/tutorials/drl-example |
| reference | /reference/overview |
| reference/dmn | /reference/dmn/overview |
| reference/dmn/reserved-words | /reference/dmn/reserved-words |
| reference/dmn/select-reference | /reference/dmn/select-reference |
| reference/release-notes | /reference/release-notes |
| test-scenarios | /architecture/testing/overview |
| test-scenarios/authoring-scesim | /architecture/testing/test-scenarios |

## 3. Covered by rewritten or renamed equivalents

| Old page | Current page | Detail |
|---|---|---|
| deployment/playground | /components/playground/self-hosting | previously migrated under a new name |
| guides/getting-started | /quickstart | replaced by the rewritten Quickstart section (quickstart + 3 role pages) |
| guides/getting-started/getting-started-playground-bpmn | /components/playground/bpmn-tutorial | previously migrated under a new name (content verified section-by-section) |
| guides/getting-started/getting-started-playground-dmn | /components/playground/dmn-tutorial | previously migrated under a new name (content verified section-by-section) |
| guides/getting-started/use-cases/compliance | /guides/use-cases/compliance | covered by existing rewritten page |
| guides/getting-started/use-cases/insurance | /guides/use-cases/insurance | covered by existing rewritten page |
| guides/getting-started/use-cases/lending | /guides/use-cases/lending | covered by existing rewritten page |
| guides/getting-started/use-cases/onboarding | /guides/use-cases/onboarding | covered by existing rewritten page |

## 4. Not migrated — orphan source files (not reachable from the source site navigation)

These .md files exist in the source repo (and render at direct URLs) but were deliberately excluded from the source site nav — drafts, backups, superseded or hidden pages (`*-old`, `*-backup`, `*-hidden`, `*-SIMPLE`, includes). Skipped; revisit individually if any should be resurrected.

- `404`
- `apis`
- `apis/graphql-api`
- `apis/java-api`
- `apis/rest-api`
- `components/compact-architecture/best-practices`
- `components/compact-architecture/ca`
- `components/compact-architecture/configuration`
- `components/compact-architecture/getting-started`
- `components/compact-architecture/job-service`
- `components/compact-architecture/key-components`
- `components/compact-architecture/spring-console-hidden`
- `components/mcp/best-practices`
- `components/mcp/governance`
- `components/mcp/process-integration`
- `components/mcp/setup`
- `components/playground/accelerators-old`
- `components/playground/features`
- `core/decisions/dmn/advanced-feel`
- `core/decisions/dmn/examples`
- `core/decisions/drl/data-objects`
- `core/decisions/drl/introduction`
- `core/processes/advanced-bpmn/lab-sub-embedded`
- `core/processes/advanced-bpmn/lab-sub-reusable`
- `core/processes/advanced-bpmn/listeners/listeners`
- `core/processes/best-practices`
- `core/tutorials/rule-unit-guide`
- `deployment/compact-architecture`
- `deployment/compact-architecture/basic-setup`
- `deployment/compact-architecture/database-config`
- `deployment/compact-architecture/monitoring`
- `deployment/docker`
- `getting-started`
- `guides/bpmn-modeling`
- `guides/connectors`
- `guides/developer-quickstart`
- `guides/examples`
- `guides/examples/dmn/decision-modeling`
- `guides/examples/dmn/dmn-advanced-modeling`
- `guides/examples/dmn/dmn-intro-lab`
- `guides/getting-started-backup`
- `guides/getting-started/getting-started-command-line`
- `guides/getting-started/getting-started-playground-dmn-SIMPLE`
- `guides/getting-started/poc-guidelines`
- `guides/kubernetes-deployment`
- `guides/process-advanced/listeners`
- `guides/process-analytics`
- `includes/docker-registry-examples`
- `includes/edition-snippets`
- `migration/community-to-aletyx`
- `product/deployment`
- `product/extensions`
- `releases`
- `system-requirements`

## Navigation & redirect changes

- New sidebar groups mirroring the source nav: **Decision Control Tower** (with Tower Deployment, Tower How-To Guides, and nested Sidecar groups), **Playground Tutorials** and **Environment Setup** under Get started, **Tutorials** under Drools, and **Process Development**/**Industry Use Cases** (renamed/expanded) under Guides; Guides gained its overview landing page; Cloud-Native gained ECS and Securing Console; Reference gained Enterprise Features and Cookie Policy.
- 19 new 301 redirects added in docs.json for old-site paths whose new location differs (core/tutorials/*, labs, use-cases, /product, tower/sidecar bare dir paths, /guides).
- Existing Decision Control pages that linked to the preview host for Tower pages now link locally.
