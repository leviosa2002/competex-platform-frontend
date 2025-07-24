"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInnovationTheme } from "@/hooks/useInnovationTheme"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const { applyAnimation } = useInnovationTheme()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <div className="relative overflow-hidden">
      {/* Particle background container */}
      <div className="absolute inset-0 particle-container" />
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-bg opacity-5" />
      
      <div className="container mx-auto px-4 py-20 sm:py-28 md:py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            variants={itemVariants}
          >
            <span className="text-gradient">Innovate</span> to{" "}
            <span className="text-gradient">Transform</span>
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            The cutting-edge competition platform empowering the next generation 
            of innovators to create, collaborate, and change the world.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              size="lg"
              asChild
              className={`relative z-10 bg-gradient text-primary-foreground ${applyAnimation("pulse")}`}
            >
              <Link href="/about">
                Join Competition
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="tech-border"
              asChild
            >
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </motion.div>
          
          {/* Animated floating elements */}
          <div className="relative mt-16 h-64 sm:h-80 md:h-96">
            <motion.div
              className="absolute -top-4 left-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient opacity-80 -rotate-12"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -15, 0],
                rotate: [-12, -5, -12],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div
              className="absolute top-20 right-1/4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient opacity-60"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, 20, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 5,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div
              className="absolute bottom-10 left-1/3 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient opacity-70 rotate-45"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [45, 60, 45],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 7,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div
              className="absolute bottom-4 right-1/3 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient opacity-50 rotate-12"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, 15, 0],
                rotate: [12, 0, 12],
                scale: [1, 0.95, 1]
              }}
              transition={{ 
                duration: 8,
                delay: 1.5,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
} 