export type ProjectItem = {
  title: string;
  label: string;
  summary: string;
  bullets: string[];
};

export type ServiceItem = {
  title: string;
};

export type SiteContent = {
  heroTag: string;
  heroTitle: string;
  heroAccent: string;
  heroText: string;
  tech: string[];
  aboutTitle: string;
  aboutText: string;
  contactTitle: string;
  contactText: string;
  telegramUrl: string;
  email: string;
  projects: ProjectItem[];
  services: ServiceItem[];
};
