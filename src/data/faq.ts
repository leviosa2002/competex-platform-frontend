import { FaqItem } from "@/types/innovation"

export const faqItems: FaqItem[] = [
  // Getting Started
  {
    id: "faq1",
    question: "What is CompeteX?",
    answer: "CompeteX is an innovation-driven competition platform designed for students and young innovators. It provides a structured framework for developing innovative projects across technology, social impact, business, and creative categories. The platform offers resources, mentorship, and recognition opportunities to support the innovation journey.",
    category: "getting-started",
    relatedQuestions: ["faq2", "faq3", "faq4"]
  },
  {
    id: "faq2",
    question: "How do I register for a competition?",
    answer: "Registration is simple! Navigate to the 'Challenges' section, select the competition that interests you, and click 'Register'. You'll need to create a CompeteX account if you don't already have one, then follow the guided registration process where you'll provide basic information about your team and project concept.",
    category: "getting-started",
    relatedQuestions: ["faq3", "faq5", "faq6"]
  },
  {
    id: "faq3",
    question: "What types of innovation competitions are available?",
    answer: "CompeteX offers four main categories of innovation competitions: Technology Innovation (digital solutions, hardware, emerging tech), Social Innovation (addressing community challenges, social impact), Business Innovation (entrepreneurship, business models), and Creative Innovation (design thinking, artistic approaches).",
    category: "getting-started",
    relatedQuestions: ["faq1", "faq4", "faq11"]
  },
  {
    id: "faq4",
    question: "Who can participate in CompeteX competitions?",
    answer: "CompeteX competitions are primarily designed for students (high school, undergraduate, and graduate levels) and young innovators under 30 years old. Some competitions have specific eligibility requirements, which are clearly stated in each competition description. We welcome participants from all countries and backgrounds!",
    category: "getting-started",
    relatedQuestions: ["faq1", "faq2", "faq5"]
  },
  {
    id: "faq5",
    question: "Is there a registration fee?",
    answer: "Most CompeteX competitions are free to enter, thanks to our sponsors and partners. Some specialized challenges may have a nominal registration fee, which is always clearly indicated on the competition page. We also offer fee waivers for participants with financial constraints – just reach out to our support team.",
    category: "getting-started",
    relatedQuestions: ["faq2", "faq4", "faq26"]
  },
  
  // Project Guidelines
  {
    id: "faq6",
    question: "What are the project submission requirements?",
    answer: "Project submissions typically include: 1) A detailed project description (1000-2000 words), 2) Visual materials (images, diagrams, or video), 3) Prototype or proof-of-concept (when applicable), 4) Implementation plan, and 5) Impact assessment. Specific requirements vary by competition and are detailed in each competition brief.",
    category: "project-guidelines",
    relatedQuestions: ["faq7", "faq8", "faq9"]
  },
  {
    id: "faq7",
    question: "How are innovation projects evaluated?",
    answer: "Projects are evaluated based on several criteria: Innovation (originality and creativity), Feasibility (technical and practical viability), Impact potential (scope and scale of positive effects), Execution quality (implementation and presentation), and Alignment with competition themes. Each criterion is weighted differently depending on the competition focus.",
    category: "project-guidelines",
    relatedQuestions: ["faq6", "faq8", "faq10"]
  },
  {
    id: "faq8",
    question: "Can I submit an existing project or idea?",
    answer: "Yes, you can submit projects that you've already started working on, but they must be in the early development stages and have significant innovation potential. Previously published or fully commercialized projects are generally not eligible. Each competition has specific guidelines regarding project maturity and originality requirements.",
    category: "project-guidelines",
    relatedQuestions: ["faq6", "faq7", "faq9"]
  },
  {
    id: "faq9",
    question: "What kind of documentation should I prepare?",
    answer: "Prepare comprehensive documentation that clearly explains your innovation, including: Problem statement, Solution overview, Technical specifications, Implementation methodology, Impact assessment, and Future development plans. Visual elements like diagrams, mockups, and prototypes greatly enhance your submission.",
    category: "project-guidelines",
    relatedQuestions: ["faq6", "faq8", "faq10"]
  },
  {
    id: "faq10",
    question: "Are there specific format requirements for submissions?",
    answer: "Yes, submissions should follow our standardized format guidelines: Text documents in PDF format, Images in PNG or JPG (max 5MB each), Videos hosted on YouTube or Vimeo (max 5 minutes), and Presentations in PDF (max 20 slides). Detailed formatting guidelines are provided in each competition brief.",
    category: "project-guidelines",
    relatedQuestions: ["faq6", "faq7", "faq9"]
  },
  
  // Teams & Collaboration
  {
    id: "faq11",
    question: "How do I form a team for competitions?",
    answer: "You can form a team in several ways: Invite friends or classmates directly through the platform, use our 'Team Matching' feature to find collaborators with complementary skills, join team formation events (virtual or in-person), or participate in our pre-competition workshops where you can meet potential teammates.",
    category: "teams-collaboration",
    relatedQuestions: ["faq12", "faq13", "faq14"]
  },
  {
    id: "faq12",
    question: "What is the recommended team size?",
    answer: "The ideal team size depends on your project's complexity, but we recommend 3-5 members for most competitions. This provides a good balance of diverse skills while maintaining effective communication. Some competitions have specific team size requirements, which are clearly stated in the competition guidelines.",
    category: "teams-collaboration",
    relatedQuestions: ["faq11", "faq13", "faq15"]
  },
  {
    id: "faq13",
    question: "Can I participate in multiple competitions simultaneously?",
    answer: "Yes, you can participate in multiple competitions, but we recommend being realistic about your capacity to deliver quality submissions. You can be part of different teams for different competitions, but some competitions have exclusivity clauses that prevent overlapping participation – check individual competition rules.",
    category: "teams-collaboration",
    relatedQuestions: ["faq11", "faq12", "faq14"]
  },
  {
    id: "faq14",
    question: "How do we manage collaboration on the platform?",
    answer: "CompeteX provides built-in collaboration tools including: Team workspace for document sharing, Task management features for work allocation, Communication channels for team discussions, Version control for project iterations, and Progress tracking dashboards. These tools are accessible from your team's project management dashboard.",
    category: "teams-collaboration",
    relatedQuestions: ["faq11", "faq13", "faq15"]
  },
  {
    id: "faq15",
    question: "What if I can't find team members with specific skills?",
    answer: "If you're struggling to find team members with particular skills, we offer several solutions: Our 'Skill-Based Matching' tool can connect you with individuals having the specific expertise you need, 'Expert Consultations' provide access to specialists for specific aspects of your project, and 'Mentorship Programs' can help fill knowledge gaps in your team.",
    category: "teams-collaboration",
    relatedQuestions: ["faq11", "faq12", "faq14"]
  },
  
  // Intellectual Property
  {
    id: "faq16",
    question: "Who owns the intellectual property (IP) of submitted projects?",
    answer: "Teams retain full ownership of their intellectual property. CompeteX does not claim any ownership rights to your innovations. However, by participating, you grant CompeteX non-exclusive rights to showcase your project (non-confidential aspects) for promotional purposes. For competitions with specific IP arrangements (e.g., sponsored challenges), terms are clearly outlined in the competition rules.",
    category: "intellectual-property",
    relatedQuestions: ["faq17", "faq18", "faq19"]
  },
  {
    id: "faq17",
    question: "How can I protect my innovation ideas during the competition?",
    answer: "We recommend: 1) Using our NDA (Non-Disclosure Agreement) template for team members and mentors, 2) Sharing only non-confidential information in public showcases, 3) Considering provisional patent applications for patentable innovations before public disclosure, and 4) Consulting with our IP advisors who can provide guidance specific to your innovation.",
    category: "intellectual-property",
    relatedQuestions: ["faq16", "faq18", "faq20"]
  },
  {
    id: "faq18",
    question: "Are there resources for IP education and protection?",
    answer: "Yes, CompeteX provides comprehensive IP resources including: Educational modules on IP basics, Template agreements (NDAs, team agreements), Access to IP advisors for consultation, Discounted services with partner patent attorneys, and Guides for different forms of IP protection (patents, trademarks, copyrights, etc.).",
    category: "intellectual-property",
    relatedQuestions: ["faq16", "faq17", "faq19"]
  },
  {
    id: "faq19",
    question: "What happens if there's an IP dispute within a team?",
    answer: "We strongly encourage teams to establish clear IP agreements at the beginning of their collaboration using our template agreements. If disputes arise, CompeteX offers a mediation service to help resolve conflicts. For legal disputes, we can refer teams to appropriate legal resources, but CompeteX does not adjudicate legal IP conflicts.",
    category: "intellectual-property",
    relatedQuestions: ["faq16", "faq18", "faq20"]
  },
  {
    id: "faq20",
    question: "Can sponsors or partners claim rights to our innovations?",
    answer: "No, sponsors and partners cannot automatically claim rights to your innovations. Any specific arrangements regarding IP rights with sponsors (such as licensing options or first-refusal rights) are always explicitly stated in the competition rules before registration. We prioritize transparency in all IP-related matters.",
    category: "intellectual-property",
    relatedQuestions: ["faq16", "faq17", "faq19"]
  },
  
  // Prizes & Recognition
  {
    id: "faq21",
    question: "What types of prizes are available?",
    answer: "CompeteX offers a diverse range of prizes including: Monetary awards (from $1,000 to $50,000), Educational scholarships, Incubation opportunities with workspace and resources, Mentorship packages with industry leaders, Technology access grants, Global showcase opportunities, and Publication in innovation journals.",
    category: "prizes-recognition",
    relatedQuestions: ["faq22", "faq23", "faq24"]
  },
  {
    id: "faq22",
    question: "How and when are prizes distributed?",
    answer: "Monetary prizes are typically distributed within 30 days of winner announcement via bank transfer or other preferred payment methods. Non-monetary prizes (incubation, mentorship, etc.) are initiated within 60 days of competition conclusion. All winners must complete required documentation, including prize acceptance forms and tax-related paperwork.",
    category: "prizes-recognition",
    relatedQuestions: ["faq21", "faq23", "faq25"]
  },
  {
    id: "faq23",
    question: "Are there opportunities beyond winning the main prizes?",
    answer: "Absolutely! Beyond the main prizes, participants can benefit from: Exposure to industry partners and investors, Media coverage for innovative projects, Networking with the global innovation community, Alumni network access for continued opportunities, Special category awards and recognitions, and Partner organization opportunities (internships, collaborations).",
    category: "prizes-recognition",
    relatedQuestions: ["faq21", "faq22", "faq24"]
  },
  {
    id: "faq24",
    question: "What recognition do non-winning projects receive?",
    answer: "We believe in recognizing excellence beyond just the winners. Non-winning finalists and notable projects receive: Finalist certificates and digital badges, Inclusion in our annual innovation showcase, Featured profiles on the CompeteX platform, Invitation to exclusive networking events, and Specialized feedback from judges and experts.",
    category: "prizes-recognition",
    relatedQuestions: ["faq21", "faq23", "faq25"]
  },
  {
    id: "faq25",
    question: "Are there tax implications for receiving prizes?",
    answer: "Yes, monetary prizes may have tax implications depending on your country of residence. Winners are responsible for any applicable taxes on prizes received. CompeteX provides appropriate tax documentation (such as 1099 forms in the US), but we recommend consulting with a tax professional regarding your specific situation.",
    category: "prizes-recognition",
    relatedQuestions: ["faq21", "faq22", "faq26"]
  },
  
  // Technical Support
  {
    id: "faq26",
    question: "How can I get technical support during the competition?",
    answer: "Technical support is available through multiple channels: Live chat support during business hours, Email support with 24-hour response guarantee, Knowledge base with comprehensive guides, Community forums for peer assistance, Weekly office hours with technical advisors, and Emergency hotline for time-sensitive issues during critical submission periods.",
    category: "technical-support",
    relatedQuestions: ["faq27", "faq28", "faq29"]
  },
  {
    id: "faq27",
    question: "What resources are available for project development?",
    answer: "CompeteX provides extensive development resources: Technology tutorials and guides, Design thinking and innovation methodology courses, Access to development tools and software (through partnerships), Testing environments for prototypes, Data resources for research, and API documentation for platform integration.",
    category: "technical-support",
    relatedQuestions: ["faq26", "faq28", "faq30"]
  },
  {
    id: "faq28",
    question: "Is there assistance for specific technical challenges?",
    answer: "Yes, we offer specialized technical assistance: Expert office hours in various technical domains, Peer mentoring for common challenges, Domain-specific forums moderated by experts, Technical workshops during competitions, One-on-one technical consultations (by application), and Resource libraries for specialized fields.",
    category: "technical-support",
    relatedQuestions: ["faq26", "faq27", "faq29"]
  },
  {
    id: "faq29",
    question: "What should I do if I experience platform technical issues?",
    answer: "If you encounter technical issues: First, check our known issues page for documented problems and workarounds, Use the 'Report a Problem' feature with screenshots and specific details, Contact our technical support team via live chat or email, Try alternative browsers or clearing cache for common web issues, and For submission-related emergencies, use our dedicated hotline.",
    category: "technical-support",
    relatedQuestions: ["faq26", "faq28", "faq30"]
  },
  {
    id: "faq30",
    question: "Are there accessibility accommodations available?",
    answer: "Yes, CompeteX is committed to accessibility. We provide: Platform compatibility with major screen readers and assistive technologies, Alternative formats for all competition materials, Extended deadlines when needed for accessibility reasons, Sign language interpretation for live events (upon request), Color contrast options and text size adjustments, and Dedicated support for specific accessibility needs.",
    category: "technical-support",
    relatedQuestions: ["faq26", "faq27", "faq29"]
  }
]

