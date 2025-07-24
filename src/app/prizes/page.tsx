"use client"

import React, { useState, useMemo } from "react" // Added useMemo for potential future optimization
import { motion } from "framer-motion"
import { Award, Trophy, Search, Filter, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { innovationPrizes, prizeCategories, sponsors } from "@/data/prizes" // Ensure paths are correct
import { useInnovationTheme } from "@/hooks/useInnovationTheme" // Ensure paths are correct

export default function PrizesPage() {
  const { applyAnimation } = useInnovationTheme()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Use useMemo for filteredPrizes to ensure it's re-calculated only when dependencies change
  // This is a more explicit way of handling derived state than relying solely on useEffect
  const filteredPrizes = useMemo(() => {
    return innovationPrizes.filter(prize => {
      // Category filter
      const categoryMatches = selectedCategory === "all" || prize.category === selectedCategory

      // Search query filter
      const searchMatches = !searchQuery ||
        prize.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prize.description.toLowerCase().includes(searchQuery.toLowerCase())

      return categoryMatches && searchMatches
    })
  }, [selectedCategory, searchQuery]) // Depend on all relevant state

  // No separate useEffect for filtering needed if using useMemo for filteredPrizes.
  // The state 'filteredPrizes' is now directly derived.
  // Original useEffect was:
  /*
  useEffect(() => {
    const filtered = innovationPrizes.filter(prize => {
      const categoryMatches = selectedCategory === "all" || prize.category === selectedCategory
      const searchMatches = !searchQuery ||
        prize.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prize.description.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatches && searchMatches
    })
    setFilteredPrizes(filtered)
  }, [selectedCategory, searchQuery, innovationPrizes]) // Added innovationPrizes dependency
  */

  // Animation variants (no changes needed here)
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("all")
    setSearchQuery("")
  }

  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    // Optional: Clear search query when changing category, as it might confuse results.
    // Uncomment the line below if you prefer this behavior:
    // setSearchQuery("");
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
              Innovation <span className="text-gradient">Rewards</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              Recognizing excellence and supporting your innovation journey
            </motion.p>

            {/* Animated floating elements */}
            <motion.div className="relative mt-8 h-32 sm:h-40 hidden md:block">
              <motion.div
                className="absolute -top-4 left-1/3 w-16 h-16 rounded-lg bg-gradient opacity-60 rotate-12"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [12, 0, 12],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              <motion.div
                className="absolute top-10 right-1/3 w-12 h-12 rounded-full bg-gradient opacity-40"
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Prizes Section */}
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
                    <label htmlFor="search-prizes" className="block text-sm font-medium mb-2">Search Prizes</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="search-prizes" // Added ID for accessibility
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search prizes..."
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
                    <label className="block text-sm font-medium mb-2">Prize Category</label>
                    <div className="space-y-2">
                      {/* Mapped prize categories */}
                      {prizeCategories.map((category, index) => (
                        <motion.div
                          key={category.id}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + ((index + 1) * 0.05), duration: 0.3 }} // Adjusted delay for "All" option
                        >
                          <input
                            type="radio"
                            id={`category-${category.id}`} // Unique ID for each category
                            name="category"
                            value={category.id}
                            checked={selectedCategory === category.id}
                            onChange={() => handleCategoryChange(category.id)}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`category-${category.id}`} // Matching htmlFor
                            className="text-sm cursor-pointer"
                            onClick={() => handleCategoryChange(category.id)} // Click on label also triggers change
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
                </Card>
              </motion.div>

              {/* Prizes List - Right Column */}
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
                      <Trophy className="mr-2 h-6 w-6 text-primary" />
                      {selectedCategory === "all"
                        ? "All Prizes & Recognition"
                        : prizeCategories.find(c => c.id === selectedCategory)?.name || "Prizes"}
                    </h2>
                    <div className="text-muted-foreground">
                      {filteredPrizes.length} prize{filteredPrizes.length !== 1 ? "s" : ""} found
                    </div>
                  </motion.div>

                  {filteredPrizes.length > 0 ? (
                    <motion.div
                      className="space-y-8"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      key={selectedCategory + searchQuery} // Crucial: forces re-render/re-animation when filters change
                    >
                      {filteredPrizes.map((prize, index) => (
                        <motion.div
                          key={prize.id} // Ensure prize.id is unique across ALL prizes
                          variants={itemVariants}
                          custom={index}
                          transition={{ delay: index * 0.08 }}
                        >
                          <Card
                            variant="tech"
                            className="p-6 hover:shadow-md transition-shadow"
                            animation="float"
                          >
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="md:w-1/4 flex flex-col items-center">
                                <motion.div
                                  className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center text-background mb-3"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Award className="h-8 w-8" />
                                </motion.div>

                                <div className="text-center">
                                  <div className="text-xl font-bold text-gradient mb-1">
                                    {prize.value}
                                  </div>

                                  {prize.sponsor && (
                                    <div className="text-sm text-muted-foreground">
                                      Sponsored by {prize.sponsor}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="md:w-3/4">
                                <h3 className="text-xl font-bold mb-2">
                                  {prize.title}
                                </h3>

                                <p className="text-muted-foreground mb-4">
                                  {prize.description}
                                </p>

                                {prize.eligibility && prize.eligibility.length > 0 && (
                                  <div className="mb-4">
                                    <h4 className="text-sm font-medium mb-2">Eligibility:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                      {prize.eligibility.map((item, eligibilityIndex) => (
                                        <motion.li
                                          key={`${prize.id}-eligibility-${eligibilityIndex}`} // Unique key for list items
                                          initial={{ opacity: 0, x: -5 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: 0.2 + (eligibilityIndex * 0.05) }}
                                        >
                                          {item}
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                <div className="flex flex-wrap gap-2">
                                  <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                    {prizeCategories.find(c => c.id === prize.category)?.name || prize.category}
                                  </span>
                                </div>
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
                        No prizes found matching your criteria.
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

      {/* Sponsors Section */}
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
              Our <span className="text-gradient">Sponsors</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Partnering with industry leaders to support the next generation of innovators
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name} // Assuming sponsor names are unique
                variants={cardVariants}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant="glass"
                  className="p-6 text-center"
                  animation="pulse"
                >
                  <div className="h-20 flex items-center justify-center mb-4">
                    {/* In a real app, you would use real sponsor logos */}
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center text-background"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xl font-bold">{sponsor.name.charAt(0)}</span>
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{sponsor.description}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full tech-border"
                    asChild
                  >
                    {/* Placeholder href - replace with actual sponsor website URL */}
                    <a href="#" className="flex items-center justify-center">
                      <span>Visit Website</span>
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}