"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-24 right-4 sm:bottom-24 sm:right-6 lg:right-24 z-40"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1a1a1a] border border-white/[0.08] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                >
                  Voltar ao topo
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1a1a1a] border-r border-t border-white/[0.08] rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={scrollToTop}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] hover:bg-white/[0.15] transition-colors"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp className="h-5 w-5 text-white/70" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
