import { LandingPage } from "@/components/landing-page";
import { loadSiteContent } from "@/sanity/lib/load-site-content";

export default async function Home() {
  const content = await loadSiteContent();

  return <LandingPage content={content} />;
}
