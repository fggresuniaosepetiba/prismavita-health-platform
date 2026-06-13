"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FadeInSection } from "@/components/animations/FadeInSection"

const FAQS = [
  {
    q: "Preciso instalar algum programa?",
    a: "Não. O PrismaVita é 100% online. Acesse de qualquer dispositivo com internet.",
  },
  {
    q: "É difícil migrar do meu sistema atual?",
    a: "Nossa equipe auxilia na migração de dados. O processo é guiado e sem interrupção do atendimento.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Utilizamos criptografia de ponta e infraestrutura em nuvem com os maiores padrões de segurança do mercado.",
  },
  {
    q: "Posso testar antes de contratar?",
    a: "Sim. Oferecemos demonstração guiada e período de avaliação. Fale com nossa equipe.",
  },
  {
    q: "O que acontece se eu precisar de mais usuários?",
    a: "Você pode adicionar usuários extras por R$ 24,99/mês cada, sem precisar trocar de plano.",
  },
  {
    q: "Existe contrato de fidelidade?",
    a: "Não. Você pode cancelar quando quiser, sem multa.",
  },
  {
    q: "O PrismaVita atende qual especialidade médica?",
    a: "Atende qualquer especialidade. A plataforma é flexível e configurável para diferentes fluxos clínicos.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Suporte real via chat e WhatsApp. Sem robôs, sem fila infinita.",
  },
]

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white"
      >
        <span className="text-sm sm:text-base font-medium text-white/80">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-white/50 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const mid = Math.ceil(FAQS.length / 2)
  const leftFAQs = FAQS.slice(0, mid)
  const rightFAQs = FAQS.slice(mid)

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Perguntas frequentes
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.2} className="mt-16">
          <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-x-12">
            <div>
              {leftFAQs.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openIndex === FAQS.indexOf(faq)}
                  onToggle={() =>
                    setOpenIndex(openIndex === FAQS.indexOf(faq) ? null : FAQS.indexOf(faq))
                  }
                />
              ))}
            </div>
            <div>
              {rightFAQs.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openIndex === FAQS.indexOf(faq)}
                  onToggle={() =>
                    setOpenIndex(openIndex === FAQS.indexOf(faq) ? null : FAQS.indexOf(faq))
                  }
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
