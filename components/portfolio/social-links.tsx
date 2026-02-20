"use client"

import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/Aliva-Nurramadhan/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aliva-nurramadhan-5a85822ba/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/alivanurramadhan/", label: "Instagram" },
]

export function SocialLinks() {
  return (
    <>
      {/* Left Side - Social Icons */}
      <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-6 after:h-24 after:w-px after:bg-muted-foreground md:flex lg:left-12">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>

      {/* Right Side - Email */}
      <div className="fixed bottom-0 right-6 z-40 hidden flex-col items-center gap-6 after:h-24 after:w-px after:bg-muted-foreground md:flex lg:right-12">
        <a
          href="mailto:hello@johndoe.dev"
          className="font-mono text-xs tracking-widest text-muted-foreground transition-all [writing-mode:vertical-lr] hover:-translate-y-1 hover:text-primary"
        >
          alivanurramadhan@gmail.com
        </a>
      </div>
    </>
  )
}
