import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "orderRank", title: "Order Rank", type: "number", initialValue: 100 }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
  ],
});
