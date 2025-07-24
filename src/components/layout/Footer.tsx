"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { NAV_ITEMS, SOCIAL_LINKS, APP_NAME, APP_DESCRIPTION } from "@/lib/constants"
import { NewsletterForm } from "@/components/forms/NewsletterForm"
import { Twitter, Linkedin, Instagram, Github } from "lucide-react"

export function Footer() {
  const footerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      } 
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  }

  const currentYear = new Date().getFullYear()
  
  // Map of social platform names to Lucide icon components
  const socialIcons: Record<string, React.ReactNode> = {
    "Twitter": <Twitter size={20} />,
    "LinkedIn": <Linkedin size={20} />,
    "Instagram": <Instagram size={20} />,
    "GitHub": <Github size={20} />
  }

  return (
    <footer className="mt-16 relative overflow-hidden bg-card border-t border-border">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-bg opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={footerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Branding and Description */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold text-gradient">{APP_NAME}</h2>
            </Link>
            <p className="text-muted-foreground max-w-md">
              {APP_DESCRIPTION} - Empowering the next generation of innovators
              through structured competitions, resources, and recognition.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  title={social.platform}
                >
                  <span className="sr-only">{social.platform}</span>
                  <div className="w-8 h-8 flex items-center justify-center bg-background rounded-full hover:bg-primary/10 transition-colors">
                    {socialIcons[social.platform]}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-medium">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for innovation updates, competition
              announcements, and resources.
            </p>
            <NewsletterForm />
          </motion.div>
        </motion.div>

        {/* Copyright and Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-6 border-t border-border/50 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center"
        >
          <p>© {currentYear} {APP_NAME}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/accessibility"
              className="hover:text-primary transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 