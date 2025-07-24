"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { PenTool, Code, MessageCircle, Library, ArrowRight } from "lucide-react"
import { INNOVATION_TOOLS } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InnovationTools() {
  // Get the appropriate icon for a tool
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case "pen-tool":
        return <PenTool className="h-6 w-6" />
      case "code":
        return <Code className="h-6 w-6" />
      case "message-circle":
        return <MessageCircle className="h-6 w-6" />
      case "library":
        return <Library className="h-6 w-6" />
      default:
        return <Library className="h-6 w-6" />
    }
  }
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring" }
    }
  }
  
  return (
    <section className="py-20 relative overflow-hidden">
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
            Innovation <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Access our suite of resources designed to accelerate your innovation journey
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {INNOVATION_TOOLS.map((tool, index) => (
            <motion.div
              key={tool.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card
                variant="glass"
                className="h-full p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center text-primary-foreground mb-4">
                  {getToolIcon(tool.icon)}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gradient">
                  {tool.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {tool.description}
                </p>
                
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="group tech-border"
                    asChild
                  >
                    <Link href="/about">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Floating animation elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-24 h-24 rounded-full border border-primary/20 opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div
            className="absolute bottom-40 right-20 w-16 h-16 rounded-lg border border-primary/20 opacity-30"
            animate={{
              scale: [1, 0.8, 1],
              rotate: [0, 45, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div
            className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border border-primary/20 opacity-20"
            animate={{
              scale: [1, 1.5, 1],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </div>
    </section>
  )
} 