"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { innovationMethodologies, innovationPrinciples } from "@/data/innovations"
import { ContactForm } from "@/components/forms/ContactForm"
import { useInnovationTheme } from "@/hooks/useInnovationTheme"

export default function AboutPage() {
  const { applyAnimation } = useInnovationTheme()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 }
    }
  }

    

  return (
    <div className="font-sans">
      {/* Hero section */}
      <section className="py-20 relative overflow-hidden">
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 circuit-bg opacity-5" />
        
        <div className="container mx-auto px-4">
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
              Our Innovation <span className="text-gradient">Mission</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              Empowering the next generation of innovators to create meaningful solutions
              for tomorrow's challenges.
            </motion.p>

            {/* Animated floating elements */}
            <div className="relative mt-8 h-32 sm:h-40 hidden md:block">
              <motion.div
                className="absolute -top-4 left-1/4 w-12 h-12 rounded-2xl bg-gradient opacity-60 -rotate-12"
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
                className="absolute top-10 right-1/4 w-10 h-10 rounded-full bg-gradient opacity-40"
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
            </div>
          </motion.div>
        </div>
      </section>
      {/* Mission Statement */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-5" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Fostering <span className="text-gradient">Innovation</span> Worldwide
                </h2>
                
                <p className="text-lg text-muted-foreground mb-4">
                  CompeteX was founded with a simple yet powerful vision: to create a platform where 
                  young innovators can develop their ideas into impactful solutions.
                </p>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Our structured innovation framework combines competition, mentorship, 
                  and resources to guide participants from ideation to implementation.
                </p>
                
                <Button
                  size="lg"
                  asChild
                  className={`relative z-10 bg-gradient text-primary-foreground ${applyAnimation("pulse")}`}
                >
                    <Link href="/calendar" >
                      Explore Upcoming Events
                    </Link>
                </Button>
                
              </motion.div>
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card variant="glass" className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gradient">Our Impact</h3>
                  
                  <ul className="space-y-4">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                      <div>
                        <span className="font-bold">5,000+ Student Innovators</span>
                        <p className="text-muted-foreground">From over 40 countries participating in our competitions</p>
                      </div>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                      <div>
                        <span className="font-bold">750+ Completed Projects</span>
                        <p className="text-muted-foreground">Addressing real-world challenges across various domains</p>
                      </div>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                      <div>
                        <span className="font-bold">120+ University Partners</span>
                        <p className="text-muted-foreground">Supporting innovation education and development</p>
                      </div>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                      <div>
                        <span className="font-bold">$1M+ in Innovation Funding</span>
                        <p className="text-muted-foreground">Supporting promising projects and startup ventures</p>
                      </div>
                    </motion.li>
                  </ul>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Innovation Methodology */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Innovation <span className="text-gradient">Methodology</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {innovationMethodologies.map((methodology, index) => (
                <motion.div
                  key={methodology.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    variant="tech"
                    className="p-6 h-full"
                    animation="float"
                  >
                    <h3 className="text-xl font-bold mb-4 text-gradient">{methodology.title}</h3>
                    <p className="text-muted-foreground mb-6">{methodology.description}</p>
                    
                    <h4 className="font-medium mb-2">Key Steps:</h4>
                    <ul className="space-y-2">
                      {methodology.steps.map((step) => (
                        <li key={step} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Innovation Principles */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-5" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Guiding <span className="text-gradient">Principles</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {innovationPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Card
                    variant="glass"
                    className="p-6"
                    animation="pulse"
                  >
                    <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions about CompeteX or interested in partnerships?
              We'd love to hear from you.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
} 