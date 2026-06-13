"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight, CheckCircle2, Heart } from "lucide-react"
import { FadeInSection } from "@/components/animations/FadeInSection"
import { AnatomicHeart } from "@/components/ui/AnatomicHeart"

const TRUST_ITEMS = [
  "Resposta em menos de 24 horas",
  "Zero compromisso de contratação",
  "Orientação personalizada",
]

export function ConsultingSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0098f8]/10 via-[#0098f8]/[0.04] to-[#6a3de8]/[0.06]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-1.5 mb-6">
                <MessageCircle className="h-4 w-4 text-white/90" />
                <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
                  Consultoria gratuita
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Nossa equipe encontra{" "}
                <span className="bg-gradient-to-r from-[#0098f8] to-[#6a3de8] bg-clip-text text-transparent">
                  o plano ideal
                </span>{" "}
                para você.
              </h2>

              <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
                Sem pressão. Sem script de vendas. Um especialista analisa o tamanho da sua clínica,
                sua equipe e seus objetivos — e indica honestamente qual plano faz mais sentido.
                Mesmo que seja o mais simples.
              </p>

              {/* Trust items */}
              <div className="mt-8 space-y-3">
                {TRUST_ITEMS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#22c55e] mt-0.5 shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 text-base font-medium rounded-xl px-8 py-4 bg-gradient-to-r from-[#0098f8] via-[#0070e0] to-[#6a3de8] text-white shadow-lg shadow-[#0098f8]/20 hover:shadow-[0_0_40px_rgba(0,152,248,0.3)] transition-all duration-300"
                >
                  Falar com um especialista
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right - visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative">
                <AnatomicHeart size="lg" withGlow withParticles />

                {/* Floating card mockup */}
                <motion.div
                  className="absolute -bottom-6 -right-4 sm:-right-8 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-3 shadow-xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-[#0098f8]" />
                    <span className="text-xs text-white/90">Recomendado: Plano Pro</span>
                  </div>
                </motion.div>
              </div>

              <p className="mt-8 text-xs text-white/50 text-center max-w-xs">
                Consultoria sem compromisso. Seus dados são usados apenas para entrar em contato.
              </p>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
