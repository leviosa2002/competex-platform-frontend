"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { generateParticles } from "@/lib/utils"

export function useInnovationTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [particlesEnabled, setParticlesEnabled] = useState(true)
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
      if (e.matches) {
        setAnimationsEnabled(false)
        setParticlesEnabled(false)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Initialize particles when DOM is ready
  useEffect(() => {
    setMounted(true)

    if (particlesEnabled && !reducedMotion) {
      const containers = document.querySelectorAll(".particle-container")
      containers.forEach((container) => {
        generateParticles(container as HTMLElement)
      })
    }
  }, [particlesEnabled, reducedMotion])

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Toggle particles
  const toggleParticles = () => {
    setParticlesEnabled(!particlesEnabled)
  }

  // Toggle animations
  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled)
  }

  // Apply animation class conditionally
  const applyAnimation = (name: string) => {
  const animationMap: Record<string, string> = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    spin: "animate-spin",
    wiggle: "animate-[wiggle_1s_ease-in-out_infinite]",
    // Add more if needed
  }

  return animationsEnabled && !reducedMotion ? animationMap[name] ?? "" : ""
}


  return {
    theme,
    mounted,
    particlesEnabled,
    animationsEnabled,
    reducedMotion,
    toggleTheme,
    toggleParticles,
    toggleAnimations,
    applyAnimation
  }
} 