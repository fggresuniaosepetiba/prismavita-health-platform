"use client"

import { ArrowRight } from "lucide-react"
import { FadeInSection } from "@/components/animations/FadeInSection"
import { AnatomicHeart } from "@/components/ui/AnatomicHeart"

export function FinalCTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0098f8]/[0.04] to-[#6a3de8]/[0.04]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeInSection>
          {/* Heart background element */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
            <AnatomicHeart size="xl" withGlow={false} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight relative">
            Sua clínica merece um sistema
            <br />
            <span className="bg-gradient-to-r from-[#0098f8] via-[#00a8f8] to-[#6a3de8] bg-clip-text text-transparent">
              à altura.
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-lg mx-auto">
            Comece hoje. Sem burocracia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 text-base font-medium rounded-xl px-8 py-4 bg-gradient-to-r from-[#0098f8] via-[#0070e0] to-[#6a3de8] text-white shadow-lg shadow-[#0098f8]/20 hover:shadow-[0_0_40px_rgba(0,152,248,0.3)] transition-all duration-300"
            >
              Solicitar Demonstração
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 text-base font-medium rounded-xl px-8 py-4 border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Ver planos
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
