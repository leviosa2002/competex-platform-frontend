import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" })
    .max(100, { message: "Subject must be less than 100 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" })
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  interests: z
    .array(z.string())
    .optional(),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to receive the newsletter"
    })
})

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>

export const teamRegistrationSchema = z.object({
  teamName: z
    .string()
    .min(3, { message: "Team name must be at least 3 characters" })
    .max(50, { message: "Team name must be less than 50 characters" }),
  projectTitle: z
    .string()
    .min(5, { message: "Project title must be at least 5 characters" })
    .max(100, { message: "Project title must be less than 100 characters" }),
  category: z
    .string()
    .min(1, { message: "Please select a category" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" })
    .max(500, { message: "Description must be less than 500 characters" }),
  members: z
    .array(
      z.object({
        name: z
          .string()
          .min(2, { message: "Name must be at least 2 characters" }),
        email: z
          .string()
          .email({ message: "Please enter a valid email address" }),
        role: z
          .string()
          .min(2, { message: "Role must be at least 2 characters" })
          .optional()
      })
    )
    .min(1, { message: "At least one team member is required" })
    .max(5, { message: "Maximum 5 team members allowed" })
})

export type TeamRegistrationValues = z.infer<typeof teamRegistrationSchema>

export const faqSearchSchema = z.object({
  query: z
    .string()
    .min(3, { message: "Search query must be at least 3 characters" })
})

export type FaqSearchValues = z.infer<typeof faqSearchSchema> 