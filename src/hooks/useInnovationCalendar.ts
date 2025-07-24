"use client"

import { useState, useEffect, useMemo } from "react"
import { addDays, format, startOfMonth, endOfMonth, isSameDay, parseISO } from "date-fns"
import { InnovationEvent } from "@/types/innovation"

export function useInnovationCalendar(events: InnovationEvent[] = []) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [filteredEvents, setFilteredEvents] = useState<InnovationEvent[]>(events)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [view, setView] = useState<"month" | "week" | "list">("month")

  // Get events for the selected date
  const eventsForSelectedDate = useMemo(() => {
    return filteredEvents.filter((event) => {
      const eventDate = parseISO(event.date)
      return isSameDay(eventDate, selectedDate)
    })
  }, [filteredEvents, selectedDate])

  // Get events for the selected month
  const eventsForSelectedMonth = useMemo(() => {
    const monthStart = startOfMonth(selectedDate)
    const monthEnd = endOfMonth(selectedDate)
    
    return filteredEvents.filter((event) => {
      const eventDate = parseISO(event.date)
      return eventDate >= monthStart && eventDate <= monthEnd
    })
  }, [filteredEvents, selectedDate])

  // Filter events based on category and search query
  useEffect(() => {
    let filtered = [...events]
    
    if (selectedCategory) {
      filtered = filtered.filter(event => event.category === selectedCategory)
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
      )
    }
    
    setFilteredEvents(filtered)
  }, [events, selectedCategory, searchQuery])

  // Get dates with events for the calendar UI
  const datesWithEvents = useMemo(() => {
    return filteredEvents.map(event => parseISO(event.date))
  }, [filteredEvents])

  // Change the calendar view
  const changeView = (newView: "month" | "week" | "list") => {
    setView(newView)
  }

  // Get the current week's dates
  const currentWeekDates = useMemo(() => {
    const dates = []
    const startDate = selectedDate
    
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(startDate, i))
    }
    
    return dates
  }, [selectedDate])

  // Format date for display
  const formatDateDisplay = (date: Date) => {
    return format(date, "MMMM d, yyyy")
  }

  return {
    selectedDate,
    setSelectedDate,
    eventsForSelectedDate,
    eventsForSelectedMonth,
    datesWithEvents,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    view,
    changeView,
    currentWeekDates,
    formatDateDisplay
  }
} 