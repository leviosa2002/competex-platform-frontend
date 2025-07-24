import { InnovationCategory, SuccessStory } from "@/types/innovation"
import { INNOVATION_CATEGORIES } from "@/lib/constants"

// Export the categories from constants
export const innovationCategories: InnovationCategory[] = INNOVATION_CATEGORIES

// Success stories data
export const successStories: SuccessStory[] = [
  {
    id: "story1",
    title: "EcoFilter: Water Purification Revolution",
    description: "A team from MIT developed a low-cost, sustainable water filtration system using innovative nanomaterials. The solution can purify contaminated water in seconds without requiring electricity or complex infrastructure.",
    team: "AquaTech Innovators",
    university: "Massachusetts Institute of Technology",
    year: 2023,
    category: "tech",
    outcome: "The project received $1.5M in seed funding and is now being deployed in three developing countries.",
    image: "/images/stories/ecofilter.jpg",
    testimonial: "CompeteX provided the platform and mentorship that helped us transform our academic research into a real-world solution."
  },
  {
    id: "story2",
    title: "UrbanFarm: Vertical Agriculture Platform",
    description: "A system that combines IoT sensors, AI-driven climate control, and space-efficient vertical growing techniques to grow fresh produce in urban environments with 90% less water usage.",
    team: "GreenFuture",
    university: "Stanford University",
    year: 2022,
    category: "social",
    outcome: "Implemented in 15 urban locations, producing over 5,000 pounds of fresh produce monthly for food deserts.",
    image: "/images/stories/urbanfarm.jpg",
    testimonial: "The cross-disciplinary connections we made through CompeteX were invaluable. Our engineers, biologists, and social scientists found a common language."
  },
  {
    id: "story3",
    title: "MindMesh: Mental Health AI Companion",
    description: "An AI-powered mental wellness platform that uses natural language processing to provide personalized support, early intervention, and connects users with professional help when needed.",
    team: "CogniCare",
    university: "University of California, Berkeley",
    year: 2023,
    category: "tech",
    outcome: "The app has supported over 50,000 students across 30 universities with measurable improvements in mental wellbeing metrics.",
    image: "/images/stories/mindmesh.jpg",
    testimonial: "CompeteX challenged us to think beyond technology to consider ethics, accessibility, and real human impact."
  },
  {
    id: "story4",
    title: "SolarFlex: Printable Solar Technology",
    description: "A revolutionary technique for printing lightweight, flexible solar cells on various surfaces at one-tenth the cost of traditional panels, with improved efficiency in low-light conditions.",
    team: "LightCapture",
    university: "Georgia Institute of Technology",
    year: 2022,
    category: "tech",
    outcome: "Patent filed and strategic partnership formed with a major energy company for commercial development.",
    image: "/images/stories/solarflex.jpg",
    testimonial: "The mentorship from industry experts through CompeteX helped us navigate complex challenges in materials science and manufacturing."
  },
  {
    id: "story5",
    title: "AccessLearn: Education for All",
    description: "A comprehensive learning platform specifically designed for students with disabilities, using AI to adapt content presentation, pace, and assessment methods to individual learning needs.",
    team: "EdTech Equalizers",
    university: "University of Michigan",
    year: 2023,
    category: "social",
    outcome: "Adopted by 200+ schools, improving academic outcomes for students with diverse learning needs.",
    image: "/images/stories/accesslearn.jpg",
    testimonial: "CompeteX provided the structure and support to turn our prototype into a scalable solution that's now making education more equitable."
  },
  {
    id: "story6",
    title: "CircuitScript: Programming for Everyone",
    description: "A visual programming language and learning platform that makes coding accessible to children as young as 6 years old, regardless of language barriers or prior technology exposure.",
    team: "CodeBridge",
    university: "Carnegie Mellon University",
    year: 2022,
    category: "creative",
    outcome: "Reached 300,000 learners in 45 countries, with documented improvements in computational thinking skills.",
    image: "/images/stories/circuitscript.jpg",
    testimonial: "The innovation framework provided by CompeteX helped us balance educational objectives with user experience design for young learners."
  }
]

// Innovation methodologies
export const innovationMethodologies = [
  {
    title: "Design Thinking Process",
    steps: [
      "Empathize - Understand the user needs and context",
      "Define - Clearly articulate the problem to solve",
      "Ideate - Generate creative solution concepts",
      "Prototype - Build tangible representations of ideas",
      "Test - Gather feedback and refine solutions"
    ],
    description: "A human-centered approach to innovation that draws from the designer's toolkit to integrate the needs of people, the possibilities of technology, and the requirements for business success."
  },
  {
    title: "Lean Innovation Framework",
    steps: [
      "Build - Create a minimum viable product (MVP)",
      "Measure - Collect relevant metrics and data",
      "Learn - Analyze results and gain insights",
      "Iterate - Refine the product based on learnings"
    ],
    description: "A methodology that emphasizes rapid experimentation, early customer feedback, and iterative product development to minimize waste and maximize impact."
  },
  {
    title: "Open Innovation Model",
    steps: [
      "Collaborate - Engage diverse stakeholders",
      "Co-create - Develop solutions collectively",
      "Share - Openly exchange knowledge and resources",
      "Scale - Adapt successful innovations for broader impact"
    ],
    description: "An approach that promotes collaboration across organizational boundaries, leveraging external ideas and resources to accelerate innovation and solve complex challenges."
  }
]

// Innovation principles
export const innovationPrinciples = [
  {
    title: "User-Centered",
    description: "Putting the needs, preferences, and behaviors of users at the center of the innovation process."
  },
  {
    title: "Inclusive Design",
    description: "Creating solutions that are accessible and beneficial to people with diverse abilities and backgrounds."
  },
  {
    title: "Ethical Considerations",
    description: "Evaluating the potential social, environmental, and ethical implications of innovations."
  },
  {
    title: "Sustainability",
    description: "Developing solutions that meet present needs without compromising future resources."
  },
  {
    title: "Scalability",
    description: "Designing innovations that can effectively grow to serve larger populations or markets."
  },
  {
    title: "Cross-Disciplinary Thinking",
    description: "Integrating knowledge and approaches from multiple fields to generate novel solutions."
  }
] 