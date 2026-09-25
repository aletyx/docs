import { defineConfig } from "blume";
import { z } from "zod";

export default defineConfig({
  content: {
    sources: [
      // { type: "filesystem", root: "docs" },
      // Notion source: needs NOTION_DB_ID and NOTION_TOKEN in the environment.
      {
        type: "notion",
        database: process.env.NOTION_DB_ID,
      },
    ],
  },
  description: "Documentation powered by Blume.",
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
