"use client"

import { useEffect, useRef } from "react"

interface Dot {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function FloatingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let dots: Dot[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDots()
    }

    const initDots = () => {
      const dotCount = Math.floor((canvas.width * canvas.height) / 15000)
      dots = []

      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot) => {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        // Use a dark grey color instead of the previous color
        ctx.fillStyle = `rgba(50, 50, 50, ${dot.opacity})`
        ctx.fill()

        // Update position
        dot.x += dot.speedX
        dot.y += dot.speedY

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.speedX *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.speedY *= -1
      })

      animationFrameId = requestAnimationFrame(drawDots)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawDots()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-30 pointer-events-none" aria-hidden="true" />
}
