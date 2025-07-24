"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, ChevronDown, ChevronUp, Send, Bot, User } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { faqItems, faqCategories, aiAssistantTraining } from "@/data/faq"
import { useInnovationTheme } from "@/hooks/useInnovationTheme"

export default function FaqPage() {
  const { applyAnimation } = useInnovationTheme()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [aiQuery, setAiQuery] = useState<string>("")
  const [aiMessages, setAiMessages] = useState<Array<{role: "user" | "assistant", content: string}>>([])
  const [isTyping, setIsTyping] = useState<boolean>(false)
  
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

  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  // Filter FAQs based on category and search query
  const filteredFaqs = faqItems.filter(faq => {
    // Category filter
    const categoryMatches = selectedCategory === "all" || faq.category === selectedCategory
    
    // Search query filter
    const searchMatches = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    
    return categoryMatches && searchMatches
  })
  
  // Toggle FAQ expansion
  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("all")
    setSearchQuery("")
  }
  
  // Handle AI assistant query submission
  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!aiQuery.trim()) return
    
    // Add user message
    const userMessage = { role: "user" as const, content: aiQuery }
    setAiMessages(prev => [...prev, userMessage])
    
    // Simulate AI typing
    setIsTyping(true)
    
    // Find relevant response from training data or use default
    const response = aiAssistantTraining.find(item => 
      aiQuery.toLowerCase().includes(item.query.toLowerCase())
    )?.response || "I'm sorry, I don't have specific information about that. Please check our comprehensive FAQ sections or contact our support team for more assistance."
    
    // Simulate response delay
    setTimeout(() => {
      setAiMessages(prev => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1000)
    
    // Clear input
    setAiQuery("")
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
              Innovation <span className="text-gradient">Support</span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              Find answers to your questions about the CompeteX platform
            </motion.p>

            {/* Animated floating elements */}
            <motion.div className="relative mt-8 h-32 sm:h-40 hidden md:block">
              <motion.div
                className="absolute -top-4 left-1/4 w-14 h-14 rounded-md bg-gradient opacity-60 rotate-45"
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [45, 30, 45],
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
                  y: [0, 15, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  duration: 5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ and AI Assistant Section */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-5" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Filters - Left Column */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card variant="glass" className="p-6 sticky top-20">
                  <motion.h2 
                    className="text-xl font-bold mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    FAQ Filters
                  </motion.h2>
                  
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium mb-2">Search FAQs</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search questions..."
                        className="w-full pl-10 pr-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium mb-2">FAQ Category</label>
                    <div className="space-y-2">
                      {faqCategories.map((category, index) => (
                        <motion.div 
                          key={category.id} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (index * 0.05), duration: 0.3 }}
                        >
                          <input
                            type="radio"
                            id={category.id}
                            name="category"
                            checked={selectedCategory === category.id}
                            onChange={() => setSelectedCategory(category.id)}
                            className="mr-2"
                          />
                          <label htmlFor={category.id} className="text-sm">
                            {category.name}
                          </label>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className={`w-full tech-border ${applyAnimation("pulse")}`}
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      Clear Filters
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
              
              {/* FAQ Content - Center Column */}
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-background rounded-lg border border-border p-6">
                  <motion.div 
                    className="flex justify-between items-center mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold">
                      Frequently Asked Questions
                    </h2>
                    <div className="text-muted-foreground">
                      {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
                    </div>
                  </motion.div>
                  
                  {filteredFaqs.length > 0 ? (
                    <motion.div 
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {filteredFaqs.map((faq, index) => (
                        <motion.div 
                          key={faq.id}
                          variants={faqVariants}
                          custom={index}
                          transition={{ delay: index * 0.05 }}
                          className="border border-border rounded-lg overflow-hidden"
                        >
                          <motion.div
                            className="flex justify-between items-center p-4 cursor-pointer hover:bg-muted/50"
                            onClick={() => toggleFaq(faq.id)}
                            whileHover={{ backgroundColor: "rgba(var(--innovation-blue-rgb), 0.05)" }}
                          >
                            <h3 className="font-medium">{faq.question}</h3>
                            <div>
                              {expandedId === faq.id ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                          </motion.div>
                          
                          <AnimatePresence>
                            {expandedId === faq.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="p-4 pt-0 border-t border-border">
                                  <p className="text-muted-foreground">{faq.answer}</p>
                                  
                                  {faq.relatedQuestions && faq.relatedQuestions.length > 0 && (
                                    <div className="mt-4">
                                      <h4 className="text-sm font-medium mb-2">Related Questions:</h4>
                                      <ul className="space-y-1">
                                        {faq.relatedQuestions.map(relatedId => {
                                          const relatedFaq = faqItems.find(item => item.id === relatedId)
                                          return relatedFaq ? (
                                            <li key={relatedId}>
                                              <button
                                                className="text-primary text-sm hover:underline text-left"
                                                onClick={(e) => {
                                                  e.stopPropagation()
                                                  toggleFaq(relatedId)
                                                }}
                                              >
                                                {relatedFaq.question}
                                              </button>
                                            </li>
                                          ) : null
                                        })}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-muted-foreground mb-4">
                        No FAQs found matching your criteria.
                      </div>
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className={applyAnimation("pulse")}
                      >
                        Clear Filters
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              
              {/* AI Assistant - Right Column */}
              <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card variant="tech" className="p-6 sticky top-20">
                  <motion.div 
                    className="flex items-center gap-2 mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Bot className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Innovation Assistant</h2>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-4 text-sm text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Ask me anything about CompeteX, innovation competitions, or how to get started!
                  </motion.div>
                  
                  <motion.div 
                    className="bg-card border border-border rounded-lg p-4 mb-4 h-80 overflow-y-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {aiMessages.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Bot className="h-12 w-12 mx-auto mb-2 opacity-20" />
                        <p>Ask a question to get started!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {aiMessages.map((message, index) => (
                          <motion.div 
                            key={index}
                            className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {message.role === "assistant" && (
                              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                                <Bot className="h-4 w-4 text-primary" />
                              </div>
                            )}
                            
                            <div 
                              className={`max-w-[80%] p-3 rounded-lg ${
                                message.role === "user" 
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-card border border-border"
                              }`}
                            >
                              {message.content}
                            </div>
                            
                            {message.role === "user" && (
                              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="h-4 w-4 text-primary" />
                              </div>
                            )}
                          </motion.div>
                        ))}
                        
                        {isTyping && (
                          <motion.div 
                            className="flex gap-2 justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                              <Bot className="h-4 w-4 text-primary" />
                            </div>
                            
                            <div className="max-w-[80%] p-3 rounded-lg bg-card border border-border">
                              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse mr-1"></span>
                              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse mr-1" style={{ animationDelay: "0.2s" }}></span>
                              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                  
                  <motion.form 
                    onSubmit={handleAiSubmit}
                    className="flex gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <input
                      type="text"
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      placeholder="Type your question..."
                      className="flex-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button 
                      type="submit"
                      className={`${applyAnimation("pulse")} bg-gradient text-primary-foreground`}
                      disabled={isTyping || !aiQuery.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </motion.form>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 