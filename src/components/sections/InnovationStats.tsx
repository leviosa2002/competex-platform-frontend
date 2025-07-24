"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { UserPlus, School, Globe, CheckCircle } from "lucide-react"
import { INNOVATION_STATS } from "@/lib/constants"
import { Card } from "@/components/ui/card"

export function InnovationStats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [counts, setCounts] = useState<Record<number, number>>({})
  
  // Counter animation effect
  useEffect(() => {
    if (!isInView) return
    
    const counters: Record<number, number> = {}
    const intervals: Record<number, NodeJS.Timeout> = {}
    
    INNOVATION_STATS.forEach((stat, index) => {
      const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ""))
      counters[index] = 0
      
      const duration = 2000 // 2 seconds for the animation
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      const incrementPerFrame = targetValue / totalFrames
      
      let currentFrame = 0
      
      intervals[index] = setInterval(() => {
        currentFrame++
        counters[index] = Math.min(Math.round(incrementPerFrame * currentFrame), targetValue)
        setCounts({ ...counters })
        
        if (currentFrame >= totalFrames) {
          clearInterval(intervals[index])
        }
      }, frameDuration)
    })
    
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval))
    }
  }, [isInView])
  
  // Get the appropriate icon for a stat
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "user-plus":
        return <UserPlus className="h-6 w-6" />
      case "school":
        return <School className="h-6 w-6" />
      case "globe":
        return <Globe className="h-6 w-6" />
      case "check-circle":
        return <CheckCircle className="h-6 w-6" />
      default:
        return <CheckCircle className="h-6 w-6" />
    }
  }
  
  // Format the displayed value with appropriate suffixes
  const formatStatValue = (index: number, rawValue: string) => {
    if (counts[index] === undefined) return "0"
    
    // Handle values with "+" suffix
    if (rawValue.includes("+")) {
      return `${counts[index].toLocaleString()}+`
    }
    
    return counts[index].toLocaleString()
  }
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section ref={sectionRef} className="py-16 bg-card relative overflow-hidden">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-bg opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Innovation <span className="text-gradient">Impact</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Empowering innovators worldwide to transform ideas into reality
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {INNOVATION_STATS.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card
                variant="holographic"
                className="p-6 text-center h-full"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient flex items-center justify-center text-background">
                  {getStatIcon(stat.icon)}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">
                  {formatStatValue(index, stat.value)}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 