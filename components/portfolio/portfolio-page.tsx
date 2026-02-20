"use client"

import { Navbar } from "./navbar"
import { Hero } from "./hero"
import { About } from "./about"
import { Experience } from "./experience"
import { Projects } from "./projects"
import { Contact } from "./contact"
import { SocialLinks } from "./social-links"
import { Footer } from "./footer"

export function PortfolioPage() {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <main className="mx-auto max-w-6xl px-6 lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
