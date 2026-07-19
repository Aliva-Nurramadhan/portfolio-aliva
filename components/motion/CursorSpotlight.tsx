"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface CursorSpotlightProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export function CursorSpotlight({
  className,
  size = 600,
  opacity = 0.04,
}: CursorSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.background = `radial-gradient(${size}px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,${opacity}), transparent 80%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size, opacity]);

  return (
    <div
      ref={spotlightRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300",
        className
      )}
      aria-hidden="true"
    />
  );
}
