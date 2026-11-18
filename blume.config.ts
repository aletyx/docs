import { defineConfig } from "blume";
import { custom } from "blume/sources";
import { notionSource } from "blume/sources/notion.ts";
import { z } from "zod";
import { withDevOnlySections } from "./lib/dev-only-sections.ts";
import { withDocVariables } from "./lib/doc-variables.ts";
import { withLegacySections } from "./lib/legacy-section.ts";

// `blume dev` (and the `astro dev` it spawns) carry "dev" in argv; `blume build` does not.
const isDev = process.argv.includes("dev");

export default defineConfig({
  // Mount the whole site at aletyx.ai/docs, as Mintlify was: dist/ holds only the site, and every page,
  // asset (_astro/), llms.txt, robots.txt and sitemap.xml is served under /docs. The host serves dist/ at
  // /docs/*, so the aletyx.ai routing for /docs* stays as it is and only its upstream changes.
  // Redirects in this file are written without the /docs prefix; the build adds it.
  deployment: { base: "/docs", site: "https://aletyx.ai" },
  content: {
    sources: [
      // Notion source: needs NOTION_DB_ID and NOTION_TOKEN in the environment.
      // {{ALETYX_KEY}} placeholders resolve from the Doc variables database (NOTION_VARS_DB_ID).
      // Legacy sections (dc/) are noindexed and kept out of search (lib/legacy-section.ts).
      // Dev-only sections (quarantine/) are dropped from every build but `blume dev` (lib/dev-only-sections.ts).
      custom(
        withDevOnlySections(
          withLegacySections(withDocVariables(notionSource({ name: "notion", database: process.env.NOTION_DB_ID ?? "" }))),
          isDev,
        ),
      ),
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
      // Aletyx Decision Control and Decision Control Tower were renamed to Aletyx Platform (2026-11-04): their
      // surviving pages live under /platform, and the old Decision Control docs are a hidden legacy sub-site at /dc.
      // Its tab scopes the sidebar to dc/ (without it the pages would land in the Get started sidebar). The tab is
      // visible for now, to be phased out: theme.css has a commented-out rule that hides it except on /dc pages.
      // lib/legacy-section.ts keeps the pages out of search and search engines.
      { label: "Decision Control", path: "/dc" },
      // Quarantine: outdated pages parked for rewrite or removal (see CLAUDE.md). Dev only: the tab is added only
      // in `blume dev`, and every other build (production and --preview) drops the pages at the source.
      ...(isDev ? [{ label: "Quarantine [DEV ONLY]", path: "/quarantine" }] : []),
    ],
  },
  // Published pages that moved under a product folder (the /docs base is added automatically).
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
