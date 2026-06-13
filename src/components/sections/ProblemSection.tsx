"use client"

import { Clock, MousePointerClick, RefreshCw, FileText, Layers, Archive } from "lucide-react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { FadeInSection } from "@/components/animations/FadeInSection"
import { StaggerChildren } from "@/components/animations/StaggerChildren"

const PAIN_POINTS = [
  {
    icon: Clock,
    title: "Sistema lento",
    desc: "Que trava na hora do atendimento.",
  },
  {
    icon: MousePointerClick,
    title: "Excesso de cliques",
    desc: "Tarefas simples exigem dezenas de passos.",
  },
  {
    icon: RefreshCw,
    title: "Interface confusa",
    desc: "Que exige treinamento constante da equipe.",
  },
  {
    icon: FileText,
    title: "Burocracia sem fim",
    desc: "Que rouba tempo do que importa: o paciente.",
  },
  {
    icon: Layers,
    title: "Dados desorganizados",
    desc: "Informações clínicas difíceis de encontrar.",
  },
  {
    icon: Archive,
    title: "Processos antigos",
    desc: "Digitalizados, mas nunca redesenhados.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Você reconhece essa realidade?
          </h2>
          <p className="mt-4 text-center text-white/50 text-lg max-w-xl mx-auto">
            Se alguma dessas situações parece familiar, você não está sozinho.
          </p>
        </FadeInSection>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="h-full"
            >
              <GlassCard className="p-6 h-full flex flex-col hover:border-red-500/20">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                    <point.icon className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <FadeInSection delay={0.3} className="mt-20 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.06]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#0a0a0f] px-6 text-sm text-white/40">
                O PrismaVita foi construído para mudar isso.
              </span>
            </div>
          </div>
          <motion.div
            className="mt-6 flex justify-center"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
              <svg
                className="h-4 w-4 text-white/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}
