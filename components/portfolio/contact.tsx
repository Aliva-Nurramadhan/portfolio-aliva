"use client"

import { useRef } from "react"
import { Mail } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24"
      aria-label="Kontak"
    >
      <div className="mx-auto max-w-lg text-center">
        <p
          className={`mb-4 font-mono text-sm text-primary transition-all duration-500 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          04. Selanjutnya
        </p>
        <h2
          className={`mb-6 text-4xl font-bold text-foreground transition-all delay-100 duration-500 sm:text-5xl ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="text-balance">Mari Terhubung</span>
        </h2>
        <p
          className={`mb-10 leading-relaxed text-muted-foreground transition-all delay-200 duration-500 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Saya selalu terbuka untuk peluang baru dan proyek menarik.
          Jangan ragu untuk menghubungi saya jika Anda ingin berkolaborasi
          atau sekadar menyapa!
        </p>
        <a
          href="mailto:alivanurramadhan@gmail.com"
          className={`group inline-flex items-center gap-2 rounded-lg border border-primary px-8 py-4 font-mono text-sm text-primary transition-all delay-300 duration-500 hover:bg-primary/10 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          Hubungi Saya
        </a>
      </div>
    </section>
  )
}
