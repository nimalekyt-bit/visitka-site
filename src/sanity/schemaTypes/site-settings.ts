import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "heroTag", title: "Hero Tag", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroAccent", title: "Hero Accent", type: "string" }),
    defineField({ name: "heroText", title: "Hero Text", type: "text", rows: 4 }),
    defineField({
      name: "tech",
      title: "Tech Badges",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "aboutTitle", title: "About Title", type: "string" }),
    defineField({ name: "aboutText", title: "About Text", type: "text", rows: 4 }),
    defineField({ name: "contactTitle", title: "Contact Title", type: "string" }),
    defineField({ name: "contactText", title: "Contact Text", type: "text", rows: 4 }),
    defineField({ name: "telegramUrl", title: "Telegram URL", type: "url" }),
    defineField({ name: "email", title: "Email", type: "string" }),
  ],
});
