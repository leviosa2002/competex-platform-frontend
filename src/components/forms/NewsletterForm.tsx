"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { newsletterFormSchema, type NewsletterFormValues } from "@/lib/validations"
import { Button } from "@/components/ui/button"

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema)
  })

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Simulate API call with a timeout
      // TODO: Replace with actual API call using data  
      console.log('Newsletter form data:', data)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, you would call your API endpoint here
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      
      // if (!response.ok) throw new Error('Subscription failed')
      
      setIsSuccess(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Newsletter submission error:', error)
      setErrorMessage("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full h-11 pl-4 pr-12 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? "border-destructive focus:ring-destructive" : "border-input"
            }`}
            {...register("email")}
            disabled={isSubmitting || isSuccess}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isSubmitting || isSuccess}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient text-primary-foreground h-9 w-9"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Subscribe</span>
          </Button>
        </div>
        
        {/* Error message */}
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-destructive"
          >
            {errors.email.message}
          </motion.p>
        )}
        
        {/* API error message */}
        {errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-destructive"
          >
            {errorMessage}
          </motion.p>
        )}
        
        {/* Success message */}
        {isSuccess && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-green-500 dark:text-green-400"
          >
            Thanks for subscribing! You&apos;ll receive our next innovation updates.
          </motion.p>
        )}
        
        <div className="flex items-start gap-2 mt-2">
          <input
            type="checkbox"
            id="consent"
            className="mt-0.5"
            {...register("consent")}
            disabled={isSubmitting || isSuccess}
          />
          <label htmlFor="consent" className="text-xs text-muted-foreground">
            I agree to receive innovation updates and competition announcements from CompeteX.
            You can unsubscribe at any time.
          </label>
        </div>
        
        {/* Consent error */}
        {errors.consent && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-destructive"
          >
            {errors.consent.message}
          </motion.p>
        )}
      </form>
      
      {/* Submission animation overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-md">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
} 