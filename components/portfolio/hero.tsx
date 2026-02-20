"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center py-16 lg:py-0"
    >
      <div
        className={`transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-4 font-mono text-sm text-primary">
          {"Halo, nama saya"}
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="text-balance">Muhammad Aliva Nurramadhan</span>
        </h1>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl lg:text-5xl">
          <span className="text-balance">Front End Developer </span>
        </h2>
        <p className="max-w-lg leading-relaxed text-muted-foreground">
          Fresh graduate yang berfokus pada pengembangan aplikasi web dan mobile
          modern dengan antarmuka responsif dan user-friendly.
        </p>
      </div>

      <div
        className={`mt-16 transition-all delay-500 duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-foreground"
          aria-label="Scroll ke bagian tentang saya"
        >
          <span>Lihat lebih lanjut</span>
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
}
