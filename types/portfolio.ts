export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

export interface Skill {
  name: string;
  category: "data" | "frontend" | "design" | "tools" | "backend" | "mobile";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
