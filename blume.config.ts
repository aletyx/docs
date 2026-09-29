import { defineConfig } from "blume";
import { notion } from "blume/sources";
import { z } from "zod";

export default defineConfig({
  // Serve every page under /docs (index -> /docs); public/ assets stay at the root.
  basePath: "/docs",
  content: {
    sources: [
      // Notion source: needs NOTION_DB_ID and NOTION_TOKEN in the environment.
      notion({ database: process.env.NOTION_DB_ID }),
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
