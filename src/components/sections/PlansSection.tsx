"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeInSection } from "@/components/animations/FadeInSection"

const PRICES: Record<string, { monthly: number; annual: number } | null> = {
  starter: { monthly: 99.9, annual: 74.9 },
  basic: { monthly: 199.9, annual: 149.9 },
  pro: { monthly: 349.9, annual: 262.9 },
  enterprise: null,
}

const ALL_FEATURES: Record<string, string[]> = {
  Starter: [
    "Prontuário eletrônico completo",
    "Agenda com lembretes automáticos",
    "Cadastro ilimitado de pacientes",
    "Relatórios básicos",
    "Suporte via chat",
  ],
  Basic: [
    "Tudo do Starter",
    "Controle financeiro básico",
    "Anamnese personalizada",
    "Prescrição digital",
    "Exportação de relatórios PDF",
    "Suporte prioritário",
  ],
  Pro: [
    "Tudo do Basic",
    "Controle financeiro avançado",
    "Dashboard de performance",
    "Múltiplos perfis de acesso",
    "Integrações nativas",
    "API de dados",
    "Onboarding dedicado",
    "Suporte com SLA garantido",
  ],
  Enterprise: [
    "Tudo do Pro",
    "Múltiplas unidades centralizadas",
    "BI e relatórios customizados",
    "Desenvolvimento sob demanda",
    "Gestor de conta exclusivo",
    "SLA premium",
    "Integração com sistemas legados",
    "Treinamento presencial",
  ],
}

interface PlanInfo {
  id: string
  name: string
  desc: string
  users: string
  featured: boolean
  cta: string
  ctaPrimary: boolean
  badge?: string
}

const PLANS: PlanInfo[] = [
  { id: "starter", name: "Starter", desc: "Para consultórios e profissionais individuais", users: "Até 3 usuários", featured: false, cta: "Começar agora", ctaPrimary: false },
  { id: "basic", name: "Basic", desc: "Para clínicas em crescimento", users: "Até 5 usuários", featured: false, cta: "Começar agora", ctaPrimary: false },
  { id: "pro", name: "Pro", desc: "Para clínicas que querem operar em alto nível", users: "Até 10 usuários", featured: true, cta: "Começar agora", ctaPrimary: true, badge: "Mais Popular" },
  { id: "enterprise", name: "Enterprise", desc: "Para redes de clínicas, franquias e múltiplas unidades", users: "Usuários ilimitados", featured: false, cta: "Falar com especialista", ctaPrimary: false },
]

function fmtBR(v: number): string {
  return v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function Card({ plan, billing, index }: { plan: PlanInfo; billing: string; index: number }) {
  const p = PRICES[plan.id]
  const features = ALL_FEATURES[plan.name]
  const annual = billing === "annual"
  const price = p ? (annual ? p.annual : p.monthly) : null
  const priceLabel = price !== null ? `R$ ${fmtBR(price)}` : "Sob consulta"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] },
      }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: plan.featured ? 1.03 : 1.015 }}
      transition={{ duration: 0.18, delay: 0, ease: "easeOut" }}
      className="relative rounded-2xl border flex flex-col backdrop-blur-xl h-full"
      style={{
        background: plan.featured
          ? "linear-gradient(135deg, rgba(0,152,248,0.06), rgba(106,61,232,0.04))"
          : "rgba(255,255,255,0.03)",
        borderColor: plan.featured ? "rgba(0,152,248,0.35)" : "rgba(255,255,255,0.07)",
        boxShadow: plan.featured ? "0 0 40px rgba(0,152,248,0.10)" : "none",
      }}
    >
      {plan.featured && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" style={{ padding: "1px" }}>
          <div
            className="w-full h-full rounded-2xl"
            style={{
              background: "conic-gradient(from var(--angle, 0deg), rgba(0,152,248,0.5), rgba(106,61,232,0.5), rgba(0,168,248,0.5), rgba(0,152,248,0.5))",
              animation: "spin-gradient 4s linear infinite",
            }}
          />
        </div>
      )}

      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <motion.span
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#0098f8] to-[#6a3de8] px-3 py-1 text-xs font-semibold text-white shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {plan.badge}
          </motion.span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1 relative z-[1]" style={{ paddingTop: plan.badge ? "40px" : "32px" }}>
        <div>
          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
          <p className="mt-1 text-sm text-white/50">{plan.desc}</p>
          <p className="mt-1 text-xs text-white/40">{plan.users}</p>
        </div>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          {price !== null ? (
            <div className="flex items-baseline gap-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${plan.id}-${billing}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-3xl font-bold text-white"
                >
                  R$ {fmtBR(price)}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-white/50">/mês</span>
            </div>
          ) : (
            <span className="text-3xl font-bold text-white">Sob consulta</span>
          )}
          {price !== null && (
            <p className="mt-0.5 text-xs text-white/40 min-h-[1rem]">
              {annual ? "por mês · cobrado anualmente" : "por mês"}
            </p>
          )}
        </div>

        <hr className="border-white/[0.08]" style={{ margin: "0 0 24px 0" }} />

        <ul className="flex-1 flex flex-col gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <Check className="h-4 w-4 text-[#0098f8] mt-0.5 shrink-0" />
              <span className="text-sm text-white/60">{f}</span>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "auto", paddingTop: "24px" }}>
          <a
            href={plan.id === "enterprise" ? "#contato" : "#demo"}
            className={`w-full inline-flex items-center justify-center gap-2 text-sm font-medium rounded-xl px-6 py-3 transition-all duration-300 ${
              plan.ctaPrimary
                ? "bg-gradient-to-r from-[#0098f8] via-[#0070e0] to-[#6a3de8] text-white shadow-lg shadow-[#0098f8]/20 hover:shadow-[0_0_40px_rgba(0,152,248,0.3)]"
                : "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
            }`}
          >
            {plan.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function PlansSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual")

  return (
    <section id="planos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,152,248,0.03)_0%,_transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Planos para cada momento da sua clínica.
          </h2>
          <p className="mt-4 text-center text-white/50 text-lg max-w-xl mx-auto">
            Sem contrato de fidelidade. Sem taxas escondidas. Cancele quando quiser.
          </p>
        </FadeInSection>

        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex items-center rounded-full p-1"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className="rounded-full text-sm font-medium cursor-pointer select-none transition-all duration-200"
              style={{
                padding: "10px 24px",
                background: billing === "monthly" ? "white" : "transparent",
                color: billing === "monthly" ? "#0a0a0f" : "rgba(255,255,255,0.50)",
                boxShadow: billing === "monthly" ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
              }}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className="rounded-full text-sm font-medium cursor-pointer select-none transition-all duration-200 flex items-center gap-2"
              style={{
                padding: "10px 24px",
                background: billing === "annual" ? "white" : "transparent",
                color: billing === "annual" ? "#0a0a0f" : "rgba(255,255,255,0.50)",
                boxShadow: billing === "annual" ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
              }}
            >
              Anual
              {billing === "annual" && (
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold"
                  style={{
                    background: "rgba(34,197,94,0.15)",
                    color: "#22c55e",
                    border: "1px solid rgba(34,197,94,0.3)",
                  }}
                >
                  -25%
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <Card key={plan.name} plan={plan} billing={billing} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
