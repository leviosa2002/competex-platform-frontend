"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  })
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setErrorMessage("")
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, you would call your API endpoint here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      
      // if (!response.ok) throw new Error('Submission failed')
      
      setIsSuccess(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 text-center rounded-lg bg-card border border-border tech-border"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient flex items-center justify-center">
            <svg className="w-8 h-8 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <Button
            className="mt-4 bg-gradient text-primary-foreground"
            onClick={() => setIsSuccess(false)}
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 bg-background rounded-md border focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.name ? "border-destructive focus:ring-destructive" : "border-input"
              }`}
              placeholder="Your name"
              {...register("name")}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
            )}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 bg-background rounded-md border focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email ? "border-destructive focus:ring-destructive" : "border-input"
              }`}
              placeholder="Your email"
              {...register("email")}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
            )}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className={`w-full px-4 py-2 bg-background rounded-md border focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.subject ? "border-destructive focus:ring-destructive" : "border-input"
              }`}
              placeholder="Message subject"
              {...register("subject")}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>
            )}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full px-4 py-2 bg-background rounded-md border focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.message ? "border-destructive focus:ring-destructive" : "border-input"
              }`}
              placeholder="Your message"
              {...register("message")}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
            )}
          </motion.div>
          
          {errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-destructive"
            >
              {errorMessage}
            </motion.p>
          )}
          
          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full bg-gradient text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>
        </form>
      )}
    </motion.div>
  )
} 