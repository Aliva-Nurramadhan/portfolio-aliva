"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Tentang", href: "#about", number: "01" },
  { label: "Pengalaman", href: "#experience", number: "02" },
  { label: "Proyek", href: "#projects", number: "03" },
  { label: "Kontak", href: "#contact", number: "04" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a
          href="#hero"
          className="group relative z-50 font-mono text-xl font-bold text-primary"
          aria-label="Kembali ke atas"
        >
          <span className="text-foreground">{"<"}</span>
          AV
          <span className="text-foreground">{">"}</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary">{link.number}.</span>{" "}
                {link.label}
              </a>
            </li>
          ))}
         
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 flex items-center justify-center bg-background/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-lg text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="block text-center text-sm text-primary">
                    {link.number}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
      </nav>
    </header>
  )
}
