"use client"

import Image from "next/image"
import { Mail, ArrowUpRight } from "lucide-react"

const FOOTER_LINKS = {
  produto: {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "#solucao" },
      { label: "Planos e preços", href: "#planos" },
      { label: "Segurança", href: "#sobre" },
      { label: "Integrações", href: "#solucao" },
    ],
  },
  empresa: {
    title: "Empresa",
    links: [
      { label: "Sobre o PrismaVita", href: "#sobre" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#contato" },
    ],
  },
  legal: {
    title: "Legal e Suporte",
    links: [
      { label: "Termos de uso", href: "/termos" },
      { label: "Política de privacidade", href: "/privacidade" },
      { label: "LGPD", href: "/lgpd" },
      { label: "Suporte", href: "#contato" },
    ],
  },
}

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-white/[0.06] bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/Logo sem fundo.png"
              alt="PrismaVita"
              width={160}
              height={45}
              className="h-9 w-auto brightness-0 invert mb-4"
            />
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Smart Clinic & EHR Platform
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="mailto:contato@prismavita.com"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(FOOTER_LINKS).map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-60 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} PrismaVita. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="/termos" className="hover:text-white/60 transition-colors">
              Termos
            </a>
            <a href="/privacidade" className="hover:text-white/60 transition-colors">
              Privacidade
            </a>
            <a href="/lgpd" className="hover:text-white/60 transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
