"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { NAV_ITEMS } from "@/lib/constants"
import { useInnovationTheme } from "@/hooks/useInnovationTheme"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./MobileNav"

export function Header() {
  const pathname = usePathname()
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
  const { theme, toggleTheme, mounted, applyAnimation } = useInnovationTheme()

  const logoVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { 
      scale: 1.05,
      textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.2 }
    }
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        delay: 0.1 * i
      } 
    }),
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">
                CompeteX
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/50 hover:text-accent-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={applyAnimation("pulse")}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileNav}
              aria-label="Toggle mobile menu"
            >
              {mobileNavOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
            
            {/* CTA Button - Desktop Only */}
            <Button
              className="hidden md:flex bg-gradient text-primary-foreground"
              asChild
            >
              <Link href="/about">
                Join Competition
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileNavOpen} onClose={toggleMobileNav} />
      
      {/* Header Spacer */}
      <div className="h-16" />
    </>
  )
} 