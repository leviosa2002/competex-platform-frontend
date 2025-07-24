import { InnovationPrize } from "@/types/innovation"

export const innovationPrizes: InnovationPrize[] = [
  {
    id: "prize1",
    title: "Grand Innovation Award",
    description: "The top prize for the most innovative and impactful project across all categories. This award recognizes exceptional creativity, technical execution, and potential for real-world impact.",
    value: "$50,000",
    category: "grand",
    sponsor: "CompeteX Foundation",
    eligibility: ["Open to all participants", "Project must be completed within the competition timeframe"]
  },
  {
    id: "prize2",
    title: "Technology Innovation Award",
    description: "Awarded to the most innovative technology solution that demonstrates technical excellence and groundbreaking applications.",
    value: "$25,000",
    category: "tech",
    sponsor: "Future Technologies Inc.",
    eligibility: ["Technology category participants", "Must include functional prototype"]
  },
  {
    id: "prize3",
    title: "Social Impact Award",
    description: "Recognizes the project with the most significant positive social impact potential, addressing pressing community needs or global challenges.",
    value: "$25,000",
    category: "social",
    sponsor: "Global Change Initiative",
    eligibility: ["Social Innovation category participants", "Must demonstrate measurable impact"]
  },
  {
    id: "prize4",
    title: "Business Innovation Award",
    description: "Awarded to the most promising business model or entrepreneurial concept with strong market potential and sustainability.",
    value: "$25,000",
    category: "business",
    sponsor: "Venture Capital Partners",
    eligibility: ["Business Innovation category participants", "Must include business plan"]
  },
  {
    id: "prize5",
    title: "Creative Innovation Award",
    description: "Celebrates outstanding creativity in problem-solving, design thinking, and novel approaches to innovation challenges.",
    value: "$25,000",
    category: "creative",
    sponsor: "Creative Futures Foundation",
    eligibility: ["Creative Innovation category participants", "Must demonstrate original approach"]
  },
  {
    id: "prize6",
    title: "Innovation Scholarship Program",
    description: "Educational scholarships for continued studies in innovation-related fields including technology, design, entrepreneurship, and social impact.",
    value: "$10,000 per recipient (10 available)",
    category: "education",
    sponsor: "Education Forward Alliance",
    eligibility: ["Current students", "Demonstrated excellence in innovation projects"]
  },
  {
    id: "prize7",
    title: "Startup Incubation Package",
    description: "Comprehensive incubation package including workspace, mentorship, legal support, and initial funding to develop the innovation into a viable startup.",
    value: "Valued at $100,000",
    category: "business",
    sponsor: "Innovation Accelerator Network",
    eligibility: ["Business-focused projects", "Team committed to pursuing venture full-time"]
  },
  {
    id: "prize8",
    title: "Global Innovation Showcase Opportunity",
    description: "Selected projects will be featured in the Global Innovation Showcase with exposure to international audiences, investors, and partners.",
    value: "Global exposure and networking",
    category: "recognition",
    sponsor: "CompeteX Global Partners",
    eligibility: ["Top 20 projects across all categories"]
  },
  {
    id: "prize9",
    title: "Technology Access Grants",
    description: "Access to cutting-edge technology resources, cloud computing credits, software licenses, and hardware for continued development.",
    value: "Technology package valued at $20,000",
    category: "tech",
    sponsor: "Tech Innovation Consortium",
    eligibility: ["Technology category participants", "Ongoing development needs"]
  },
  {
    id: "prize10",
    title: "Mentorship Excellence Program",
    description: "One year of dedicated mentorship from industry leaders and successful innovators in relevant fields, with personalized guidance and connections.",
    value: "12 months of executive mentorship",
    category: "development",
    sponsor: "Innovation Leaders Network",
    eligibility: ["All category finalists", "Commitment to ongoing project development"]
  },
  {
    id: "prize11",
    title: "Publication Opportunity",
    description: "Selected projects will be featured in the annual CompeteX Innovation Journal and case studies distributed to global innovation networks.",
    value: "International publication and recognition",
    category: "recognition",
    sponsor: "Innovation Media Group",
    eligibility: ["All participants", "Notable innovation approaches or outcomes"]
  },
  {
    id: "prize12",
    title: "Sustainable Innovation Award",
    description: "Recognizes innovations that specifically address environmental sustainability, climate action, and ecological preservation.",
    value: "$20,000",
    category: "sustainability",
    sponsor: "Sustainable Future Coalition",
    eligibility: ["Projects with environmental focus", "Measurable sustainability impact"]
  }
]

// Prize categories with descriptions
export const prizeCategories = [
  {
    id: "all",
    name: "All Prizes",
    description: "Complete overview of all awards, grants, and recognition opportunities"
  },
  {
    id: "grand",
    name: "Grand Awards",
    description: "Top-tier recognition for exceptional innovation excellence"
  },
  {
    id: "tech",
    name: "Technology Prizes",
    description: "Awards specifically for technological innovations and digital solutions"
  },
  {
    id: "social",
    name: "Social Impact Prizes",
    description: "Recognition for innovations addressing social and community challenges"
  },
  {
    id: "business",
    name: "Business Innovation Prizes",
    description: "Awards for entrepreneurial concepts and business model innovations"
  },
  {
    id: "creative",
    name: "Creative Innovation Awards",
    description: "Recognition for design excellence and creative problem-solving"
  },
  {
    id: "education",
    name: "Educational Opportunities",
    description: "Scholarships and learning resources for continued innovation education"
  },
  {
    id: "development",
    name: "Development Resources",
    description: "Mentorship, guidance, and support for ongoing project development"
  },
  {
    id: "recognition",
    name: "Recognition Opportunities",
    description: "Platforms for visibility, publication, and industry recognition"
  },
  {
    id: "sustainability",
    name: "Sustainability Awards",
    description: "Specific recognition for environmentally-focused innovations"
  }
]

// Sponsor information
export const sponsors = [
  {
    name: "CompeteX Foundation",
    logo: "/images/sponsors/competex-foundation.svg",
    description: "The primary organization behind the CompeteX platform, dedicated to fostering innovation worldwide."
  },
  {
    name: "Future Technologies Inc.",
    logo: "/images/sponsors/future-tech.svg",
    description: "A leading technology company supporting cutting-edge digital innovations and emerging tech."
  },
  {
    name: "Global Change Initiative",
    logo: "/images/sponsors/global-change.svg",
    description: "An international organization focused on social impact innovations and global challenges."
  },
  {
    name: "Venture Capital Partners",
    logo: "/images/sponsors/venture-capital.svg",
    description: "A consortium of investors supporting promising innovation startups and business concepts."
  },
  {
    name: "Education Forward Alliance",
    logo: "/images/sponsors/education-forward.svg",
    description: "A coalition of educational institutions supporting innovation in learning and student development."
  },
  {
    name: "Innovation Accelerator Network",
    logo: "/images/sponsors/innovation-accelerator.svg",
    description: "A global network of innovation hubs, incubators, and accelerators supporting new ventures."
  },
  {
    name: "Sustainable Future Coalition",
    logo: "/images/sponsors/sustainable-future.svg",
    description: "An alliance dedicated to promoting and supporting sustainability-focused innovations."
  }
] 