"use client"

import { FadeInSection } from "@/components/animations/FadeInSection"

const TESTIMONIALS = [
  {
    quote: "Reduzi o tempo de consulta em quase 20 minutos por paciente. O sistema é rápido e nunca trava na hora do atendimento.",
    name: "Dra. Carla Mendes",
    specialty: "Clínica de Dermatologia · São Paulo, SP",
    initials: "CM",
  },
  {
    quote: "Finalmente um sistema que minha equipe aprendeu a usar no mesmo dia. Sem treinamento, sem manual, sem estresse.",
    name: "Dr. Rafael Costa",
    specialty: "Ortopedia · Belo Horizonte, MG",
    initials: "RC",
  },
  {
    quote: "Gerencio 3 unidades pelo PrismaVita. Agenda, prontuário e financeiro tudo centralizado. Não troco por nada.",
    name: "Dra. Juliana Pires",
    specialty: "Rede ClínicaViva · Curitiba, PR",
    initials: "JP",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Quem usa, aprova.
          </h2>
          <p className="mt-4 text-center text-white/50 text-lg max-w-xl mx-auto">
            Veja o que profissionais da saúde dizem sobre o PrismaVita.
          </p>
        </FadeInSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeInSection key={t.name} delay={i * 0.1}>
              <div
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8 flex flex-col h-full"
                style={{
                  transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
                  transitionDelay: "0ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.015)"
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ""
                  e.currentTarget.style.borderColor = ""
                }}
              >
                <div
                  className="absolute top-4 right-6 text-6xl font-serif leading-none select-none pointer-events-none"
                  style={{ color: "rgba(0,152,248,0.15)" }}
                >
                  &ldquo;
                </div>

                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-sm" style={{ color: "#FCD34D" }}>★</span>
                  ))}
                </div>

                <p className="text-sm text-white/70 leading-relaxed flex-1 relative z-[1]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 relative z-[1]">
                  <div
                    className="flex items-center justify-center rounded-full text-xs font-semibold text-white shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(0,152,248,0.2)",
                      border: "1px solid rgba(0,152,248,0.3)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/50">{t.specialty}</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
