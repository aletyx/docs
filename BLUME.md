# Blume + Notion migration tracker

Source: legacy Mintlify site (`docs.json` navigation). **246** pages in nav, **6** `.mdx` files not in nav (1 in `reference/`, 5 in `archive/`).

Target: the Notion [Docs database](https://app.notion.com/p/aletyx/3dcabc1d8c6480988b34d33e8c1df33a?v=3dcabc1d8c64800f90dd000c7a36eced) (properties: Name, Description, Order, Slug, Status). Blume reads its content from that database (`blume.config.ts`), so a page's Blume URL is derived from its Slug (`index` maps to `/`).

Blume URL and Notion URL are filled in as each page is migrated.

| # | Page title | Source file | Nav category | Blume URL | Notion URL |
|---|---|---|---|---|---|
| 1 | Welcome to Aletyx | index.mdx | Home | / | [Welcome](https://app.notion.com/p/3dcabc1d8c6480299acdedfd846516f5) |
| 2 | Quickstart | quickstart.mdx | Get started |  |  |
| 3 | Quickstart for Decision Analysts | quickstart/decision-analysts.mdx | Get started |  |  |
| 4 | Quickstart for Tech Leads | quickstart/tech-leads.mdx | Get started |  |  |
| 5 | Aletyx AI Assistant | guides/getting-started/ai-assistant.mdx | Get started |  |  |
| 6 | Exploring the Aletyx Playground | guides/getting-started/getting-started-playground.mdx | Get started > Playground Tutorials |  |  |
| 7 | Environment Setup in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | getting-started/environment-setup.mdx | Get started > Environment Setup |  |  |
| 8 | Your Aletyx Credentials | getting-started/credentials.mdx | Get started > Environment Setup |  |  |
| 9 | Java Installation and Configuration in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | getting-started/java-setup.mdx | Get started > Environment Setup |  |  |
| 10 | Configuring Maven Settings for Aletyx Enterprise Build | getting-started/maven.mdx | Get started > Environment Setup |  |  |
| 11 | Container Runtime Setup in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | getting-started/container-tools.mdx | Get started > Environment Setup |  |  |
| 12 | GitHub Integration with Aletyx Playground in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | getting-started/git-configuration.mdx | Get started > Environment Setup |  |  |
| 13 | Cloud Command Line Tools in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | getting-started/cloud-tools.mdx | Get started > Environment Setup |  |  |
| 14 | Visual Studio Code® and Aletyx Developer Tools Configuration in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | getting-started/vscode.mdx | Get started > Environment Setup |  |  |
| 15 | Ubuntu Environment Setup Guide for Aletyx Enterprise Build of Kogito and Drools | getting-started/ubuntu.mdx | Get started > Environment Setup |  |  |
| 16 | Overview | ai-assistant/overview.mdx | AI Assistant |  |  |
| 17 | Setup | ai-assistant/setup.mdx | AI Assistant |  |  |
| 18 | Prompts | ai-assistant/prompts.mdx | AI Assistant |  |  |
| 19 | Testing | ai-assistant/testing.mdx | AI Assistant |  |  |
| 20 | Core Concepts | core-concepts.mdx | Core Concepts |  |  |
| 21 | Architecture | architecture/overview.mdx | Core Concepts |  |  |
| 22 | Decision Automation | architecture/decisions/overview.mdx | Core Concepts > Decision Automation |  |  |
| 23 | Rule Language | architecture/decisions/rule-language.mdx | Core Concepts > Decision Automation |  |  |
| 24 | DMN | architecture/decisions/dmn/overview.mdx | Core Concepts > Decision Automation > DMN |  |  |
| 25 | Concepts | architecture/decisions/dmn/concepts.mdx | Core Concepts > Decision Automation > DMN |  |  |
| 26 | Decision Services | architecture/decisions/dmn/decision-services.mdx | Core Concepts > Decision Automation > DMN |  |  |
| 27 | FEEL Handbook | architecture/decisions/dmn/feel-handbook.mdx | Core Concepts > Decision Automation > DMN |  |  |
| 28 | Listeners | architecture/decisions/dmn/listeners.mdx | Core Concepts > Decision Automation > DMN |  |  |
| 29 | Process Automation | architecture/processes/overview.mdx | Core Concepts > Process Automation |  |  |
| 30 | Adaptive Process Architecture | architecture/processes/architecture/adaptive-process-architecture.mdx | Core Concepts > Process Automation > Runtime Architecture |  |  |
| 31 | Engine Architecture | architecture/processes/architecture/engine.mdx | Core Concepts > Process Automation > Runtime Architecture |  |  |
| 32 | Runtimes | architecture/processes/architecture/runtimes.mdx | Core Concepts > Process Automation > Runtime Architecture |  |  |
| 33 | Data Intelligence Layer | architecture/processes/architecture/data-intelligence-layer.mdx | Core Concepts > Process Automation > Runtime Architecture |  |  |
| 34 | Process History | architecture/processes/architecture/process-history.mdx | Core Concepts > Process Automation > Runtime Architecture |  |  |
| 35 | Data-Index & Data-Audit | architecture/processes/components/data-index-audit.mdx | Core Concepts > Process Automation > Core Components |  |  |
| 36 | Job Service | architecture/processes/components/job-service.mdx | Core Concepts > Process Automation > Core Components |  |  |
| 37 | User Tasks | architecture/processes/components/user-tasks.mdx | Core Concepts > Process Automation > Core Components |  |  |
| 38 | BPMN Basics | architecture/processes/basic-bpmn/overview.mdx | Core Concepts > Process Automation > BPMN Basics |  |  |
| 39 | BPMN Editor | architecture/processes/basic-bpmn/editor.mdx | Core Concepts > Process Automation > BPMN Basics |  |  |
| 40 | Start Events | architecture/processes/basic-bpmn/start-events.mdx | Core Concepts > Process Automation > BPMN Basics |  |  |
| 41 | End Events | architecture/processes/basic-bpmn/end-events.mdx | Core Concepts > Process Automation > BPMN Basics |  |  |
| 42 | Intermediate Events | architecture/processes/basic-bpmn/intermediate-events.mdx | Core Concepts > Process Automation > BPMN Basics |  |  |
| 43 | Gateways | architecture/processes/basic-bpmn/gateways.mdx | Core Concepts > Process Automation > BPMN Basics |  |  |
| 44 | Activities | architecture/processes/basic-bpmn/activities.mdx | Core Concepts > Process Automation > BPMN Basics |  |  |
| 45 | Process API | architecture/processes/basic-bpmn/api.mdx | Core Concepts > Process Automation > BPMN Basics |  |  |
| 46 | Advanced BPMN | architecture/processes/advanced-bpmn/overview.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 47 | ISO-8601 Time Formats | architecture/processes/advanced-bpmn/iso-8601.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 48 | Event-Driven Architecture | architecture/processes/advanced-bpmn/event-driven.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 49 | Flexible Processes | architecture/processes/advanced-bpmn/flexible-processes.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 50 | GraphQL Integration | architecture/processes/advanced-bpmn/graphql.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 51 | Process Listeners | architecture/processes/advanced-bpmn/listeners.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 52 | Monitoring | architecture/processes/advanced-bpmn/monitoring.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 53 | Subprocesses | architecture/processes/advanced-bpmn/subprocesses/overview.mdx | Core Concepts > Process Automation > Advanced BPMN > Subprocesses |  |  |
| 54 | Embedded | architecture/processes/advanced-bpmn/subprocesses/embedded.mdx | Core Concepts > Process Automation > Advanced BPMN > Subprocesses |  |  |
| 55 | Reusable | architecture/processes/advanced-bpmn/subprocesses/reusable.mdx | Core Concepts > Process Automation > Advanced BPMN > Subprocesses |  |  |
| 56 | Event | architecture/processes/advanced-bpmn/subprocesses/event.mdx | Core Concepts > Process Automation > Advanced BPMN > Subprocesses |  |  |
| 57 | Human Tasks | architecture/processes/advanced-bpmn/human-tasks.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 58 | Process Versioning | architecture/processes/advanced-bpmn/process-versioning.mdx | Core Concepts > Process Automation > Advanced BPMN |  |  |
| 59 | Integration Patterns | architecture/integration/overview.mdx | Core Concepts > Integration Patterns |  |  |
| 60 | Decision & Process | architecture/integration/decision-process.mdx | Core Concepts > Integration Patterns |  |  |
| 61 | Event-Driven | architecture/integration/event-driven.mdx | Core Concepts > Integration Patterns |  |  |
| 62 | Service Orchestration | architecture/integration/service-orchestration.mdx | Core Concepts > Integration Patterns |  |  |
| 63 | Guides | guides/overview.mdx | Guides |  |  |
| 64 | Decisions | guides/decisions.mdx | Guides |  |  |
| 65 | Processes | guides/processes.mdx | Guides |  |  |
| 66 | Decision Modeling | guides/tutorials/dmn/overview.mdx | Guides > Decision Modeling |  |  |
| 67 | Introduction to DMN | guides/tutorials/dmn/dmn-intro.mdx | Guides > Decision Modeling |  |  |
| 68 | Basic Examples | guides/tutorials/dmn/dmn-basic-example.mdx | Guides > Decision Modeling |  |  |
| 69 | DMN Accelerators | guides/tutorials/dmn/dmn-accelerators.mdx | Guides > Decision Modeling |  |  |
| 70 | Basic Deployment | guides/tutorials/dmn/dmn-basic-deployment.mdx | Guides > Decision Modeling |  |  |
| 71 | Advanced Modeling | guides/tutorials/dmn/dmn-deeper.mdx | Guides > Decision Modeling |  |  |
| 72 | Advanced Deployment | guides/tutorials/dmn/dmn-advanced-deployment.mdx | Guides > Decision Modeling |  |  |
| 73 | Lab: Let's Orchestrate Rules and Decisions in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | guides/tutorials/lab-rules-orchestration.mdx | Guides > Process Development |  |  |
| 74 | Lab: Build a process using SAGA pattern in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | guides/tutorials/lab-saga.mdx | Guides > Process Development |  |  |
| 75 | Lab: Event Driven Architecture for Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | guides/tutorials/lab-eda.mdx | Guides > Process Development |  |  |
| 76 | BPMN Examples | guides/tutorials/bpmn-example.mdx | Guides > Process Development |  |  |
| 77 | Ad-Hoc Subprocesses in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | guides/tutorials/sub-adhoc.mdx | Guides > Process Development |  |  |
| 78 | Industry Use Cases | guides/use-cases/overview.mdx | Guides > Industry Use Cases |  |  |
| 79 | Regulatory Compliance | guides/use-cases/compliance.mdx | Guides > Industry Use Cases |  |  |
| 80 | Finance Use Cases | guides/use-cases/finance.mdx | Guides > Industry Use Cases |  |  |
| 81 | Healthcare Use Cases | guides/use-cases/healthcare.mdx | Guides > Industry Use Cases |  |  |
| 82 | Human Resources Use Cases | guides/use-cases/human-resources.mdx | Guides > Industry Use Cases |  |  |
| 83 | Insurance Claims Processing | guides/use-cases/insurance.mdx | Guides > Industry Use Cases |  |  |
| 84 | Lending Automation | guides/use-cases/lending.mdx | Guides > Industry Use Cases |  |  |
| 85 | Manufacturing Use Cases | guides/use-cases/manufacturing.mdx | Guides > Industry Use Cases |  |  |
| 86 | Customer Onboarding | guides/use-cases/onboarding.mdx | Guides > Industry Use Cases |  |  |
| 87 | Retail Use Cases | guides/use-cases/retail.mdx | Guides > Industry Use Cases |  |  |
| 88 | KIE Server Project Modernization | guides/modernization.mdx | Guides |  |  |
| 89 | Best Practices | guides/best-practices.mdx | Guides |  |  |
| 90 | Platform | components/overview.mdx | Platform |  |  |
| 91 | Tech Stack | tech-stack.mdx | Platform |  |  |
| 92 | jBPM | components/jbpm.mdx | Platform |  |  |
| 93 | Kogito | components/kogito.mdx | Platform |  |  |
| 94 | Adaptive Process Architecture | components/compact-architecture/overview.mdx | Platform > Adaptive Process Architecture |  |  |
| 95 | Scaling & Performance | components/compact-architecture/scaling.mdx | Platform > Adaptive Process Architecture |  |  |
| 96 | Playground | components/playground/overview.mdx | Platform > Playground |  |  |
| 97 | Components | components/playground/components.mdx | Platform > Playground |  |  |
| 98 | Accelerators | components/playground/accelerators.mdx | Platform > Playground |  |  |
| 99 | Advanced Accelerators | components/playground/advanced-accelerator.mdx | Platform > Playground |  |  |
| 100 | Dev Deployments | components/playground/dev-deployment.mdx | Platform > Playground |  |  |
| 101 | Customization | components/playground/customizing.mdx | Platform > Playground |  |  |
| 102 | Executable Rules Models: DMN in Aletyx Playground | components/playground/dmn-tutorial.mdx | Platform > Playground |  |  |
| 103 | Executable Processes Models: BPMN in Aletyx Playground | components/playground/bpmn-tutorial.mdx | Platform > Playground |  |  |
| 104 | Playground Deployment | components/playground/self-hosting.mdx | Platform > Playground |  |  |
| 105 | Decisions + GenAI | decisions-genai.mdx | Platform |  |  |
| 106 | Model Context Protocol | components/mcp/overview.mdx | Platform > Model Context Protocol |  |  |
| 107 | Deployment | deployment/overview.mdx | Deployment |  |  |
| 108 | AWS Marketplace | deployment/aws-marketplace/overview.mdx | Deployment > AWS Marketplace |  |  |
| 109 | Sandbox Edition | deployment/aws-marketplace/sandbox.mdx | Deployment > AWS Marketplace |  |  |
| 110 | SSL/HTTPS | deployment/aws-marketplace/ssl-https.mdx | Deployment > AWS Marketplace |  |  |
| 111 | Security | deployment/aws-marketplace/security.mdx | Deployment > AWS Marketplace |  |  |
| 112 | Troubleshooting | deployment/aws-marketplace/troubleshooting.mdx | Deployment > AWS Marketplace |  |  |
| 113 | Cloud-Native | deployment/cloud-native/overview.mdx | Deployment > Cloud-Native |  |  |
| 114 | JVM vs Native | deployment/cloud-native/jvm-vs-native.mdx | Deployment > Cloud-Native |  |  |
| 115 | Kubernetes | deployment/kubernetes.mdx | Deployment > Cloud-Native |  |  |
| 116 | OpenShift | deployment/openshift.mdx | Deployment > Cloud-Native |  |  |
| 117 | Amazon ECS (Fargate / EC2) | deployment/cloud-native/ecs.mdx | Deployment > Cloud-Native |  |  |
| 118 | Securing Intelligent Process Orchestrations - API Endpoints | components/compact-architecture/securing-the-architecture.mdx | Deployment > Cloud-Native |  |  |
| 119 | Decisions – Models | decision-control/how-to/authoring-models.mdx | Decision Control > Decisions Authoring |  |  |
| 120 | Decisions – Testing in the Editor | decision-control/how-to/authoring-testing.mdx | Decision Control > Decisions Authoring |  |  |
| 121 | Decisions – AI Assistant | decision-control/how-to/authoring-ai.mdx | Decision Control > Decisions Authoring |  |  |
| 122 | Management – Units & Models | decision-control/how-to/management-models.mdx | Decision Control > Management |  |  |
| 123 | Management – Execute Decisions | decision-control/how-to/management-execute.mdx | Decision Control > Management |  |  |
| 124 | Monitoring | decision-control/how-to/monitoring.mdx | Decision Control |  |  |
| 125 | Prompting | decision-control/how-to/prompting.mdx | Decision Control |  |  |
| 126 | Decision Control | decision-control/overview.mdx | Decision Control > Architecture |  |  |
| 127 | Decision Control Architecture | decision-control/architecture.mdx | Decision Control > Architecture |  |  |
| 128 | Decision Control — Deployment | decision-control/deployment/overview.mdx | Decision Control > Architecture |  |  |
| 129 | Identity & Access Management (OIDC) | decision-control/deployment/identity-access-management.mdx | Decision Control > Architecture |  |  |
| 130 | Database Configuration | decision-control/deployment/database-configuration.mdx | Decision Control > Architecture |  |  |
| 131 | Container Configuration | decision-control/deployment/container-configuration.mdx | Decision Control > Architecture |  |  |
| 132 | Kubernetes & OpenShift Deployment | decision-control/deployment/kubernetes-openshift-deployment.mdx | Decision Control > Architecture |  |  |
| 133 | Supported Operating Environments | decision-control/deployment/supported-operating-environments.mdx | Decision Control > Architecture |  |  |
| 134 | Integration and APIs | decision-control/integration-and-apis.mdx | Decision Control > Architecture |  |  |
| 135 | Usage Scenarios | decision-control/usage-scenarios.mdx | Decision Control > Architecture |  |  |
| 136 | How-To Guides | decision-control/how-to/overview.mdx | Decision Control > Architecture |  |  |
| 137 | Home & Global | decision-control/how-to/home-and-global.mdx | Decision Control > Architecture |  |  |
| 138 | Deploy on AWS Marketplace | decision-control/aws/overview.mdx | Decision Control > Architecture |  |  |
| 139 | Sandbox Edition | decision-control/aws/sandbox.mdx | Decision Control > Architecture |  |  |
| 140 | FAQ and Troubleshooting | decision-control/faq-troubleshooting.mdx | Decision Control > Architecture |  |  |
| 141 | Aletyx Decision Control Tower | decision-control-tower/overview.mdx | Decision Control Tower |  |  |
| 142 | Aletyx Decision Control Tower Architecture | decision-control-tower/architecture.mdx | Decision Control Tower |  |  |
| 143 | Decision Control Tower — Deployment | decision-control-tower/deployment/overview.mdx | Decision Control Tower > Tower Deployment |  |  |
| 144 | Identity & Access Management (OIDC) | decision-control-tower/deployment/identity-access-management.mdx | Decision Control Tower > Tower Deployment |  |  |
| 145 | Database Configuration | decision-control-tower/deployment/database-configuration.mdx | Decision Control Tower > Tower Deployment |  |  |
| 146 | Container Configuration | decision-control-tower/deployment/container-configuration.mdx | Decision Control Tower > Tower Deployment |  |  |
| 147 | Kubernetes & OpenShift Deployment | decision-control-tower/deployment/kubernetes-openshift-deployment.mdx | Decision Control Tower > Tower Deployment |  |  |
| 148 | Supported Operating Environments | decision-control-tower/deployment/supported-operating-environments.mdx | Decision Control Tower > Tower Deployment |  |  |
| 149 | Portal Tour | decision-control-tower/dashboard.mdx | Decision Control Tower |  |  |
| 150 | Environment Management | decision-control-tower/environments.mdx | Decision Control Tower |  |  |
| 151 | Task Management | decision-control-tower/tasks.mdx | Decision Control Tower |  |  |
| 152 | How-To Guides | decision-control-tower/how-to/overview.mdx | Decision Control Tower > Tower How-To Guides |  |  |
| 153 | Sign in & Global | decision-control-tower/how-to/sign-in-and-global.mdx | Decision Control Tower > Tower How-To Guides |  |  |
| 154 | Environments | decision-control-tower/how-to/environments.mdx | Decision Control Tower > Tower How-To Guides |  |  |
| 155 | Promotions | decision-control-tower/how-to/promotions.mdx | Decision Control Tower > Tower How-To Guides |  |  |
| 156 | Governance Tasks | decision-control-tower/how-to/governance-tasks.mdx | Decision Control Tower > Tower How-To Guides |  |  |
| 157 | Promotion History | decision-control-tower/how-to/audit-trail.mdx | Decision Control Tower > Tower How-To Guides |  |  |
| 158 | Aletyx Decision Control Tower Sidecar | decision-control-tower-sidecar/overview.mdx | Decision Control Tower > Sidecar |  |  |
| 159 | Architecture | decision-control-tower-sidecar/architecture.mdx | Decision Control Tower > Sidecar |  |  |
| 160 | Decision Control Tower Sidecar — Deployment | decision-control-tower-sidecar/deployment/overview.mdx | Decision Control Tower > Sidecar > Sidecar Deployment |  |  |
| 161 | Decision Control Tower Sidecar — Configuration | decision-control-tower-sidecar/deployment/configuration.mdx | Decision Control Tower > Sidecar > Sidecar Deployment |  |  |
| 162 | How-To Guides | decision-control-tower-sidecar/how-to/overview.mdx | Decision Control Tower > Sidecar > Sidecar How-To Guides |  |  |
| 163 | Customize the Promotion Workflow | decision-control-tower-sidecar/how-to/customize-workflow.mdx | Decision Control Tower > Sidecar > Sidecar How-To Guides |  |  |
| 164 | Git Model Versioning | decision-control-tower-sidecar/how-to/git-model-versioning.mdx | Decision Control Tower > Sidecar > Sidecar How-To Guides |  |  |
| 165 | Drools | drools/overview.mdx | Drools |  |  |
| 166 | Getting Started | drools/getting-started.mdx | Drools |  |  |
| 167 | Visual Guide | drools/visual-guide.mdx | Drools |  |  |
| 168 | Rule Engine | drools/engine.mdx | Drools |  |  |
| 169 | Rule Flows | drools/ruleflow.mdx | Drools |  |  |
| 170 | DRL | drools/drl/overview.mdx | Drools > DRL |  |  |
| 171 | Syntax Basics | drools/drl/syntax-basics.mdx | Drools > DRL |  |  |
| 172 | Building Blocks | drools/drl/building-blocks.mdx | Drools > DRL |  |  |
| 173 | Data Stores | drools/drl/data-stores.mdx | Drools > DRL |  |  |
| 174 | Rule Units | drools/drl/rule-units.mdx | Drools > DRL |  |  |
| 175 | Phreak Algorithm | drools/drl/phreak.mdx | Drools > DRL |  |  |
| 176 | OOPath | drools/drl/oopath.mdx | Drools > DRL |  |  |
| 177 | Conditions (LHS) | drools/drl/conditions.mdx | Drools > DRL |  |  |
| 178 | Actions (RHS) | drools/drl/actions.mdx | Drools > DRL |  |  |
| 179 | Decision Services | drools/drl/decision-services.mdx | Drools > DRL |  |  |
| 180 | Query System in Aletyx Enterprise Build of Drools | drools/drl/queries.mdx | Drools > DRL |  |  |
| 181 | Decision Tables | drools/decision-tables/overview.mdx | Drools > Decision Tables |  |  |
| 182 | First Table | drools/decision-tables/first-table.mdx | Drools > Decision Tables |  |  |
| 183 | Running Tables | drools/decision-tables/running.mdx | Drools > Decision Tables |  |  |
| 184 | Tutorials | drools/tutorials/overview.mdx | Drools > Tutorials |  |  |
| 185 | Getting Started with Drools Rule Language (DRL) in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | drools/tutorials/first-rule.mdx | Drools > Tutorials |  |  |
| 186 | Creating Your First Decision Table in Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | drools/tutorials/decision-tables.mdx | Drools > Tutorials |  |  |
| 187 | DRL Examples | drools/tutorials/drl-example.mdx | Drools > Tutorials |  |  |
| 188 | Drools 7 EOL - What you need to know | drools/drools-7-migration.mdx | Drools |  |  |
| 189 | Troubleshooting | drools/troubleshooting.mdx | Drools |  |  |
| 190 | Overview | kie-server/overview.mdx | KIE Server |  |  |
| 191 | Installing the KIE Server | kie-server/installation.mdx | KIE Server |  |  |
| 192 | KIE Server system properties | kie-server/system-properties.mdx | KIE Server |  |  |
| 193 | KIE Server capabilities and extensions | kie-server/extensions.mdx | KIE Server |  |  |
| 194 | KIE Server setup | kie-server/setup.mdx | KIE Server |  |  |
| 195 | Creating a KIE container | kie-server/creating-a-kie-container.mdx | KIE Server |  |  |
| 196 | Managing Containers | kie-server/managing-containers.mdx | KIE Server |  |  |
| 197 | KIE Server REST API for KIE containers and business assets | kie-server/rest-api.mdx | KIE Server |  |  |
| 198 | KIE Server Java client API for KIE containers and business assets | kie-server/java-client-api.mdx | KIE Server |  |  |
| 199 | KIE Server and KIE container commands in jBPM | kie-server/commands.mdx | KIE Server |  |  |
| 200 | Runtime commands in jBPM | kie-server/runtime-commands.mdx | KIE Server |  |  |
| 201 | jBPM controller REST API for KIE Server templates and instances | kie-server/controller-rest-api.mdx | KIE Server |  |  |
| 202 | jBPM controller Java client API for KIE Server templates and instances | kie-server/controller-java-api.mdx | KIE Server |  |  |
| 203 | EJB API for KIE sessions and task services | kie-server/ejb-api.mdx | KIE Server |  |  |
| 204 | Securing password using key store | kie-server/securing-passwords.mdx | KIE Server |  |  |
| 205 | Prometheus metrics monitoring in jBPM | kie-server/prometheus-monitoring.mdx | KIE Server |  |  |
| 206 | Performance tuning considerations with KIE Server | kie-server/performance-tuning.mdx | KIE Server |  |  |
| 207 | KIE Server Task Assigning | kie-server/task-assigning.mdx | KIE Server |  |  |
| 208 | Reference | reference/overview.mdx | Reference |  |  |
| 209 | DMN Reference | reference/dmn/overview.mdx | Reference > DMN Reference |  |  |
| 210 | Reserved Words | reference/dmn/reserved-words.mdx | Reference > DMN Reference |  |  |
| 211 | Select Expression | reference/dmn/select-reference.mdx | Reference > DMN Reference |  |  |
| 212 | Product Features | product/overview.mdx | Reference |  |  |
| 213 | Cookie Policy | legal/cookie-policy.mdx | Reference |  |  |
| 214 | Frequently asked questions | faq.mdx | FAQ |  |  |
| 215 | What is Aletyx? | faq/about-aletyx/what-is-aletyx.mdx | FAQ > About Aletyx |  |  |
| 216 | Who builds Aletyx? | faq/about-aletyx/who-builds-aletyx.mdx | FAQ > About Aletyx |  |  |
| 217 | Who is Aletyx for? | faq/about-aletyx/who-is-aletyx-for.mdx | FAQ > About Aletyx |  |  |
| 218 | What products does Aletyx offer? | faq/products-features/products.mdx | FAQ > Products & features |  |  |
| 219 | What is Decision Control? | faq/products-features/decision-control.mdx | FAQ > Products & features |  |  |
| 220 | How does Aletyx keep AI safe in regulated decisions? | faq/products-features/ai-safety.mdx | FAQ > Products & features |  |  |
| 221 | Can I modernize legacy jBPM, RHPAM, or KIE Server systems? | faq/products-features/modernize-legacy-systems.mdx | FAQ > Products & features |  |  |
| 222 | How can analysts update decision models without waiting on IT? | faq/products-features/ai-assistant.mdx | FAQ > Products & features |  |  |
| 223 | How can I connect DMN decisions to LLMs with MCP? | faq/products-features/dmn-mcp.mdx | FAQ > Products & features |  |  |
| 224 | What is DMN? | faq/concepts/what-is-dmn.mdx | FAQ > Concepts & technologies |  |  |
| 225 | What is DRL? | faq/concepts/what-is-drl.mdx | FAQ > Concepts & technologies |  |  |
| 226 | What is BPMN? | faq/concepts/what-is-bpmn.mdx | FAQ > Concepts & technologies |  |  |
| 227 | What is "Accountable AI"? | faq/concepts/accountable-ai.mdx | FAQ > Concepts & technologies |  |  |
| 228 | What is Drools? | faq/concepts/what-is-drools.mdx | FAQ > Concepts & technologies |  |  |
| 229 | What is Kogito? | faq/concepts/what-is-kogito.mdx | FAQ > Concepts & technologies |  |  |
| 230 | What is KIE? | faq/concepts/what-is-kie.mdx | FAQ > Concepts & technologies |  |  |
| 231 | What is the difference between Drools, Kogito, and KIE? | faq/concepts/drools-kogito-kie.mdx | FAQ > Concepts & technologies |  |  |
| 232 | Why do I need to update Drools? | faq/concepts/why-update-drools.mdx | FAQ > Concepts & technologies |  |  |
| 233 | How do I modernize Drools applications from old versions (7.x)? | faq/concepts/modernize-drools.mdx | FAQ > Concepts & technologies |  |  |
| 234 | What is the difference between DMN, DRL, and BPMN? | faq/concepts/dmn-drl-bpmn.mdx | FAQ > Concepts & technologies |  |  |
| 235 | What do decision tables look like for business users? | faq/concepts/decision-tables.mdx | FAQ > Concepts & technologies |  |  |
| 236 | What AI concepts do enterprises need to understand? | faq/concepts/enterprise-ai-concepts.mdx | FAQ > Concepts & technologies |  |  |
| 237 | How can enterprises adopt AI without losing compliance and predictability? | faq/concepts/hybrid-intelligence.mdx | FAQ > Concepts & technologies |  |  |
| 238 | Should enterprises choose between LLMs and symbolic AI? | faq/concepts/beyond-llms.mdx | FAQ > Concepts & technologies |  |  |
| 239 | How do I get started? | faq/getting-started/get-started.mdx | FAQ > Getting started |  |  |
| 240 | What developer tools are available? | faq/getting-started/developer-tools.mdx | FAQ > Getting started |  |  |
| 241 | Does Aletyx integrate with AI assistants? | faq/getting-started/ai-assistants.mdx | FAQ > Getting started |  |  |
| 242 | How do I invoke Kogito processes with Java APIs instead of REST? | faq/getting-started/kogito-java-apis.mdx | FAQ > Getting started |  |  |
| 243 | How is Aletyx deployed? | faq/deployment-pricing-support/deployment.mdx | FAQ > Deployment, pricing & support |  |  |
| 244 | How is Aletyx priced? | faq/deployment-pricing-support/pricing.mdx | FAQ > Deployment, pricing & support |  |  |
| 245 | What support is available? | faq/deployment-pricing-support/support.mdx | FAQ > Deployment, pricing & support |  |  |
| 246 | What performance gains can I expect? | faq/deployment-pricing-support/performance.mdx | FAQ > Deployment, pricing & support |  |  |

## Not in navigation

Files present on disk but not referenced by `docs.json`. Decide per file: migrate, fold into another page, or drop.

| # | Page title | Source file | Nav category | Blume URL | Notion URL |
|---|---|---|---|---|---|
| 1 | Release Notes | reference/release-notes.mdx | (none) |  |  |
| 2 | First Interaction | archive/first-interaction.mdx | (archived) |  |  |
| 3 | Getting Started with Aletyx: A Visual Guide for Aletyx Enterprise Build of Kogito and Drools 10.1.0-aletyx | archive/getting-started-start-aletyx.mdx | (archived) |  |  |
| 4 | Quickstart for Developers | archive/quickstart-developers.mdx | (archived) |  |  |
| 5 | Test Scenarios | archive/test-scenarios.mdx | (archived) |  |  |
| 6 | Testing | archive/testing-overview.mdx | (archived) |  |  |

The `archive/` pages were already removed from the Mintlify site (`archive/` is in `.mintignore`) and their old routes redirect elsewhere in `docs.json`. Default decision: drop, unless a page holds content that should be folded into a migrated page.
