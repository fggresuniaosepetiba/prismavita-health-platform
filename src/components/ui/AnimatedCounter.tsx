"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
  label?: string
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
  className,
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const startTime = performance.now()
    let rafId: number

    function animate(time: number) {
      const elapsed = (time - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [inView, target, duration])

  const formatted = count.toFixed(decimals)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("text-center", className)}
    >
      <div className="text-4xl md:text-5xl font-bold text-white">
        {prefix}{formatted}{suffix}
      </div>
      {label && (
        <div className="mt-2 text-sm text-white/60">{label}</div>
      )}
    </motion.div>
  )
}
