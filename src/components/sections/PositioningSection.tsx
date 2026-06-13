"use client"

import { CheckCircle2, Shield, Zap, Settings, Users, Cloud } from "lucide-react"
import { FadeInSection } from "@/components/animations/FadeInSection"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { AnatomicHeart } from "@/components/ui/AnatomicHeart"

const DIFFERENTIALS = [
  "Interface sem curva de aprendizado",
  "Configuração em minutos, não dias",
  "Suporte real, não robô",
  "Atualizações contínuas sem custo adicional",
  "Dados seguros com criptografia de ponta",
]

export function PositioningSection() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <FadeInSection direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Não somos mais um{" "}
              <span className="bg-gradient-to-r from-[#0098f8] to-[#6a3de8] bg-clip-text text-transparent">
                sistema médico.
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed">
              O mercado tem dezenas de softwares de gestão clínica. A maioria digitaliza processos antigos.
            </p>
            <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed">
              O <strong className="text-white">PrismaVita</strong> foi redesenhado do zero para ser o sistema mais rápido,
              mais intuitivo e mais organizado do mercado.
            </p>

            <div className="mt-10 space-y-4">
              {DIFFERENTIALS.map((diff) => (
                <div key={diff} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0098f8] mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm sm:text-base">{diff}</span>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Visual side */}
          <FadeInSection direction="right" className="flex justify-center">
            <div className="relative">
              <AnatomicHeart size="2xl" withGlow withParticles heartbeat />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,152,248,0.1)_0%,_transparent_60%)]" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
