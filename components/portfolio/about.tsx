"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24" aria-label="Tentang saya">
      <h2
        className={`mb-8 flex items-center gap-4 font-mono text-lg text-foreground transition-all duration-500 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span className="text-primary">01.</span>
        <span className="font-bold">Tentang Saya</span>
        <span className="h-px flex-1 bg-border" />
      </h2>

      <div
        className={`grid gap-12 transition-all delay-200 duration-500 lg:grid-cols-3 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="space-y-4 leading-relaxed text-muted-foreground lg:col-span-2">
          <p>
            Halo! Saya Aliva, seorang fresh graduate yang memiliki ketertarikan
            dalam pengembangan aplikasi web dan pengolahan data. Ketertarikan
            saya pada dunia teknologi dimulai ketika saya mulai mempelajari
            pengembangan web dan membangun proyek-proyek sederhana untuk
            mengasah kemampuan saya.
          </p>

          <p>
            Sebagai lulusan dengan peminatan Data Science dan pengalaman sebagai
            Frontend Engineer, saya terbiasa membangun aplikasi berbasis web
            yang terstruktur, responsif, dan efisien. Saya senang mempelajari
            teknologi baru dan terus mengembangkan keterampilan untuk
            menciptakan solusi digital yang bermanfaat.
          </p>
          <p>Berikut beberapa teknologi yang saya gunakan:</p>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm">
            {[
              "Python",
              "Pandas",
              "SQL",
              "Figma",
              "JavaScript (ES6+)",
              "React / Next.js",
              "Tailwind CSS",
              "TypeScript",
              "Firebase",
            ].map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-secondary-foreground"
              >
                <span className="text-primary">{">"}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-64 lg:mx-0 lg:w-full">
          <div className="group relative">
            <div className="relative z-10 overflow-hidden rounded-lg bg-primary/10">
              <div className="relative aspect-square bg-secondary">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div className="absolute inset-0 bg-primary/20 transition-opacity group-hover:opacity-0" />
            </div>
            <div className="absolute -bottom-3 -right-3 z-0 h-full w-full rounded-lg border-2 border-primary transition-all group-hover:-bottom-4 group-hover:-right-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
