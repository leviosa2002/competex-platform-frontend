"use client"

import React, { useState } from "react"
import { format, parseISO } from "date-fns"
import { Calendar as CalendarIcon, Filter, MapPin, Clock, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { innovationEvents, eventCategories } from "@/data/events"
import { motion } from "framer-motion"
import { useInnovationTheme } from "@/hooks/useInnovationTheme"

export default function CalendarPage() {
  const { applyAnimation } = useInnovationTheme()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  // Filter events based on selected date, category, and search query
  const filteredEvents = innovationEvents.filter(event => {
    // Date filter
    const eventDate = parseISO(event.date)
    const dateMatches = !selectedDate || 
      (eventDate.getDate() === selectedDate.getDate() &&
       eventDate.getMonth() === selectedDate.getMonth() &&
       eventDate.getFullYear() === selectedDate.getFullYear())
    
    // Category filter
    const categoryMatches = !selectedCategory || 
      selectedCategory === "all" || 
      event.category === selectedCategory ||
      (selectedCategory === "virtual" && event.isVirtual)
    
    // Search query filter
    const searchMatches = !searchQuery || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return dateMatches && categoryMatches && searchMatches
  })
  
  // Event dates for calendar highlighting
  const eventDates = innovationEvents.map(event => parseISO(event.date))
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedDate(undefined)
    setSelectedCategory(null)
    setSearchQuery("")
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
              Innovation <span className="text-gradient">Calendar</span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              Explore upcoming events, competitions, and innovation milestones
            </motion.p>

            {/* Animated floating elements */}
            <motion.div className="relative mt-8 h-32 sm:h-40 hidden md:block">
              <motion.div
                className="absolute -top-4 left-1/3 w-14 h-14 rounded-full bg-gradient opacity-60"
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              <motion.div
                className="absolute top-10 right-1/3 w-12 h-12 rounded-lg bg-gradient opacity-40 rotate-45"
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [45, 30, 45],
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
      
      {/* Filter and Calendar Section */}
      <section className="py-12 bg-card relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-5" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Calendar and Filters - Left Column */}
              <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card variant="glass" className="p-6 mb-8">
                    <h2 className="text-xl font-bold mb-4">Select Date</h2>
                    <div className="border rounded-md p-1">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        disabled={(date) => date < new Date("2024-01-01")}
                        modifiers={{
                          hasEvent: eventDates
                        }}
                        modifiersStyles={{
                          hasEvent: { 
                            backgroundColor: "var(--innovation-blue)", 
                            color: "white",
                            borderRadius: "100%" 
                          }
                        }}
                      />
                    </div>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card variant="glass" className="p-6">
                    <h2 className="text-xl font-bold mb-4">Filters</h2>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Search Events</label>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search events..."
                        className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Event Category</label>
                      <div className="space-y-2">
                        {eventCategories.map((category, index) => (
                          <motion.div 
                            key={category.id} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + (index * 0.05), duration: 0.3 }}
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
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className={`w-full tech-border ${applyAnimation("pulse")}`}
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      Clear Filters
                    </Button>
                  </Card>
                </motion.div>
              </motion.div>
              
              {/* Events List - Right Column */}
              <motion.div 
                className="lg:col-span-8"
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
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold">
                      {selectedDate 
                        ? `Events on ${format(selectedDate, "MMMM d, yyyy")}`
                        : "All Upcoming Events"}
                    </h2>
                    <div className="text-muted-foreground">
                      {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} found
                    </div>
                  </motion.div>
                  
                  {filteredEvents.length > 0 ? (
                    <motion.div 
                      className="space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {filteredEvents.map((event, index) => (
                        <motion.div
                          key={event.id}
                          variants={cardVariants}
                          custom={index}
                          transition={{ delay: index * 0.08 }}
                        >
                          <Card
                            variant="tech"
                            className="p-6 hover:shadow-md transition-shadow"
                            animation="pulse"
                          >
                            <div className="flex flex-col md:flex-row gap-4">
                              <div className="md:w-1/4">
                                <div className="flex items-center gap-2 text-primary mb-2">
                                  <CalendarIcon className="h-4 w-4" />
                                  <span className="text-sm font-medium">
                                    {format(parseISO(event.date), "MMM d, yyyy")}
                                  </span>
                                </div>
                                
                                {event.endDate && (
                                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                    <Clock className="h-4 w-4" />
                                    <span className="text-sm">
                                      Through {format(parseISO(event.endDate), "MMM d, yyyy")}
                                    </span>
                                  </div>
                                )}
                                
                                {event.location && (
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    {event.isVirtual ? (
                                      <Globe className="h-4 w-4" />
                                    ) : (
                                      <MapPin className="h-4 w-4" />
                                    )}
                                    <span className="text-sm">{event.location}</span>
                                  </div>
                                )}
                              </div>
                              
                              <div className="md:w-3/4">
                                <h3 className="text-lg font-bold mb-2 text-gradient">
                                  {event.title}
                                </h3>
                                
                                <p className="text-muted-foreground mb-4">
                                  {event.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                  <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                    {event.category}
                                  </span>
                                  
                                  {event.isVirtual && (
                                    <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                      Virtual
                                    </span>
                                  )}
                                </div>
                                
                                {event.url && (
                                  <div className="mt-4">
                                    <Button
                                      variant="outline"
                                      className="text-primary group tech-border"
                                      asChild
                                    >
                                      <a href={event.url} target="_blank" rel="noopener noreferrer">
                                        Learn More
                                      </a>
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
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
                        No events found matching your criteria.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 