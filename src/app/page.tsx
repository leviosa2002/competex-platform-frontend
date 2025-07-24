"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { InnovationStats } from "@/components/sections/InnovationStats"
import { InnovationCategories } from "@/components/sections/InnovationCategories"
import { InnovationTimeline } from "@/components/sections/InnovationTimeline"
import { InnovationTools } from "@/components/sections/InnovationTools"

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <InnovationStats />
      <InnovationCategories />
      <InnovationTimeline />
      <InnovationTools />
    </div>
  )
}
