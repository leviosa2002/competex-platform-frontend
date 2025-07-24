import { InnovationEvent } from "@/types/innovation"

export const innovationEvents: InnovationEvent[] = [
  {
    id: "event1",
    title: "CompeteX Global Launch",
    description: "Join us for the official launch of the CompeteX platform, featuring keynote speakers from leading tech companies and innovation hubs.",
    date: "2024-01-15",
    location: "San Francisco, CA",
    category: "tech",
    isVirtual: true,
    url: "https://events.competex.io/global-launch"
  },
  {
    id: "event2",
    title: "Innovation Challenge: Sustainable Energy",
    description: "A three-month competition focused on developing innovative solutions for renewable energy generation, storage, and distribution.",
    date: "2024-02-01",
    endDate: "2024-04-30",
    category: "tech",
    url: "https://challenges.competex.io/sustainable-energy"
  },
  {
    id: "event3",
    title: "Design Thinking Workshop",
    description: "A hands-on workshop teaching the fundamentals of design thinking methodology for innovation projects.",
    date: "2024-02-15",
    location: "Online",
    category: "creative",
    isVirtual: true,
    url: "https://workshops.competex.io/design-thinking"
  },
  {
    id: "event4",
    title: "AI for Social Good Hackathon",
    description: "A 48-hour hackathon focused on developing AI solutions that address pressing social challenges.",
    date: "2024-03-10",
    endDate: "2024-03-12",
    location: "Boston, MA",
    category: "social",
    url: "https://hackathons.competex.io/ai-social-good"
  },
  {
    id: "event5",
    title: "Startup Funding Workshop",
    description: "Learn about funding options, pitch strategies, and financial planning for innovation startups.",
    date: "2024-03-22",
    location: "Online",
    category: "business",
    isVirtual: true,
    url: "https://workshops.competex.io/startup-funding"
  },
  {
    id: "event6",
    title: "Innovation Challenge: Healthcare Tech",
    description: "A competition focused on creating technological solutions for healthcare accessibility, diagnosis, and treatment.",
    date: "2024-04-01",
    endDate: "2024-06-30",
    category: "tech",
    url: "https://challenges.competex.io/healthcare-tech"
  },
  {
    id: "event7",
    title: "Prototyping Workshop Series",
    description: "A four-part workshop series covering rapid prototyping techniques for hardware, software, and service innovations.",
    date: "2024-04-15",
    endDate: "2024-05-06",
    location: "Online",
    category: "tech",
    isVirtual: true,
    url: "https://workshops.competex.io/prototyping-series"
  },
  {
    id: "event8",
    title: "Global Innovation Showcase",
    description: "A virtual exhibition featuring top innovation projects from CompeteX competitions worldwide.",
    date: "2024-05-20",
    location: "Online",
    category: "tech",
    isVirtual: true,
    url: "https://events.competex.io/global-showcase"
  },
  {
    id: "event9",
    title: "Innovation Challenge: Climate Tech",
    description: "A competition focused on technological solutions for climate change mitigation and adaptation.",
    date: "2024-06-01",
    endDate: "2024-08-31",
    category: "tech",
    url: "https://challenges.competex.io/climate-tech"
  },
  {
    id: "event10",
    title: "Innovation Ethics Symposium",
    description: "A conference exploring ethical considerations in innovation, including privacy, accessibility, and societal impact.",
    date: "2024-06-15",
    location: "London, UK",
    category: "social",
    url: "https://events.competex.io/ethics-symposium"
  },
  {
    id: "event11",
    title: "Mentor Matching Event",
    description: "Connect with industry mentors who can provide guidance on your innovation projects.",
    date: "2024-07-10",
    location: "Online",
    category: "business",
    isVirtual: true,
    url: "https://events.competex.io/mentor-matching"
  },
  {
    id: "event12",
    title: "Innovation Challenge: EdTech",
    description: "A competition focused on developing innovative educational technologies for diverse learning environments.",
    date: "2024-08-01",
    endDate: "2024-10-31",
    category: "tech",
    url: "https://challenges.competex.io/edtech"
  },
  {
    id: "event13",
    title: "Global Innovation Summit",
    description: "Our annual flagship event bringing together innovators, industry leaders, and academics from around the world.",
    date: "2024-09-15",
    endDate: "2024-09-17",
    location: "Singapore",
    category: "tech",
    url: "https://events.competex.io/global-summit"
  },
  {
    id: "event14",
    title: "Innovation Demo Day",
    description: "Showcase your innovation projects to potential investors, partners, and industry leaders.",
    date: "2024-10-20",
    location: "New York, NY",
    category: "business",
    url: "https://events.competex.io/demo-day"
  },
  {
    id: "event15",
    title: "Innovation Challenge: Fintech",
    description: "A competition focused on innovative financial technologies that improve accessibility, security, and efficiency.",
    date: "2024-11-01",
    endDate: "2025-01-31",
    category: "business",
    url: "https://challenges.competex.io/fintech"
  }
]

// Event categories with descriptions
export const eventCategories = [
  {
    id: "all",
    name: "All Events",
    description: "View all upcoming CompeteX events, workshops, and competitions"
  },
  {
    id: "tech",
    name: "Technology Events",
    description: "Events focused on emerging technologies and digital innovation"
  },
  {
    id: "business",
    name: "Business Events",
    description: "Events focused on entrepreneurship, funding, and business development"
  },
  {
    id: "social",
    name: "Social Innovation Events",
    description: "Events focused on addressing social challenges and community needs"
  },
  {
    id: "creative",
    name: "Creative Events",
    description: "Events focused on design thinking, creative problem-solving, and artistic approaches"
  },
  {
    id: "virtual",
    name: "Virtual Events",
    description: "Online events accessible from anywhere in the world"
  },
  {
    id: "challenge",
    name: "Innovation Challenges",
    description: "Competitive innovation challenges with prizes and recognition"
  }
]

// Milestone dates for the platform
export const milestoneDates = [
  {
    id: "milestone1",
    title: "Platform Launch",
    date: "2024-01-15",
    description: "Official launch of the CompeteX innovation platform"
  },
  {
    id: "milestone2",
    title: "First Challenge Deadline",
    date: "2024-04-30",
    description: "Submission deadline for the Sustainable Energy Innovation Challenge"
  },
  {
    id: "milestone3",
    title: "Global Showcase",
    date: "2024-05-20",
    description: "Virtual exhibition of top innovation projects"
  },
  {
    id: "milestone4",
    title: "Global Summit",
    date: "2024-09-15",
    description: "Annual flagship event for the CompeteX community"
  },
  {
    id: "milestone5",
    title: "Annual Awards",
    date: "2024-12-10",
    description: "Recognition of the year's most outstanding innovation projects"
  }
] 