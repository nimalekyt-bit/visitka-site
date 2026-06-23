import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "@/sanity/schemaTypes/project";
import { serviceType } from "@/sanity/schemaTypes/service";
import { siteSettingsType } from "@/sanity/schemaTypes/site-settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettingsType, projectType, serviceType],
};
