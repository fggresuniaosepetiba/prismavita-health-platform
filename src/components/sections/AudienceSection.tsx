"use client"

import { Stethoscope, Building2, BarChart3, Globe } from "lucide-react"
import { FadeInSection } from "@/components/animations/FadeInSection"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { GlassCard } from "@/components/ui/GlassCard"

const AUDIENCES = [
  {
    icon: Stethoscope,
    title: "Médicos e especialistas",
    desc: "Que querem atender mais com menos burocracia.",
  },
  {
    icon: Building2,
    title: "Clínicas independentes",
    desc: "Que precisam de organização sem complexidade.",
  },
  {
    icon: BarChart3,
    title: "Gestores de clínica",
    desc: "Que querem visibilidade total da operação.",
  },
  {
    icon: Globe,
    title: "Redes e franquias",
    desc: "Que precisam de controle multi-unidade.",
  },
]

export function AudienceSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Para quem o PrismaVita foi feito?
          </h2>
        </FadeInSection>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {AUDIENCES.map((item) => (
            <GlassCard key={item.title} className="p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0098f8]/20 to-[#6a3de8]/10 border border-white/[0.06] mb-4">
                <item.icon className="h-7 w-7 text-[#0098f8]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
