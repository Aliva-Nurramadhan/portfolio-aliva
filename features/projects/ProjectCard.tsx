"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Asymmetrical borders for hand-drawn look
  const radius = index % 2 === 0 ? "25px 10px 30px 15px" : "15px 30px 10px 25px";

  return (
    <motion.article
      className="group relative overflow-hidden border-[3px] border-text-primary bg-bg-elevated transition-all duration-300 flex flex-col h-full"
      style={{ borderRadius: radius }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        rotate: index % 2 === 0 ? 1 : -1,
        boxShadow: "8px 8px 0px rgba(0,0,0,1)",
      }}
    >
      <div
        className="flex flex-col gap-4 p-4 md:flex-row md:gap-8 md:p-8 h-full"
      >
        {/* Project image placeholder */}
        <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-surface border-2 border-dashed border-text-primary md:w-2/5">
          <div className="flex flex-col items-center gap-3 text-text-primary group-hover:scale-110 transition-transform duration-500">
            <div className="grid h-16 w-16 grid-cols-3 grid-rows-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-sm bg-border transition-colors duration-500 group-hover:bg-text-dim"
                  style={{ opacity: 0.3 + ((Math.sin(i * 123.45) + 1) / 2) * 0.7 }}
                />
              ))}
            </div>
            <span className="text-xs">Preview</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-text-secondary text-pretty">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-bg px-3 py-1.5 text-xs font-bold text-text-primary border-2 border-dashed border-text-primary shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
              >
                [{t}]
              </span>
            ))}
          </div>
        </div>
      </div>

    </motion.article>
  );
}
