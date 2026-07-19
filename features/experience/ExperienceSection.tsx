"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/motion/FadeIn";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { TimelineItem } from "./TimelineItem";
import { SECTION_IDS } from "@/lib/constants";
import { EXPERIENCES } from "@/lib/data";

export function ExperienceSection() {
  return (
    <SectionWrapper id={SECTION_IDS.experience}>
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-widest text-text-dim text-center">
          Experience
        </p>
      </FadeIn>

      <BlurReveal delay={0.1} className="mt-4 text-center">
        <h2 className="text-3xl font-bold font-mono tracking-tight text-text-primary md:text-4xl lg:text-5xl text-balance">
          Journey
        </h2>
      </BlurReveal>

      <div className="mt-16">
        {EXPERIENCES.map((exp, i) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            index={i}
            isLast={i === EXPERIENCES.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
