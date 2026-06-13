"use client"

import { useEffect, useRef, useMemo } from "react"
import { motion } from "framer-motion"
import { CONTINENT_PATHS } from "@/data/continents"

interface Point { x: number; y: number }

interface Connection { from: number; to: number; delay: number; duration: number }

const CITIES: Point[] = [
  { x: 0.5, y: 0.25 },   { x: 0.5, y: 0.55 },
  { x: 0.62, y: 0.32 },  { x: 0.72, y: 0.42 },
  { x: 0.8, y: 0.3 },    { x: 0.88, y: 0.35 },
  { x: 0.92, y: 0.55 },  { x: 0.25, y: 0.35 },
  { x: 0.53, y: 0.38 },  { x: 0.7, y: 0.5 },
]

const CONNECTIONS: Connection[] = [
  { from: 0, to: 1, delay: 0, duration: 3 },
  { from: 0, to: 3, delay: 2, duration: 3 },
  { from: 1, to: 3, delay: 4, duration: 3 },
  { from: 2, to: 3, delay: 1, duration: 3 },
  { from: 2, to: 5, delay: 3, duration: 3 },
  { from: 3, to: 6, delay: 5, duration: 3 },
  { from: 5, to: 6, delay: 2, duration: 3 },
  { from: 0, to: 4, delay: 6, duration: 3 },
  { from: 4, to: 5, delay: 0.5, duration: 3 },
  { from: 0, to: 7, delay: 3.5, duration: 3 },
]

export function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const dims = useRef({ w: 1200, h: 700 })
  const animRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  const dots = useMemo(() => CITIES.map(c => ({ baseX: c.x, baseY: c.y })), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const dpr = window.devicePixelRatio || 1
      dims.current = { w: rect.width, h: rect.height }
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    const lines = CONNECTIONS.map((conn) => {
      const fromPt = CITIES[conn.from]
      const toPt = CITIES[conn.to]
      return {
        from: { x: fromPt.x, y: fromPt.y },
        to: { x: toPt.x, y: toPt.y },
        progress: 0,
        speed: 1 / conn.duration,
        delay: conn.delay,
        active: false,
      }
    })

    function draw(timestamp: number) {
      if (!ctx) return
      const dt = Math.min((timestamp - timeRef.current) / 1000, 0.05)
      timeRef.current = timestamp
      const { w, h } = dims.current

      ctx.clearRect(0, 0, w, h)

      // Draw city dots
      dots.forEach((dot) => {
        const x = dot.baseX * w
        const y = dot.baseY * h
        ctx.beginPath()
        ctx.arc(x, y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 152, 248, 0.5)"
        ctx.fill()
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 152, 248, 0.08)"
        ctx.fill()
      })

      // Draw animated connection lines
      lines.forEach((line) => {
        if (!line.active) {
          line.delay -= dt
          if (line.delay <= 0) line.active = true
          return
        }

        line.progress += dt * line.speed
        if (line.progress > 1) line.progress = 0

        const fromX = line.from.x * w
        const fromY = line.from.y * h
        const toX = line.to.x * w
        const toY = line.to.y * h

        const midX = (fromX + toX) / 2 + (toY - fromY) * 0.15
        const midY = (fromY + toY) / 2 - (toX - fromX) * 0.15

        const progress = line.progress

        ctx.beginPath()
        ctx.moveTo(fromX, fromY)
        const steps = 60
        for (let i = 0; i <= steps; i++) {
          const t = i / steps
          const tt = t * progress
          const cx = (1 - tt) * (1 - tt) * fromX + 2 * (1 - tt) * tt * midX + tt * tt * toX
          const cy = (1 - tt) * (1 - tt) * fromY + 2 * (1 - tt) * tt * midY + tt * tt * toY
          ctx.lineTo(cx, cy)
        }
        ctx.strokeStyle = "rgba(0, 152, 248, 0.15)"
        ctx.lineWidth = 1
        ctx.stroke()

        // Light dot traveling
        const lt = progress
        const lx = (1 - lt) * (1 - lt) * fromX + 2 * (1 - lt) * lt * midX + lt * lt * toX
        const ly = (1 - lt) * (1 - lt) * fromY + 2 * (1 - lt) * lt * midY + lt * lt * toY

        ctx.beginPath()
        ctx.arc(lx, ly, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 168, 248, ${0.4 + 0.6 * (1 - Math.abs(progress - 0.5) * 2)})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(lx, ly, 5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 168, 248, ${0.08 + 0.12 * (1 - Math.abs(progress - 0.5) * 2)})`
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [dots])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {/* SVG Continent outlines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid meet"
        style={{ opacity: 0.6 }}
      >
        {CONTINENT_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="rgba(255,255,255,0.015)"
            stroke="rgba(255,255,255,0.20)"
            strokeWidth="0.5"
          />
        ))}
      </svg>
      {/* Canvas on top for connection lines */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
