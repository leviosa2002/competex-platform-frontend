import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import "@/styles/innovation-theme.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientProviders } from "@/components/layout/ClientProviders"
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <ClientProviders>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
