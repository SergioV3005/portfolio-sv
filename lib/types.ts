export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  headline: string;
  heroTagline: string;
  description: string;
  url: string;
  email: string;
  navLinks: NavLink[];
  socials: SocialLink[];
  about: string;
  aboutFocus: string;
  facts: string[];
  skills: string[];
  personal: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  image: string;
  links: ProjectLink[];
  featured?: boolean;
};

export type Experience = {
  title: string;
  org: string;
  href: string;
  period: string;
  image: string;
  description: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export type Writing = {
  title: string;
  href: string;
  source: string;
  summary: string;
};
