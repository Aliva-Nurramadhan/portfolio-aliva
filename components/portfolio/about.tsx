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
            Halo! Saya Aliva, seorang fresh graduate dengan peminatan Data
            Science yang memiliki minat dalam bidang administrasi dan
            pengelolaan data. Selain itu, saya juga memiliki pengalaman sebagai
            Frontend Engineer sehingga terbiasa bekerja dengan sistem digital
            dan teknologi berbasis data.
          </p>

          <p>
            Saat ini, saya fokus mengembangkan kemampuan dalam pengolahan dan
            verifikasi data, penyusunan dokumen administrasi, serta pengelolaan
            arsip secara rapi dan efisien. Latar belakang teknologi yang saya
            miliki membantu saya bekerja secara terstruktur, teliti, dan cepat
            beradaptasi dengan sistem yang digunakan.
          </p>

          <p>Berikut beberapa kemampuan yang saya gunakan sehari-hari:</p>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm">
            {[
              "Microsoft Word",
              "Microsoft Excel / Google Sheets",
              "Pengolahan & Verifikasi Data",
              "Administrasi Dokumen & Arsip",
              "Input & Rekap Laporan",
              "Penggunaan Sistem Digital",
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
