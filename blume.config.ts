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
      // {{AX_KEY}} placeholders resolve from the Doc variables database (NOTION_VARS_DB_ID).
      custom(withDocVariables(notionSource({ name: "notion", database: process.env.NOTION_DB_ID ?? "" }))),
    ],
  },
  description: "Documentation powered by Blume.",
  navigation: {
    // Collapsible groups, so nested folders (e.g. Core Concepts > Process Automation > BPMN Basics) show their hierarchy.
    sidebar: { display: "group" },
  },
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
