import type { Project, Experience, Skill } from "@/types/portfolio";

export const ABOUT_TEXT =
  "Fresh graduate dengan ketertarikan pada pengembangan aplikasi web dan pengolahan data. Lulusan dengan peminatan Data Science dan pengalaman sebagai Frontend Engineer, terbiasa membangun aplikasi berbasis web yang terstruktur, responsif, dan efisien.";

export const HERO_DESCRIPTION =
  "Fresh graduate dengan peminatan Data Science yang berfokus pada pengelolaan dan pengolahan data secara terstruktur, teliti, dan sistematis. Memiliki latar belakang sebagai Frontend Engineer yang terbiasa bekerja dengan sistem digital dan teknologi berbasis data.";

export const SKILLS: Skill[] = [
  { name: "Python", category: "data" },
  { name: "SQL", category: "data" },
  { name: "Figma", category: "design" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Firebase", category: "tools" },
  { name: "PHP", category: "backend" },
  { name: "Flutter", category: "mobile" },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-quiz-game",
    title: "AI Environmental Quiz Game",
    description:
      "Aplikasi quiz interaktif berbasis AI dengan 10 pertanyaan seputar lingkungan. Sistem menghitung skor otomatis, menampilkan poin akhir, fitur edit profil, dan leaderboard.",
    tech: ["React", "Firebase", "Zustand", "Cloudinary"],
  },
  {
    id: "e-complaint",
    title: "E-Complaint Platform",
    description:
      "Platform pengaduan digital, proyek Capstone Kampus Merdeka. Kontribusi pada perancangan & implementasi dashboard admin untuk mengelola laporan pengguna.",
    tech: ["React", "Zustand", "Cloudinary"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "digitel-nusa",
    year: "2025",
    role: "Game Developer Intern",
    company: "Digitel Nusa",
    description:
      "Mengembangkan map edukasi berbasis Roblox. Scripting interaktif dan desain gameplay menggunakan Roblox Studio.",
    tech: ["Lua", "Roblox Studio"],
  },
  {
    id: "proxocoris",
    year: "2024",
    role: "Best UI/UX Award",
    company: "PROXOCORIS Mobile App Showcase",
    description:
      "Meraih penghargaan Best UI/UX. Mendesain pengalaman pengguna intuitif dan modern dengan pendekatan user-centered design.",
    tech: ["Figma", "UI/UX Design"],
  },
  {
    id: "kampus-merdeka",
    year: "2022",
    role: "ReactJS Mastery for Green Tech",
    company: "Kampus Merdeka Batch 7 — Alterra Academy",
    description:
      "Fokus pengembangan Front-End menggunakan ReactJS untuk solusi Green Technology. Meraih penghargaan Best Frontend Developer.",
    tech: ["React", "JavaScript", "Frontend Architecture"],
  },
  {
    id: "unram-intern",
    year: "2019",
    role: "Web Developer Intern",
    company: "Universitas Islam Indonesia",
    description:
      "Mengembangkan aplikasi arsip data internal menggunakan PHP dan CodeIgniter 3. Perancangan database, fitur CRUD, autentikasi.",
    tech: ["PHP", "CodeIgniter 3", "MySQL"],
  },
  {
    id: "lks-juara",
    year: "2019",
    role: "Juara 1 LKS Tingkat Provinsi",
    company: "Bidang Web Technologies",
    description:
      "Membangun aplikasi berbasis PHP dengan CodeIgniter 3 dan MySQL dalam waktu kompetisi terbatas.",
    tech: ["PHP", "CodeIgniter 3", "MySQL"],
  },
];
