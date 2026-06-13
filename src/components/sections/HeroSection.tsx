"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { AnatomicHeart } from "@/components/ui/AnatomicHeart"
import { WorldMap } from "@/components/ui/WorldMap"

const stagger = 0.12

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] pt-24">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,152,248,0.08)_0%,_transparent_70%)] z-0" />

      {/* World Map */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <WorldMap />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-[#0098f8]/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -30],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-4 text-center pt-4"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#0098f8]" />
            <span className="text-xs font-medium text-white/70 tracking-wide uppercase">
              Smart Clinic & EHR Platform
            </span>
          </div>
        </motion.div>

        {/* Heart logo */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <AnatomicHeart size="lg" withGlow withParticles />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight"
        >
          <span className="text-white">Menos burocracia.</span>
          <br />
          <span className="bg-gradient-to-r from-[#0098f8] via-[#00a8f8] to-[#6a3de8] bg-clip-text text-transparent">
            Mais atendimento.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed"
        >
          Organize sua clínica. Atenda mais. Faça menos cliques.
          <br />
          A plataforma que médicos e gestores escolhem para trabalhar com velocidade real.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 text-base font-medium rounded-xl px-8 py-4 bg-gradient-to-r from-[#0098f8] via-[#0070e0] to-[#6a3de8] text-white shadow-lg shadow-[#0098f8]/20 hover:shadow-[0_0_40px_rgba(0,152,248,0.3)] transition-all duration-300"
          >
            Solicitar Demonstração
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#solucao"
            className="inline-flex items-center justify-center gap-2 text-base font-medium rounded-xl px-8 py-4 border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Conhecer Funcionalidades
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={item} className="mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-white/40">
            Confiado por clínicas em todo o Brasil
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-12 mb-32 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-2">
              <motion.div className="w-1 h-2 rounded-full bg-white/30" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
