"use client";

import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const experiences = [
  {
    period: "2025",
    title: "Game Developer Intern",
    company: "Digitel Nusa",
    url: "#",
    description:
      "Mengembangkan map edukasi berbasis Roblox sebagai bagian dari tim pengembang. Berkontribusi dalam scripting interaktif dan desain gameplay menggunakan Roblox Studio.",
    technologies: ["Lua", "Roblox Studio"],
  },
  {
    period: "2024",
    title: "Best UI/UX Award – PROXOCORIS Mobile App Showcase",
    company: "PROXOCORIS",
    url: "#",
    description:
      "Meraih penghargaan Best UI/UX dalam ajang showcase aplikasi mobile. Mendesain pengalaman pengguna yang intuitif dan modern dengan pendekatan user-centered design.",
    technologies: ["Figma", "UI/UX Design"],
  },
  {
    period: "2022",
    title: "ReactJS Mastery for Green Tech – Kampus Merdeka Batch 7",
    company: "Alterra Academy",
    url: "#",
    description:
      "Mengikuti program Kampus Merdeka Batch 7 dengan fokus pada pengembangan Front-End menggunakan ReactJS untuk solusi Green Technology. Berhasil meraih penghargaan Best Frontend Developer atas performa teknis dan kualitas implementasi proyek.",
    technologies: [
      "React",
      "JavaScript",
      "Frontend Architecture",
      "Green Tech",
    ],
  },
  {
    period: "2019",
    title: "Web Developer Intern",
    company: "Universitas Mataram",
    url: "#",
    description:
      "Mengembangkan aplikasi arsip data internal menggunakan PHP dan CodeIgniter 3. Bertanggung jawab dalam perancangan database serta implementasi fitur CRUD dan autentikasi.",
    technologies: ["PHP", "CodeIgniter 3", "MySQL"],
  },
  {
    period: "2019",
    title: "Juara 1 LKS Tingkat Provinsi",
    company: "Lomba Kompetensi Siswa (LKS)",
    url: "#",
    description:
      "Meraih Juara 1 pada LKS tingkat provinsi dalam bidang Web Technologies. Membangun aplikasi berbasis PHP dengan framework CodeIgniter 3 dan MySQL dalam waktu kompetisi terbatas.",
    technologies: ["PHP", "CodeIgniter 3", "MySQL"],
  },
];

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24"
      aria-label="Pengalaman kerja"
    >
      <h2
        className={`mb-12 flex items-center gap-4 font-mono text-lg text-foreground transition-all duration-500 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span className="text-primary">02.</span>
        <span className="font-bold">Pengalaman</span>
        <span className="h-px flex-1 bg-border" />
      </h2>

      <div className="space-y-2">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.title}
            experience={exp}
            index={index}
            parentInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  parentInView,
}: {
  experience: (typeof experiences)[0];
  index: number;
  parentInView: boolean;
}) {
  return (
    <a
      href={experience.url}
      className={`group block rounded-lg p-6 transition-all duration-500 hover:bg-secondary/50 ${
        parentInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      <div className="grid gap-4 sm:grid-cols-[140px_1fr]">
        <p className="pt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {experience.period}
        </p>
        <div>
          <h3 className="flex items-center gap-2 font-medium text-foreground transition-colors group-hover:text-primary">
            {experience.title}
            <span className="text-muted-foreground">{"·"}</span>
            {experience.company}
            <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {experience.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
