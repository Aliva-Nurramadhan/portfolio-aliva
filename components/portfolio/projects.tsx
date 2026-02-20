"use client"

import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const featuredProjects = [
  {
    title: "AI Environmental Quiz Game",
    description:
      "Aplikasi quiz interaktif berbasis AI dengan 10 pertanyaan seputar lingkungan. Sistem secara otomatis menghitung skor, menampilkan poin akhir, serta menyediakan fitur edit profil dan leaderboard untuk melihat peringkat pengguna.",
    technologies: ["React", "Firebase", "Zustand", "Cloudinary"],
    github: "#",
    external: "#",
  },
  {
    title: "E-Complaint Platform (Capstone Project)",
    description:
      "Platform pengaduan digital yang dikembangkan sebagai proyek Capstone Kampus Merdeka. Saya berkontribusi dalam perancangan dan implementasi dashboard admin untuk mengelola laporan pengguna secara efisien dan terstruktur.",
    technologies: ["React", "Zustand", "Cloudinary"],
    github: "#",
    external: "#",
  },
]

const otherProjects = [
  {
    title: "Portfolio Website",
    description: "Website portofolio personal dengan animasi halus dan desain modern.",
    technologies: ["Next.js", "Tailwind"],
    github: "#",
    external: "#",
  },
  {
    title: "Weather App",
    description: "Aplikasi cuaca dengan data real-time dan visualisasi grafik interaktif.",
    technologies: ["React", "Chart.js", "API"],
    github: "#",
  },
  {
    title: "Blog CMS",
    description: "Sistem manajemen konten untuk blog dengan editor rich text dan SEO tools.",
    technologies: ["Next.js", "MDX", "Prisma"],
    github: "#",
    external: "#",
  },
  {
    title: "Chat Application",
    description: "Aplikasi chat real-time dengan fitur grup, emoji, dan berbagi file.",
    technologies: ["React", "Firebase", "WebRTC"],
    github: "#",
  },
  {
    title: "Expense Tracker",
    description: "Aplikasi pelacak pengeluaran dengan grafik dan laporan bulanan.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    external: "#",
  },
  {
    title: "Recipe Finder",
    description: "Aplikasi pencari resep makanan berdasarkan bahan yang tersedia.",
    technologies: ["Next.js", "Spoonacular API"],
    github: "#",
  },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24"
      aria-label="Proyek"
    >
      <h2
        className={`mb-12 flex items-center gap-4 font-mono text-lg text-foreground transition-all duration-500 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span className="text-primary">03.</span>
        <span className="font-bold">Proyek</span>
        <span className="h-px flex-1 bg-border" />
      </h2>

      {/* Featured Projects */}
      <div className="space-y-24">
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            index={index}
            parentInView={isInView}
          />
        ))}
      </div>

      {/* Other Projects
      <div className="mt-24">
        <h3
          className={`mb-8 text-center text-2xl font-bold text-foreground transition-all duration-500 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Proyek Lainnya
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <OtherProjectCard
              key={project.title}
              project={project}
              index={index}
              parentInView={isInView}
            />
          ))}
        </div>
      </div> */}
    </section>
  )
}

function FeaturedProject({
  project,
  index,
  parentInView,
}: {
  project: (typeof featuredProjects)[0]
  index: number
  parentInView: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`group relative transition-all duration-500 ${
        parentInView
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      <div className={`flex flex-col gap-6 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        {/* Project Image Placeholder */}
        <div className="relative flex-1 overflow-hidden rounded-lg bg-secondary">
          <div className="flex aspect-video items-center justify-center">
            <Folder className="h-16 w-16 text-primary/20" />
          </div>
          <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0" />
        </div>

        {/* Project Info */}
        <div
          className={`flex flex-1 flex-col justify-center ${
            isEven ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"
          }`}
        >
          <p className="mb-2 font-mono text-sm text-primary">Proyek Unggulan</p>
          <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div
            className={`mt-4 flex flex-wrap gap-3 font-mono text-sm text-muted-foreground ${
              isEven ? "" : "lg:justify-end"
            }`}
          >
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className={`mt-4 flex gap-4 ${isEven ? "" : "lg:justify-end"}`}>
            {project.github && (
              <a
                href={project.github}
                className="text-foreground transition-colors hover:text-primary"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.external && (
              <a
                href={project.external}
                className="text-foreground transition-colors hover:text-primary"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function OtherProjectCard({
  project,
  index,
  parentInView,
}: {
  project: (typeof otherProjects)[0]
  index: number
  parentInView: boolean
}) {
  return (
    <div
      className={`group flex flex-col rounded-lg bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
        parentInView
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80 + 400}ms` }}
    >
      <div className="mb-6 flex items-center justify-between">
        <Folder className="h-10 w-10 text-primary" />
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  )
}
