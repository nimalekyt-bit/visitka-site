import { groq } from "next-sanity";

export const landingContentQuery = groq`
{
  "settings": *[_type == "siteSettings"][0]{
    heroTag,
    heroTitle,
    heroAccent,
    heroText,
    tech,
    aboutTitle,
    aboutText,
    contactTitle,
    contactText,
    telegramUrl,
    email
  },
  "projects": *[_type == "project"] | order(orderRank asc){
    title,
    label,
    summary,
    bullets
  },
  "services": *[_type == "service"] | order(orderRank asc){
    title
  }
}
`;
