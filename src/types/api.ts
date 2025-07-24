import { 
  InnovationCategory, 
  InnovationEvent, 
  InnovationPrize, 
  FaqItem,
  SuccessStory,
  ProjectRegistration,
  InnovationChallenge
} from './innovation'

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Paginated Response
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// Categories API
export type GetCategoriesResponse = ApiResponse<InnovationCategory[]>

// Events API
export type GetEventsResponse = ApiResponse<PaginatedResponse<InnovationEvent>>
export type GetEventResponse = ApiResponse<InnovationEvent>

export interface EventsParams {
  page?: number
  pageSize?: number
  category?: string
  startDate?: string
  endDate?: string
  search?: string
}

// Prizes API
export type GetPrizesResponse = ApiResponse<PaginatedResponse<InnovationPrize>>
export type GetPrizeResponse = ApiResponse<InnovationPrize>

export interface PrizesParams {
  page?: number
  pageSize?: number
  category?: string
  search?: string
}

// FAQ API
export type GetFaqsResponse = ApiResponse<PaginatedResponse<FaqItem>>
export type GetFaqResponse = ApiResponse<FaqItem>

export interface FaqParams {
  page?: number
  pageSize?: number
  category?: string
  search?: string
}

// Success Stories API
export type GetSuccessStoriesResponse = ApiResponse<PaginatedResponse<SuccessStory>>
export type GetSuccessStoryResponse = ApiResponse<SuccessStory>

export interface SuccessStoriesParams {
  page?: number
  pageSize?: number
  category?: string
  year?: number
  search?: string
}

// Project Registration API
export type CreateProjectResponse = ApiResponse<ProjectRegistration>

// Innovation Challenges API
export type GetChallengesResponse = ApiResponse<PaginatedResponse<InnovationChallenge>>
export type GetChallengeResponse = ApiResponse<InnovationChallenge>

export interface ChallengesParams {
  page?: number
  pageSize?: number
  category?: string
  active?: boolean
  search?: string
}

// Contact Form API
export interface ContactFormSubmission {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFormResponse = ApiResponse<null>

// Newsletter API
export interface NewsletterSubscription {
  email: string
  interests?: string[]
}

export type NewsletterResponse = ApiResponse<null> 