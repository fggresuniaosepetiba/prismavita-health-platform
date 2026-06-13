"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef, type ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, hover = true, children }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -6, scale: 1.015 } : undefined}
        transition={{ duration: 0.18, delay: 0, ease: "easeOut" }}
        className={cn(
          "relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6",
          "transition-all duration-200",
          hover && "hover:border-white/[0.15]",
          glow && "shadow-[0_0_30px_rgba(0,152,248,0.1)]",
          className
        )}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = "GlassCard"

export { GlassCard }
