"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, PanInfo, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { DoodleMascot } from "@/components/motion/DoodleMascot";
import { SECTION_IDS } from "@/lib/constants";

const ROLES = [
  "Data Scientist",
  "Frontend Dev",
  "UI Designer",
  "Problem Solver",
];

function TypewriterText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <div className={`flex ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + i * 0.1, duration: 0.1 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}

export function HeroSection() {
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  
  // 0: "Hi! I'm" & "Aliva" 
  // 1: "Aliva" slides up, " a" types out
  // 2: "[Drop Here]" types out, interactive pills appear
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 3500); 
    const t2 = setTimeout(() => setStage(2), 3800); 
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, role: string) => {
    if (!dropZoneRef.current) return;
    const rect = dropZoneRef.current.getBoundingClientRect();

    const isInsideDropZone =
      info.point.x >= rect.left &&
      info.point.x <= rect.right &&
      info.point.y >= rect.top &&
      info.point.y <= rect.bottom;

    if (isInsideDropZone) {
      setActiveRole(role);
    }
  };

  return (
    <SectionWrapper id={SECTION_IDS.hero} fullHeight className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto min-h-[400px]">
        
        {/* Main Headline */}
        <motion.div 
          layout
          className={`flex items-center justify-center flex-wrap gap-2 md:gap-4 text-[clamp(1.5rem,5vw,3.5rem)] font-bold font-mono tracking-tight text-text-primary z-10 min-h-[120px] -mt-20 md:-mt-32 pb-4 ${stage < 2 ? "flex-col" : "flex-row"}`}
        >
          
          <motion.div layout className="flex items-center justify-center">
            <motion.div layout>
              <TypewriterText text="Hi, I'm" delay={0.2} />
            </motion.div>
            
            <AnimatePresence>
              {stage >= 2 && (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="ml-1 md:ml-3"
                >
                  <span className="whitespace-nowrap">&nbsp;a</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {stage === 0 && (
              <motion.div
                layout
                key="aliva-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="flex items-center justify-center"
              >
                <TypewriterText 
                  text="Aliva" 
                  delay={1.2} 
                  className="mt-2 text-[clamp(2.5rem,8vw,5rem)] text-text-secondary font-black tracking-tighter" 
                />
              </motion.div>
            )}

            {stage >= 2 && (
              <motion.div
                layout
                key="drop-zone"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-2 md:mt-0"
              >
                <div
                  ref={dropZoneRef}
                  className={`relative flex items-center justify-center min-w-[clamp(240px,40vw,320px)] w-auto px-4 h-[clamp(50px,8vw,70px)] border-b-4 border-dashed transition-colors duration-300 ${
                    activeRole ? "border-text-primary text-text-primary" : "border-text-dim text-text-muted"
                  }`}
                >
                  {activeRole ? (
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={activeRole}
                      className="text-text-primary whitespace-nowrap"
                    >
                      [{activeRole}]
                    </motion.span>
                  ) : (
                    <TypewriterText text="[Drop Here]" delay={0.1} className="italic opacity-50 text-[clamp(1.25rem,4vw,2rem)]" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Draggable Pills */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 2 ? 1 : 0 }}
          className={`mt-4 relative w-full max-w-xl border-2 border-dashed border-text-dim rounded-xl p-5 flex flex-wrap justify-center gap-3 z-20 transition-opacity duration-500 ${
            stage < 2 ? "pointer-events-none" : ""
          }`}
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bg px-2 text-[10px] md:text-xs font-mono text-text-secondary font-medium tracking-wide">
            Drag a role
          </span>
          
          {ROLES.map((role, index) => (
            <motion.div
              key={role}
              drag={stage >= 2}
              dragSnapToOrigin={true}
              onDragEnd={(e, info) => handleDragEnd(e, info, role)}
              onClick={() => setActiveRole(role)}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={
                stage >= 2
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.8, y: 20 }
              }
              transition={{ 
                delay: stage >= 2 ? index * 0.15 : 0, 
                duration: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 50 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-grab rounded-full border-2 border-border bg-bg px-4 py-1.5 font-mono text-xs md:text-sm font-semibold text-text-secondary shadow-sm hover:border-text-dim hover:text-text-primary"
            >
              [{role}]
            </motion.div>
          ))}
        </motion.div>

        {/* 2D Doodle Mascot */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-0">
          <DoodleMascot />
        </div>

      </div>
    </SectionWrapper>
  );
}
