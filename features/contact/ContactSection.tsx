"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { FadeIn } from "@/components/motion/FadeIn";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SECTION_IDS, SOCIAL_LINKS, OWNER } from "@/lib/constants";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0 -.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -2 -2 2 2 0 0 0 -2 2v7h-4v-7a6 6 0 0 1 6 -6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1 -.9 2 -2 2H4c-1.1 0 -2 -.9 -2 -2V6c0 -1.1 .9 -2 2 -2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
};

export function ContactSection() {
  return (
    <SectionWrapper id={SECTION_IDS.contact}>
      <div className="flex flex-col items-center text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3">
            <p className="text-sm font-medium uppercase tracking-widest text-text-dim font-mono">
              Contact
            </p>
          </div>
        </FadeIn>

        <BlurReveal delay={0.1}>
          <h2 className="mt-4 text-[clamp(2.5rem,8vw,4.5rem)] font-bold font-mono tracking-tight text-text-primary text-balance relative inline-block">
            Let&apos;s <span className="relative inline-block">Connect
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-text-primary overflow-visible" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M2,8 Q20,-2 40,8 T80,4 T98,9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </h2>
        </BlurReveal>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-8 max-w-md text-base text-[#555555] font-sans font-normal text-pretty">
            Interested in working together? Let&apos;s build something
            remarkable.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10">
          <div>
            <MagneticButton
              as="a"
              href={`mailto:${OWNER.email}`}
              className="group inline-flex items-center gap-3 rounded-full border-[3px] border-text-primary bg-text-primary px-10 py-4 text-base font-medium text-bg transition-all duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-[6px_6px_0px_#0C0C0C] hover:bg-text-primary hover:text-bg"
              ariaLabel="Send email"
            >
              Say Hello
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4,12 Q12,10 19,12 M13,5 Q17,9 19,12 Q15,16 12,19" />
                </svg>
              </span>
            </MagneticButton>
          </div>
        </FadeIn>

        {/* Social icons */}
        <FadeIn delay={0.4} className="mt-12">
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <MagneticButton
                  key={link.name}
                  as="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dashed border-text-muted bg-transparent text-text-muted transition-all duration-300 hover:border-solid hover:border-text-primary hover:bg-text-primary hover:text-bg hover:scale-110 hover:-rotate-6"
                  strength={0.4}
                  ariaLabel={link.name}
                >
                  {Icon && <Icon size={20} />}
                </MagneticButton>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
