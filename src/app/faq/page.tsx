"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, HelpCircle, ChevronDown, ChevronUp, Send } from "lucide-react"
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
  const [aiResponse, setAiResponse] = useState<string>("")
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false)

  // Toggle FAQ item expansion
  const toggleFaq = (id: string) => {
    setExpandedId(prevId => (prevId === id ? null : id))
  }

  // Use useMemo for filteredFaqs to ensure it's re-calculated only when dependencies change
  const filteredFaqs = useMemo(() => {
    return faqItems.filter(faq => {
      // Category filter
      const categoryMatches = selectedCategory === "all" || faq.category === selectedCategory

      // Search query filter
      const searchMatches = !searchQuery ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())

      return categoryMatches && searchMatches
    })
  }, [selectedCategory, searchQuery])

  // Handle AI assistant query
  const handleAiQuery = () => {
    if (!aiQuery.trim()) {
      setAiResponse("Please type a question for the AI assistant.")
      return
    }

    setIsAiLoading(true)

    // Simulate an API call with a delay
    setTimeout(() => {
      // Simple AI logic: search for keywords in training data
      const lowerCaseQuery = aiQuery.toLowerCase()
      let foundResponse = "I'm sorry, I couldn't find an answer to that specific question in my knowledge base. Please try rephrasing or check the FAQs."

      // Look for keyword matches in the AI training data
      for (const item of aiAssistantTraining) {
        if (lowerCaseQuery.includes(item.query.toLowerCase()) || 
            item.query.toLowerCase().includes(lowerCaseQuery)) {
          foundResponse = item.response
          break
        }
      }

      // If no match in AI training, look for matches in FAQ items
      if (foundResponse.includes("couldn't find an answer")) {
        for (const faq of faqItems) {
          if (faq.question.toLowerCase().includes(lowerCaseQuery)) {
            foundResponse = faq.answer
            break
          }
        }
      }

      setAiResponse(foundResponse)
      setIsAiLoading(false)
    }, 1000)
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("all")
    setSearchQuery("")
  }

  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    // Optionally close any expanded FAQ when changing category
    setExpandedId(null)
  }

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
      transition: { duration: 0.5 }
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
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              Find answers to common questions about our innovation challenge.
            </motion.p>

            {/* Animated floating elements */}
            <motion.div className="relative mt-8 h-32 sm:h-40 hidden md:block">
              <motion.div
                className="absolute -top-4 left-1/3 w-14 h-14 rounded-md bg-gradient opacity-60 rotate-45"
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
                className="absolute top-10 right-1/3 w-10 h-10 rounded-full bg-gradient opacity-40"
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
      
      {/* Filter and FAQ Section */}
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
                    Filters
                  </motion.h2>
                  
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label htmlFor="search-faqs" className="block text-sm font-medium mb-2">Search FAQs</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="search-faqs"
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
                          transition={{ delay: 0.3 + ((index + 1) * 0.05), duration: 0.3 }}
                        >
                          <input
                            type="radio"
                            id={`faq-category-${category.id}`}
                            name="faq-category"
                            value={category.id}
                            checked={selectedCategory === category.id}
                            onChange={() => handleCategoryChange(category.id)}
                            className="mr-2"
                          />
                          <label 
                            htmlFor={`faq-category-${category.id}`} 
                            className="text-sm cursor-pointer"
                            onClick={() => handleCategoryChange(category.id)}
                          >
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

                  {/* AI Assistant */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-border"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <h3 className="text-lg font-bold mb-3 flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                      AI Assistant
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ask me anything about the challenge!
                    </p>
                    <div className="space-y-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={aiQuery}
                          onChange={(e) => setAiQuery(e.target.value)}
                          placeholder="e.g., How do I submit my project?"
                          onKeyPress={(e) => {
                            if (e.key === "Enter") handleAiQuery()
                          }}
                          className="w-full pl-10 pr-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <HelpCircle className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      </div>
                      
                      <Button 
                        onClick={handleAiQuery} 
                        className={`w-full ${applyAnimation("pulse")}`}
                        disabled={isAiLoading || !aiQuery.trim()}
                      >
                        {isAiLoading ? "Thinking..." : "Get Answer"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    {aiResponse && (
                      <motion.div
                        className="mt-4 p-4 bg-card text-foreground rounded-md text-sm border border-border"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {aiResponse}
                      </motion.div>
                    )}
                  </motion.div>
                </Card>
              </motion.div>
              
              {/* FAQs - Right Column */}
              <motion.div 
                className="lg:col-span-9"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                    <h2 className="text-2xl font-bold flex items-center">
                      <HelpCircle className="mr-2 h-6 w-6 text-primary" />
                      {selectedCategory === "all" 
                        ? "All FAQs" 
                        : faqCategories.find(c => c.id === selectedCategory)?.name || "FAQs"}
                    </h2>
                    <div className="text-muted-foreground">
                      {filteredFaqs.length} item{filteredFaqs.length !== 1 ? "s" : ""} found
                    </div>
                  </motion.div>
                  
                  {filteredFaqs.length > 0 ? (
                    <motion.div
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      key={selectedCategory + searchQuery} // Force re-render when filters change
                    >
                      {filteredFaqs.map((faq, index) => (
                        <motion.div
                          key={faq.id}
                          variants={itemVariants}
                          custom={index}
                          transition={{ delay: index * 0.08 }}
                        >
                          <Card
                            variant="tech"
                            className="p-4 hover:shadow-md transition-shadow"
                            animation={expandedId === faq.id ? "pulse" : undefined}
                          >
                            <div 
                              onClick={() => toggleFaq(faq.id)}
                              className="flex justify-between items-center cursor-pointer"
                            >
                              <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                              {expandedId === faq.id ? (
                                <ChevronUp className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                              )}
                            </div>
                            
                            <AnimatePresence>
                              {expandedId === faq.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                  animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden border-t border-border pt-3 mt-3 text-muted-foreground"
                                >
                                  <p>{faq.answer}</p>
                                  
                                  {faq.relatedQuestions && faq.relatedQuestions.length > 0 && (
                                    <div className="mt-4">
                                      <h4 className="text-sm font-medium mb-2">Related Questions:</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {faq.relatedQuestions.map(relatedId => {
                                          const relatedFaq = faqItems.find(item => item.id === relatedId)
                                          return relatedFaq ? (
                                            <Button
                                              key={relatedId}
                                              variant="outline"
                                              size="sm"
                                              className="text-xs"
                                              onClick={(e) => {
                                                e.stopPropagation() // Prevent toggling the current FAQ
                                                setExpandedId(relatedId)
                                                // Scroll to the related FAQ
                                                const element = document.getElementById(relatedId)
                                                if (element) element.scrollIntoView({ behavior: "smooth", block: "center" })
                                              }}
                                            >
                                              {relatedFaq.question.length > 50 
                                                ? `${relatedFaq.question.substring(0, 50)}...` 
                                                : relatedFaq.question}
                                            </Button>
                                          ) : null
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Card>
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
                        <Filter className="mr-2 h-4 w-4" />
                        Clear Filters
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}