// FAQ categories with descriptions
export const faqCategories = [
  {
    id: "all",
    name: "All FAQs",
    description: "Browse all frequently asked questions about the CompeteX platform"
  },
  {
    id: "getting-started",
    name: "Getting Started",
    description: "Basic information about CompeteX and how to begin your innovation journey"
  },
  {
    id: "project-guidelines",
    name: "Project Guidelines",
    description: "Detailed requirements and best practices for innovation projects"
  },
  {
    id: "teams-collaboration",
    name: "Teams & Collaboration",
    description: "How to form teams, find collaborators, and work effectively together"
  },
  {
    id: "intellectual-property",
    name: "Intellectual Property",
    description: "Understanding IP rights, protection, and sharing in innovation competitions"
  },
  {
    id: "prizes-recognition",
    name: "Prizes & Recognition",
    description: "Information about awards, scholarships, and opportunities for recognition"
  },
  {
    id: "technical-support",
    name: "Technical Support",
    description: "Help with platform features, submission processes, and technical issues"
  }
]

// AI Assistant training phrases
export const aiAssistantTraining = [
  {
    query: "How do I register for CompeteX?",
    response: "To register for CompeteX, click the 'Sign Up' button on the top right of our homepage. You'll need to provide basic information and create an account. After verifying your email, you can complete your profile and browse available competitions to register for specific innovation challenges."
  },
  {
    query: "What types of competitions do you offer?",
    response: "CompeteX offers four main categories of innovation competitions: Technology Innovation (digital solutions, hardware, emerging tech), Social Innovation (addressing community challenges, social impact), Business Innovation (entrepreneurship, business models), and Creative Innovation (design thinking, artistic approaches)."
  },
  {
    query: "How are winners selected?",
    response: "Winners are selected through a multi-stage evaluation process. First, submissions undergo technical review for eligibility and completeness. Then, qualified entries are evaluated by expert judges using standardized scoring criteria specific to each competition. Finalists may be invited to present their projects before winners are determined."
  },
  {
    query: "Can international students participate?",
    response: "Yes! CompeteX welcomes participants from all countries and backgrounds. Our platform is designed to support global participation with international payment methods, multilingual support, and virtual participation options for those who cannot attend in-person events."
  },
  {
    query: "How do I protect my innovation idea?",
    response: "CompeteX respects your intellectual property rights. We recommend using our NDA templates for team collaborations, considering provisional patent applications before public disclosure, sharing only non-confidential aspects in public showcases, and consulting with our IP advisors for guidance specific to your innovation."
  }
] 