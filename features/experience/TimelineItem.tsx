"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types/portfolio";
import { Gamepad2, Trophy, Briefcase, GraduationCap, Code } from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

function TimelineContent({ experience, align, index }: { experience: Experience; align: "left" | "right"; index: number }) {
  const rotateDeg = index % 2 === 0 ? "rotate(2deg)" : "rotate(-2deg)";
  const tagRotates = [-1.5, 2, -2, 1, 0, -1];

  return (
    <div className={`flex flex-col ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
      <span 
        className="text-xs font-bold text-bg tracking-wider uppercase bg-text-primary px-3 py-1.5 rounded-md border-2 border-text-primary shadow-[3px_3px_0px_rgba(0,0,0,1)]"
        style={{ transform: rotateDeg }}
      >
        {experience.year}
      </span>
      <h3 className="mt-4 text-xl font-bold text-text-primary">
        {experience.role}
      </h3>
      <p className="mt-1 text-sm font-semibold text-text-muted">
        {experience.company}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {experience.description}
      </p>
      <div className={`mt-5 flex flex-wrap gap-2 ${align === "right" ? "justify-end" : "justify-start"}`}>
        {experience.tech.map((t, i) => {
          const tRotate = tagRotates[(index * 3 + i) % tagRotates.length];
          return (
            <span
              key={t}
              className="rounded-full bg-surface px-3 py-1.5 text-xs font-bold text-text-primary border-2 border-dashed border-text-primary shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
              style={{ transform: `rotate(${tRotate}deg)` }}
            >
              [{t}]
            </span>
          );
        })}
      </div>
    </div>
  );
}

function getIconForRole(role: string) {
  const r = role.toLowerCase();
  if (r.includes("game")) return Gamepad2;
  if (r.includes("award")) return Trophy;
  if (r.includes("intern") || r.includes("developer")) return Code;
  return Briefcase;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const Icon = getIconForRole(experience.role);

  return (
    <motion.div
      className="group relative flex flex-row md:justify-center w-full pb-10 md:pb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Desktop Left Content */}
      <div className="hidden md:flex w-[45%] pr-10 justify-end pt-1">
        {isEven && <TimelineContent experience={experience} align="right" index={index} />}
      </div>

      {/* Center Line and Dot */}
      <div className="relative flex flex-col items-center w-[20px] md:w-[10%] shrink-0">
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-text-primary bg-bg shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12">
          <Icon className="h-5 w-5 text-text-primary" strokeWidth={2.5} />
        </div>
        {!isLast && (
          <svg className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-4 h-[calc(100%+2rem)] text-text-primary opacity-30 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 10 100">
            <path d="M5,0 Q0,25 5,50 T5,100" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
        )}
      </div>

      {/* Desktop Right Content */}
      <div className="hidden md:flex w-[45%] pl-10 justify-start pt-1">
        {!isEven && <TimelineContent experience={experience} align="left" index={index} />}
      </div>

      {/* Mobile Content (Always right of the line) */}
      <div className="md:hidden flex-1 pl-6 pt-0.5 pb-8">
        <TimelineContent experience={experience} align="left" index={index} />
      </div>
    </motion.div>
  );
}
