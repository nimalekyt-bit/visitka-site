import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "woodskilla Studio",
  projectId: projectId || "replace_me",
  dataset,
  basePath: "/studio",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
