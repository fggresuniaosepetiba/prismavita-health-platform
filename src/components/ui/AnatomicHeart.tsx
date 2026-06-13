"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnatomicHeartProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  withGlow?: boolean
  withParticles?: boolean
}

export function AnatomicHeart({
  size = "md",
  className,
  withGlow = true,
  withParticles = false,
}: AnatomicHeartProps) {
  const sizeMap = {
    sm: 80,
    md: 140,
    lg: 220,
    xl: 320,
  }

  const px = sizeMap[size]

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {withGlow && (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: px * 1.8,
            height: px * 1.8,
            background:
              "radial-gradient(circle, rgba(0,152,248,0.2) 0%, rgba(106,61,232,0.08) 40%, transparent 70%)",
          }}
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {withParticles && (
        <>
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180
            const radius = px * 0.7
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#0098f8]"
                style={{
                  left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                  top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1.5, 0],
                  x: [0, Math.cos(angle) * 30],
                  y: [0, Math.sin(angle) * 30],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.5,
                }}
              />
            )
          })}
        </>
      )}

      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        style={{ width: px, height: px }}
      >
        <Image
          src="/images/Icon sem fundo.png"
          alt="PrismaVita"
          width={px}
          height={px}
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  )
}
