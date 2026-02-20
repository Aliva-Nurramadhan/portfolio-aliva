"use client";

import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/Aliva-Nurramadhan/",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aliva-nurramadhan-5a85822ba/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/alivanurramadhan/",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="py-8">
      {/* Mobile Social Links */}
      <div className="mb-6 flex items-center justify-center gap-6 md:hidden">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-muted-foreground transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <div className="text-center">
        <a
          href="https://github.com/Aliva-Nurramadhan/"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex items-center gap-1">
            Dibangun dengan
            <Heart className="h-4 w-4 text-primary fill-primary" />
            oleh Aliva
          </span>
        </a>
      </div>
    </footer>
  );
}
