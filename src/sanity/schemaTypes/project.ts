import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "orderRank", title: "Order Rank", type: "number", initialValue: 100 }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 4 }),
    defineField({
      name: "bullets",
      title: "Bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
