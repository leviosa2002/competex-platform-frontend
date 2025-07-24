"use client"

import React from "react"
import { motion } from "framer-motion"
import { INNOVATION_STEPS } from "@/lib/constants"
import { Card } from "@/components/ui/card"

export function InnovationTimeline() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  }
  
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-bg opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Innovation <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From ideation to showcasing your innovation - a structured path to success
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80 transform -translate-x-1/2 hidden sm:block" />
          
          {INNOVATION_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              custom={index}
              variants={itemVariants}
              className={`relative flex flex-col sm:flex-row items-center mb-8 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Step number - Mobile version */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient text-primary-foreground font-bold text-xl sm:hidden mb-4">
                {step.id}
              </div>
              
              {/* Content for mobile */}
              <div className="sm:hidden w-full">
                <Card
                  variant="glass"
                  className="p-6 w-full holographic"
                >
                  <h3 className="text-xl font-bold mb-2 text-gradient">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </div>
              
              {/* Desktop layout with alternating sides */}
              <div className="hidden sm:block w-1/2 pr-12 text-right">
                {index % 2 === 0 ? (
                  <Card
                    variant="glass"
                    className="p-6 ml-auto holographic"
                    style={{ maxWidth: "90%" }}
                  >
                    <h3 className="text-xl font-bold mb-2 text-gradient">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                ) : (
                  <div className="flex justify-end">
                    <div className="w-16 h-16 rounded-full bg-gradient text-primary-foreground flex items-center justify-center font-bold text-xl z-10">
                      {step.id}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Timeline center dot - Desktop only */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10" />
              
              {/* Desktop layout with alternating sides */}
              <div className="hidden sm:block w-1/2 pl-12">
                {index % 2 === 1 ? (
                  <Card
                    variant="glass"
                    className="p-6 mr-auto holographic"
                    style={{ maxWidth: "90%" }}
                  >
                    <h3 className="text-xl font-bold mb-2 text-gradient">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient text-primary-foreground flex items-center justify-center font-bold text-xl z-10">
                    {step.id}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Particle effects at timeline nodes */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full h-full pointer-events-none hidden sm:block">
            {INNOVATION_STEPS.map((step, index) => (
              <motion.div
                key={`particle-${step.id}`}
                className="absolute w-8 h-8 rounded-full opacity-30 bg-primary"
                style={{ top: `${(index * 140) + 28}px`, left: "50%" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3],
                  x: "-50%",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 