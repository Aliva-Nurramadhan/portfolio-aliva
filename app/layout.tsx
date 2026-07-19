import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Aliva Nurramadhan — Data Science | Frontend Enthusiast",
  description:
    "Fresh graduate dengan peminatan Data Science yang berfokus pada pengelolaan dan pengolahan data secara terstruktur. Memiliki latar belakang sebagai Frontend Engineer.",
  keywords: [
    "Muhammad Aliva Nurramadhan",
    "Data Science",
    "Frontend Developer",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Muhammad Aliva Nurramadhan" }],
  openGraph: {
    title: "Muhammad Aliva Nurramadhan — Portfolio",
    description:
      "Data Science | Frontend Enthusiast. Building structured, responsive, and efficient web applications.",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
