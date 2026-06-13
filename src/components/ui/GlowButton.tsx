"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { forwardRef, type ReactNode, type MouseEventHandler } from "react"

interface GlowButtonProps {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  glow?: boolean
  className?: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "md", glow = true, children, onClick, disabled }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, boxShadow: variant === "primary" ? "0 0 40px rgba(0,152,248,0.3)" : undefined }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 overflow-hidden cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0098f8] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          disabled && "opacity-50 cursor-not-allowed",
          {
            "bg-gradient-to-r from-[#0098f8] via-[#0070e0] to-[#6a3de8] text-white shadow-lg shadow-[#0098f8]/20":
              variant === "primary",
            "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20":
              variant === "secondary",
            "text-[#0098f8] hover:text-white hover:bg-white/5": variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
      >
        {glow && variant === "primary" && (
          <motion.span
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]" />
          </motion.span>
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    )
  }
)

GlowButton.displayName = "GlowButton"

export { GlowButton }
