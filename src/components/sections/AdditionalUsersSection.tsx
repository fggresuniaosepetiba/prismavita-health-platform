"use client"

import { TrendingUp, Users, BarChart3, Settings, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeInSection } from "@/components/animations/FadeInSection"

const STAGES = [
  {
    icon: Users,
    title: "Comece pequeno",
    desc: "Até 3 usuários. Ideal para clínicas que estão iniciando a digitalização dos processos.",
    highlight: "Starter",
  },
  {
    icon: BarChart3,
    title: "Escalone sua equipe",
    desc: "Até 10 usuários com controle financeiro, prescrição digital e dashboards de performance.",
    highlight: "Pro",
  },
  {
    icon: Settings,
    title: "Múltiplas unidades",
    desc: "Usuários ilimitados, BI customizado, integração com sistemas legados e suporte premium.",
    highlight: "Enterprise",
  },
]

export function AdditionalUsersSection() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0098f8]/[0.02] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Sua clínica cresce. Seu sistema cresce junto.
          </h2>
          <p className="mt-4 text-center text-white/50 text-lg max-w-2xl mx-auto">
            Do consultório independente à rede de múltiplas unidades — um plano para cada fase.
          </p>
        </FadeInSection>

        {/* Timeline */}
        <div className="mt-16 lg:mt-20 relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0098f8]/0 via-[#0098f8]/20 to-[#6a3de8]/0" />

          <div className="space-y-16 lg:space-y-24">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Connector dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0098f8] border-4 border-[#0a0a0f] shadow-[0_0_20px_rgba(0,152,248,0.3)] z-10" />

                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                  <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0098f8]/20 to-[#6a3de8]/10 border border-white/[0.06]">
                      <stage.icon className="h-6 w-6 text-[#0098f8]" />
                    </div>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold text-white ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                    {stage.title}
                  </h3>
                  <p className={`mt-3 text-white/50 leading-relaxed max-w-md ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                    {stage.desc}
                  </p>
                  <div className={`mt-4 ${i % 2 === 0 ? "lg:flex lg:justify-end" : ""}`}>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#0098f8]">
                      Plano {stage.highlight}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Price highlight */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="inline-flex items-baseline gap-1">
            <span className="text-5xl font-black text-white">R$ 24,99</span>
            <span className="text-sm text-white/40">por usuário adicional / mês</span>
          </div>
          <p className="mt-2 text-xs text-white/30">
            Disponível em todos os planos. Ative em segundos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
