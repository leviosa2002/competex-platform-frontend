import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function createUniqueId(): string {
  return Math.random().toString(36).substring(2, 9)
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  
  return function(...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export function shimmerEffect(): string {
  return `
    animate-shimmer 
    bg-gradient-to-r 
    from-transparent 
    via-white/20 
    to-transparent 
    bg-[length:400%_100%]
  `
}

export function generateParticles(
  container: HTMLElement,
  count: number = 20
): void {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div")
    particle.classList.add("particle")
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    
    // Random size
    const size = Math.random() * 5 + 2
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    
    // Random opacity
    particle.style.opacity = `${Math.random() * 0.5 + 0.1}`
    
    // Animation
    particle.style.animation = `float ${Math.random() * 4 + 3}s ease-in-out infinite`
    
    container.appendChild(particle)
  }
}
