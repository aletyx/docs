import { defineConfig } from "blume";
import { custom } from "blume/sources";
import { notionSource } from "blume/sources/notion.ts";
import { z } from "zod";
import { withDocVariables } from "./lib/doc-variables.ts";

export default defineConfig({
  // Serve every page under /docs (index -> /docs); public/ assets stay at the root.
  basePath: "/docs",
  content: {
    sources: [
      // Notion source: needs NOTION_DB_ID and NOTION_TOKEN in the environment.
      // {{ALETYX_KEY}} placeholders resolve from the Doc variables database (NOTION_VARS_DB_ID).
      custom(withDocVariables(notionSource({ name: "notion", database: process.env.NOTION_DB_ID ?? "" }))),
    ],
  },
  description: "Documentation powered by Blume.",
  navigation: {
    // Collapsible groups, so nested folders (e.g. Core Concepts > Process Automation > BPMN Basics) show their hierarchy.
    sidebar: { display: "group" },
    // One header tab per product; each scopes the sidebar to its slug folder. The root tab keeps the Get started pages.
    tabs: [
      { label: "Get started", path: "/" },
      { label: "Aletyx Platform", path: "/platform" },
      { label: "Aletyx Playground", path: "/playground" },
      { label: "Aletyx Enterprise Builds", path: "/enterprise-builds" },
      { label: "Aletyx Decision Control", path: "/decision-control" },
    ],
  },
  // Published pages that moved under a product folder (basePath is added automatically).
  redirects: [
    { from: "/03-ai-assistant/overview", to: "/playground/01-ai-assistant/overview" },
    { from: "/03-ai-assistant/prompts", to: "/playground/01-ai-assistant/prompts" },
    { from: "/03-ai-assistant/setup", to: "/playground/01-ai-assistant/setup" },
    { from: "/03-ai-assistant/testing", to: "/playground/01-ai-assistant/testing" },
    { from: "/08-tooling/cloud-tools", to: "/enterprise-builds/02-tooling/cloud-tools" },
    { from: "/08-tooling/container-tools", to: "/enterprise-builds/02-tooling/container-tools" },
    { from: "/08-tooling/credentials", to: "/enterprise-builds/02-tooling/credentials" },
    { from: "/08-tooling/environment-setup", to: "/enterprise-builds/02-tooling/environment-setup" },
    { from: "/08-tooling/git-configuration", to: "/enterprise-builds/02-tooling/git-configuration" },
    { from: "/08-tooling/java-setup", to: "/enterprise-builds/02-tooling/java-setup" },
    { from: "/08-tooling/maven", to: "/enterprise-builds/02-tooling/maven" },
    { from: "/08-tooling/vscode", to: "/enterprise-builds/02-tooling/vscode" },
  ],
  frontmatter: {
    // Migrated pages record the pre-migration original they were checked against.
    extend: {
      source: z.string().url().optional(),
    },
  },
  theme: {
    accent: "#FC764C",
  },
  title: "Aletyx",
});
