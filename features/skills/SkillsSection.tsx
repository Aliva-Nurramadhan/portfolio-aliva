"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/motion/FadeIn";
import { BlurReveal } from "@/components/motion/BlurReveal";
import Image from "next/image";
import {
  StaggerList,
  staggerItemVariants,
} from "@/components/motion/StaggerList";
import { SECTION_IDS } from "@/lib/constants";
import { SKILLS } from "@/lib/data";

const skillIcons: Record<string, string> = {
  "Python": "/tech-icon/python.svg",
  "SQL": "/tech-icon/mysql.svg",
  "Figma": "/tech-icon/figma.svg",
  "JavaScript (ES6+)": "/tech-icon/js.svg",
  "React": "/tech-icon/react.svg",
  "Next.js": "/tech-icon/nextjs.svg",
  "Tailwind CSS": "/tech-icon/tailwind.svg",
  "TypeScript": "/tech-icon/typescript.svg",
  "Firebase": "/tech-icon/firebase.svg",
  "PHP": "/tech-icon/php_new.svg",
  "Flutter": "/tech-icon/flutter.svg",
};

export function SkillsSection() {
  return (
    <SectionWrapper id={SECTION_IDS.skills}>
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-widest text-text-dim text-center">
          Skills
        </p>
      </FadeIn>

      <BlurReveal delay={0.1} className="mt-4 text-center">
        <h2 className="text-3xl font-bold font-mono tracking-tight text-text-primary md:text-4xl lg:text-5xl text-balance">
          Tech Stack
        </h2>
      </BlurReveal>

      <div className="mt-16 flex justify-center">
        <StaggerList className="flex max-w-3xl flex-wrap justify-center gap-6 md:gap-8">
          {SKILLS.map((skill, index) => {
            const iconSrc = skillIcons[skill.name];
            return (
              <motion.div
                key={skill.name}
                variants={staggerItemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.15,
                  rotate: index % 2 === 0 ? 6 : -6,
                }}
                whileTap={{
                  y: -8,
                  scale: 1.15,
                  rotate: index % 2 === 0 ? 6 : -6,
                }}
                className="group relative flex h-16 w-16 md:h-20 md:w-20 cursor-pointer items-center justify-center rounded-2xl border-2 border-transparent bg-transparent transition-colors duration-300 hover:border-text-primary hover:bg-bg hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:border-text-primary active:bg-bg active:shadow-[4px_4px_0px_rgba(0,0,0,1)] select-none"
                onContextMenu={(e) => e.preventDefault()}
                style={{ WebkitTouchCallout: "none", userSelect: "none" } as React.CSSProperties}
              >
                {iconSrc && (
                  <div 
                    className="relative h-12 w-12 md:h-14 md:w-14 opacity-90 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100 grayscale-0 hover:grayscale-0 pointer-events-none" 
                    style={{
                      filter: skill.name === 'Flutter' 
                        ? "drop-shadow(1px 1px 0px #0C0C0C) drop-shadow(-1px -1px 0px #0C0C0C) drop-shadow(1px -1px 0px #0C0C0C) drop-shadow(-1px 1px 0px #0C0C0C)" 
                        : "drop-shadow(0.2px 0.2px 0px #0C0C0C) drop-shadow(-0.2px -0.2px 0px #0C0C0C) drop-shadow(0.2px -0.2px 0px #0C0C0C) drop-shadow(-0.2px 0.2px 0px #0C0C0C)"
                    }}
                  >
                    <Image src={skill.name === 'Flutter' ? `${iconSrc}?v=9` : iconSrc} alt={skill.name} fill sizes="56px" className="object-contain" draggable={false} />
                  </div>
                )}

                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-text-primary px-3 py-1.5 text-xs font-bold text-bg opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 group-active:-translate-y-1 group-active:opacity-100 z-10 shadow-xl">
                  {skill.name}
                  {/* Tooltip arrow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text-primary" />
                </div>
              </motion.div>
            );
          })}
        </StaggerList>
      </div>
    </SectionWrapper>
  );
}
