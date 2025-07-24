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
export interface GetCategoriesResponse extends ApiResponse<InnovationCategory[]> {}

// Events API
export interface GetEventsResponse extends ApiResponse<PaginatedResponse<InnovationEvent>> {}
export interface GetEventResponse extends ApiResponse<InnovationEvent> {}

export interface EventsParams {
  page?: number
  pageSize?: number
  category?: string
  startDate?: string
  endDate?: string
  search?: string
}

// Prizes API
export interface GetPrizesResponse extends ApiResponse<PaginatedResponse<InnovationPrize>> {}
export interface GetPrizeResponse extends ApiResponse<InnovationPrize> {}

export interface PrizesParams {
  page?: number
  pageSize?: number
  category?: string
  search?: string
}

// FAQ API
export interface GetFaqsResponse extends ApiResponse<PaginatedResponse<FaqItem>> {}
export interface GetFaqResponse extends ApiResponse<FaqItem> {}

export interface FaqParams {
  page?: number
  pageSize?: number
  category?: string
  search?: string
}

// Success Stories API
export interface GetSuccessStoriesResponse extends ApiResponse<PaginatedResponse<SuccessStory>> {}
export interface GetSuccessStoryResponse extends ApiResponse<SuccessStory> {}

export interface SuccessStoriesParams {
  page?: number
  pageSize?: number
  category?: string
  year?: number
  search?: string
}

// Project Registration API
export interface CreateProjectResponse extends ApiResponse<ProjectRegistration> {}

// Innovation Challenges API
export interface GetChallengesResponse extends ApiResponse<PaginatedResponse<InnovationChallenge>> {}
export interface GetChallengeResponse extends ApiResponse<InnovationChallenge> {}

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

export interface ContactFormResponse extends ApiResponse<null> {}

// Newsletter API
export interface NewsletterSubscription {
  email: string
  interests?: string[]
}

export interface NewsletterResponse extends ApiResponse<null> {} 