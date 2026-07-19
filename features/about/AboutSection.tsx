"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/motion/FadeIn";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { SECTION_IDS } from "@/lib/constants";
import { ABOUT_TEXT } from "@/lib/data";

export function AboutSection() {
  return (
    <SectionWrapper id={SECTION_IDS.about}>
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-widest text-text-dim text-center">
          About
        </p>
      </FadeIn>

      <BlurReveal delay={0.1} className="mt-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl text-balance">
          Tentang Saya
        </h2>
      </BlurReveal>

      <div className="mt-16 grid gap-12 md:grid-cols-5 items-center">
        {/* Text content — 3 columns */}
        <div className="md:col-span-3">
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-text-secondary md:text-xl text-pretty">
              {ABOUT_TEXT}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-8">
            <div className="flex flex-wrap gap-3">
              {["Data Science", "Frontend Engineering", "UI/UX Design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </FadeIn>
        </div>

        {/* Visual element — 2 columns */}
        <div className="flex items-center justify-center md:col-span-2">
          <FadeIn delay={0.3} direction="right">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image
                src="/PP-Porto.png"
                alt="Aliva"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-contain drop-shadow-xl transition-transform hover:scale-105 duration-500"
              />
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-surface/80 to-transparent blur-3xl scale-90" />
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
