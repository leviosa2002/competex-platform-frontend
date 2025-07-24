// Innovation Category Types
export interface InnovationCategory {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

// Innovation Timeline Step
export interface InnovationStep {
  id: number
  title: string
  description: string
}

// Innovation Statistic
export interface InnovationStat {
  label: string
  value: string
  icon: string
}

// Innovation Tool
export interface InnovationTool {
  title: string
  description: string
  icon: string
}

// Innovation Event
export interface InnovationEvent {
  id: string
  title: string
  description: string
  date: string
  endDate?: string
  location?: string
  category: string
  url?: string
  isVirtual?: boolean
}

// Innovation Prize
export interface InnovationPrize {
  id: string
  title: string
  description: string
  value: string
  category: string
  sponsor?: string
  eligibility?: string[]
}

// FAQ Item
export interface FaqItem {
  id: string
  question: string
  answer: string
  category: string
  relatedQuestions?: string[]
}

// Success Story
export interface SuccessStory {
  id: string
  title: string
  description: string
  team: string
  university: string
  year: number
  category: string
  outcome: string
  image?: string
  testimonial?: string
}

// Team Member
export interface TeamMember {
  name: string
  email: string
  role?: string
}

// Project Registration
export interface ProjectRegistration {
  teamName: string
  projectTitle: string
  category: string
  description: string
  members: TeamMember[]
  createdAt: Date
}

// Innovation Challenge
export interface InnovationChallenge {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  category: string
  prizes: InnovationPrize[]
  eligibility: string[]
  partners?: string[]
} 