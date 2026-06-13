"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Funcionalidades", href: "#solucao" },
  { label: "Planos", href: "#planos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      if (currentY > 60) {
        setScrolled(true)
        if (currentY > lastScrollY.current) {
          setHidden(true)
        } else {
          setHidden(false)
        }
      } else {
        setScrolled(false)
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        scrolled
          ? "bg-[rgba(0,0,0,0.75)] backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent"
      )}
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="relative z-10 flex items-center gap-3">
          <Image
            src="/images/Logo sem fundo.png"
            alt="PrismaVita"
            width={160}
            height={45}
            className="h-[34px] sm:h-10 w-auto brightness-0 invert"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-white/60 transition-colors hover:text-white/90 after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#0098f8] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contato"
            className="text-sm text-white/60 transition-colors hover:text-white/90"
          >
            Entrar
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-xl px-4 py-2 bg-gradient-to-r from-[#0098f8] via-[#0070e0] to-[#6a3de8] text-white shadow-lg shadow-[#0098f8]/20 hover:shadow-[0_0_40px_rgba(0,152,248,0.3)] transition-all duration-300"
          >
            Solicitar Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-10 md:hidden text-white/80 hover:text-white"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0a0a12] border-l border-white/[0.06] z-40 flex flex-col pt-24 px-6 md:hidden"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-lg text-white/70 border-b border-white/[0.04] hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#demo"
                  onClick={() => setMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 text-base font-medium rounded-xl px-6 py-3 bg-gradient-to-r from-[#0098f8] via-[#0070e0] to-[#6a3de8] text-white shadow-lg shadow-[#0098f8]/20 hover:shadow-[0_0_40px_rgba(0,152,248,0.3)] transition-all duration-300"
                >
                  Solicitar Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="text-center text-sm text-white/50 py-3 hover:text-white transition-colors"
                >
                  Entrar
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
