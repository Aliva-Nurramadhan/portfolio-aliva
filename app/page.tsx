"use client";

import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { HeroSection } from "@/features/hero/HeroSection";
// import { AboutSection } from "@/features/about/AboutSection";
import { SkillsSection } from "@/features/skills/SkillsSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { ExperienceSection } from "@/features/experience/ExperienceSection";
import { ContactSection } from "@/features/contact/ContactSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";

function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-text-primary transition-none"
      style={{ width: `${progress * 100}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgressBar />
      <CursorSpotlight />
      <Navbar />

      <main>
        <HeroSection />
        {/* <AboutSection /> */}
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
