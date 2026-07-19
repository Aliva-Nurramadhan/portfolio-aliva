"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  fullHeight?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className,
  fullHeight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-6 md:px-12 lg:px-20 scroll-mt-24",
        fullHeight ? "min-h-svh pt-32 pb-24 flex flex-col justify-center" : "py-12 md:py-16 lg:py-20",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
