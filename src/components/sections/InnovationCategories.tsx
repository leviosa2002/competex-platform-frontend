"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Cpu, Users, Briefcase, Paintbrush, ArrowRight } from "lucide-react"
import { INNOVATION_CATEGORIES } from "@/lib/constants"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useInnovationTheme } from "@/hooks/useInnovationTheme"

export function InnovationCategories() {
  const { applyAnimation } = useInnovationTheme()
  // Get the appropriate icon for a category
  const getCategoryIcon = (iconName: string, className: string = "h-8 w-8") => {
    switch (iconName) {
      case "cpu":
        return <Cpu className={className} />
      case "users":
        return <Users className={className} />
      case "briefcase":
        return <Briefcase className={className} />
      case "paintbrush":
        return <Paintbrush className={className} />
      default:
        return <Cpu className={className} />
    }
  }
  
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
            Innovation <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore diverse fields of innovation and find your perfect challenge
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {INNOVATION_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Card variant="tech" className="h-full flex flex-col">
                <CardHeader>
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: category.color, color: "white" }}
                  >
                    {getCategoryIcon(category.icon)}
                  </div>
                  <CardTitle gradient={true}>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2" />
                      Project-based learning
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2" />
                      Expert mentorship
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2" />
                      Industry connections
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full text-primary group tech-border"
                    asChild
                  >
                    <Link href={`/about?category=${category.id}`}>
                      <span>Explore {category.title}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
              size="lg"
              asChild
              className={`relative z-10 bg-gradient text-primary-foreground ${applyAnimation("pulse")}`}
            >
            <Link href="/about">
              View All Competitions
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 