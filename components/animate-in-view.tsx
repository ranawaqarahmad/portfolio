"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant = "fade-in" | "slide-up" | "slide-in-right" | "scale-in"

interface AnimateInViewProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function AnimateInView({
  children,
  className,
  variant = "fade-in",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}: AnimateInViewProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all will-change-transform"
    const durationClass = `duration-${duration}`
    const delayClass = delay > 0 ? `delay-${delay}` : ""

    const variantClasses = {
      "fade-in": isVisible ? "opacity-100" : "opacity-0",
      "slide-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      "slide-in-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
      "scale-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    }

    return cn(baseClasses, durationClass, delayClass, variantClasses[variant])
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}
