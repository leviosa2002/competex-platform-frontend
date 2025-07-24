"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
      <Toaster position="bottom-right" />
    </ThemeProvider>
  )
} 