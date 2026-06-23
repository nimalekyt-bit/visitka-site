import { defaultContent } from "@/lib/default-content";
import { sanityClient } from "@/sanity/lib/client";
import { landingContentQuery } from "@/sanity/lib/queries";
import type { SiteContent } from "@/types/site-content";

type LandingQueryResult = {
  settings?: Partial<SiteContent>;
  projects?: SiteContent["projects"];
  services?: SiteContent["services"];
};

export async function loadSiteContent(): Promise<SiteContent> {
  if (!sanityClient) {
    return defaultContent;
  }

  try {
    const result = await sanityClient.fetch<LandingQueryResult>(landingContentQuery);

    return {
      ...defaultContent,
      ...result.settings,
      projects: result.projects?.length ? result.projects : defaultContent.projects,
      services: result.services?.length ? result.services : defaultContent.services,
      tech: result.settings?.tech?.length ? result.settings.tech : defaultContent.tech,
    };
  } catch {
    return defaultContent;
  }
}
