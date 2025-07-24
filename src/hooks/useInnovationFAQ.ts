"use client"

import { useState, useEffect, useMemo } from "react"
import { FaqItem } from "@/types/innovation"

export function useInnovationFAQ(faqs: FaqItem[] = []) {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredFaqs, setFilteredFaqs] = useState<FaqItem[]>(faqs)
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null)
  const [aiAssistantActive, setAiAssistantActive] = useState<boolean>(false)
  const [aiResponse, setAiResponse] = useState<string>("")
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false)

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>()
    faqs.forEach(faq => uniqueCategories.add(faq.category))
    return Array.from(uniqueCategories)
  }, [faqs])

  // Filter FAQs based on search query and category
  useEffect(() => {
    let filtered = [...faqs]
    
    if (selectedCategory) {
      filtered = filtered.filter(faq => faq.category === selectedCategory)
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      )
    }
    
    setFilteredFaqs(filtered)
  }, [faqs, searchQuery, selectedCategory])

  // Toggle FAQ expansion
  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id)
  }

  // Simulate AI assistant response
  const askAiAssistant = async (question: string) => {
    // In a real app, this would call an API
    setIsAiLoading(true)
    setAiAssistantActive(true)
    
    // Simulate API delay
    setTimeout(() => {
      // Find relevant FAQs to the question
      const lowerQuestion = question.toLowerCase()
      const relevantFaqs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(lowerQuestion) || 
        faq.answer.toLowerCase().includes(lowerQuestion)
      )
      
      if (relevantFaqs.length > 0) {
        // Use the most relevant FAQ answer
        setAiResponse(relevantFaqs[0].answer)
      } else {
        setAiResponse("I'm sorry, I don't have specific information about that. Please check our comprehensive FAQ sections or contact our support team for more assistance.")
      }
      
      setIsAiLoading(false)
    }, 1000)
  }

  // Reset AI assistant
  const resetAiAssistant = () => {
    setAiAssistantActive(false)
    setAiResponse("")
    setSearchQuery("")
  }

  // Get related FAQs based on expanded FAQ
  const relatedFaqs = useMemo(() => {
    if (!expandedFaqId) return []
    
    const currentFaq = faqs.find(faq => faq.id === expandedFaqId)
    if (!currentFaq || !currentFaq.relatedQuestions) return []
    
    return faqs.filter(faq => 
      currentFaq.relatedQuestions?.includes(faq.id) && 
      faq.id !== expandedFaqId
    )
  }, [faqs, expandedFaqId])

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredFaqs,
    expandedFaqId,
    toggleFaq,
    categories,
    aiAssistantActive,
    aiResponse,
    isAiLoading,
    askAiAssistant,
    resetAiAssistant,
    relatedFaqs
  }
} 