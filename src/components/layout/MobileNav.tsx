"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight } from "lucide-react"
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()

  // Animation variants
  const overlayVariants = {
    closed: { opacity: 0, pointerEvents: "none" },
    open: { 
      opacity: 1, 
      pointerEvents: "auto",
      transition: { duration: 0.3 }
    }
  }

  const menuVariants = {
    closed: { 
      x: "100%",
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" }
    },
    open: { 
      x: 0,
      transition: { 
        type: "tween", 
        duration: 0.4, 
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    }
  }

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-card z-50 tech-border overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <span className="text-xl font-bold text-gradient">CompeteX</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Navigation Links */}
            <nav className="px-2 py-4">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-gradient text-primary-foreground"
                          : "hover:bg-accent/50"
                      }`}
                      onClick={handleLinkClick}
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-4 w-4 opacity-70" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            {/* Call to Action */}
            <motion.div 
              className="px-4 py-3" 
              variants={itemVariants}
            >
              <Button
                className="w-full bg-gradient text-primary-foreground"
                asChild
              >
                <Link href="/about" onClick={handleLinkClick}>
                  Join Competition
                </Link>
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="mt-auto border-t border-border/50 p-4"
              variants={itemVariants}
            >
              <div className="text-sm text-muted-foreground mb-2">Connect with us</div>
              <div className="flex items-center space-x-4">
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
                    {/* Use dynamic icon import based on platform */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Particle effect container */}
            <div className="absolute inset-0 pointer-events-none particle-container overflow-hidden opacity-10" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 