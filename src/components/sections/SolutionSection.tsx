"use client"

import {
  FileText,
  Calendar,
  Users,
  TrendingUp,
  Network,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { FadeInSection } from "@/components/animations/FadeInSection"
import { GlassCard } from "@/components/ui/GlassCard"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"

const FEATURES = [
  {
    icon: FileText,
    title: "Prontuário Eletrônico Inteligente",
    desc: "Registros clínicos organizados, rápidos e acessíveis. Menos tempo digitando, mais tempo com o paciente.",
  },
  {
    icon: Calendar,
    title: "Agenda Integrada",
    desc: "Visualize sua agenda completa, gerencie confirmações e reduza faltas sem esforço.",
  },
  {
    icon: Users,
    title: "Gestão de Pacientes",
    desc: "Histórico completo, documentos e evolução de cada paciente em um único lugar.",
  },
  {
    icon: TrendingUp,
    title: "Controle Financeiro",
    desc: "Receitas, despesas e relatórios financeiros da sua clínica, sem planilhas paralelas.",
  },
  {
    icon: Network,
    title: "Multi-usuário e Multi-clínica",
    desc: "Gerencie múltiplos profissionais e unidades com controle de acesso granular.",
  },
  {
    icon: Zap,
    title: "Velocidade operacional real",
    desc: "Interface projetada para ser rápida. Cada fluxo foi pensado para ter o menor número possível de cliques.",
  },
]

const METRICS = [
  { target: 3000, suffix: "+", label: "Atendimentos organizados" },
  { target: 60, suffix: "%", prefix: "-", label: "Tempo em burocracia" },
  { target: 4.9, decimals: 1, suffix: "★", label: "Satisfação média", duration: 1.5 },
]

export function SolutionSection() {
  return (
    <section id="solucao" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,152,248,0.04)_0%,_transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Organização. Velocidade.{" "}
            <span className="bg-gradient-to-r from-[#0098f8] to-[#6a3de8] bg-clip-text text-transparent">
              Menos burocracia.
            </span>
          </h2>
          <p className="mt-4 text-center text-white/50 text-lg max-w-2xl mx-auto">
            Uma plataforma construída para médicos que querem atender, não operar software.
          </p>
        </FadeInSection>

        {/* Features grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="h-full"
            >
              <GlassCard hover={true} className="p-6 h-full flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0098f8]/20 to-[#6a3de8]/10 border border-white/[0.06] mb-4 shrink-0">
                  <feature.icon className="h-6 w-6 text-[#0098f8]" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed flex-1">{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {METRICS.map((metric) => (
            <AnimatedCounter
              key={metric.label}
              target={metric.target}
              suffix={metric.suffix}
              prefix={metric.prefix}
              decimals={metric.decimals}
              duration={metric.duration}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
