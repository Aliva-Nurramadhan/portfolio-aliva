import type { NavItem, SocialLink } from "@/types/portfolio";

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  contact: "contact",
} as const;

export const NAV_ITEMS: NavItem[] = [
  // { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Skills", href: `#${SECTION_IDS.skills}` },
  { label: "Projects", href: `#${SECTION_IDS.projects}` },
  { label: "Experience", href: `#${SECTION_IDS.experience}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Aliva-Nurramadhan/",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aliva-nurramadhan-5a85822ba/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alivanurramadhan/",
    icon: "instagram",
  },
  {
    name: "Email",
    url: "mailto:alivanurramadhan@gmail.com",
    icon: "mail",
  },
];

export const OWNER = {
  name: "Muhammad Aliva Nurramadhan",
  shortName: "Aliva",
  tagline: "Data Science | Frontend Enthusiast",
  email: "alivanurramadhan@gmail.com",
  resumePath: "/resume.pdf",
} as const;
