"use client";

import { useRef, useEffect, useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/motion/FadeIn";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { ProjectCard } from "./ProjectCard";
import { SECTION_IDS } from "@/lib/constants";
import { PROJECTS } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { root: scrollRef.current, threshold: 0.6 }
    );

    const children = Array.from(scrollRef.current.children);
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeftBtn = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  const scrollRightBtn = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <SectionWrapper id={SECTION_IDS.projects}>
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-widest text-text-dim text-center">
          Projects
        </p>
      </FadeIn>

      <BlurReveal delay={0.1} className="mt-4 text-center">
        <h2 className="text-3xl font-bold font-mono tracking-tight text-text-primary md:text-4xl lg:text-5xl text-balance">
          Featured Work
        </h2>
      </BlurReveal>

      <div 
        className="relative -mx-6 md:-mx-12 lg:-mx-20 mt-12 group"
      >
        {/* Navigation Arrows */}
        <button 
          onClick={scrollLeftBtn}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-bg border-[3px] border-text-primary text-text-primary shadow-[4px_4px_0px_#000] opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-text-primary hover:text-bg hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={scrollRightBtn}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-bg border-[3px] border-text-primary text-text-primary shadow-[4px_4px_0px_#000] opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-text-primary hover:text-bg hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-20 pt-4 pb-8 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {PROJECTS.map((project, i) => (
            <div key={project.id} data-index={i} className="shrink-0 w-full md:w-full lg:w-[70%] snap-center">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-2 flex justify-center gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const child = scrollRef.current?.children[i] as HTMLElement;
                if (child && scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: child.offsetLeft - (scrollRef.current.clientWidth - child.clientWidth) / 2,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-text-primary" : "w-2.5 bg-text-dim/50 hover:bg-text-dim"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
