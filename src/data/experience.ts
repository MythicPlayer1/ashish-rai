export interface ExperienceMilestone {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: "Full-Time" | "Academic Direction" | "Leadership";
  summary: string;
  highlights: string[];
  skills: string[];
}

export const EXPERIENCES: ExperienceMilestone[] = [
  {
    role: "Frontend Engineer & Cloud Solutions",
    company: "Tuppl",
    location: "Kathmandu, Nepal (Hybrid / Remote)",
    period: "2025 — Present",
    current: true,
    type: "Full-Time",
    summary:
      "Spearheading frontend architecture, cross-platform mobile delivery, GCP cloud infrastructure provisioning, and payment systems integration across core flagship products.",
    highlights: [
      "Engineered the MyMealCrates web platform with Next.js, implementing location-aware food discovery and sub-second checkout flows.",
      "Configured Google Cloud Platform (GCP) container infrastructure, automated deployment workflows, and cloud resource management.",
      "Integrated end-to-end Stripe payment processing with robust webhook validation and error handling.",
      "Developed the Snaparca cross-platform mobile app using Expo and React Native, driving store deployment preparations for iOS and Android.",
      "Implemented transactional communication services and third-party API orchestration with defensive error boundaries."
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Google Cloud Platform (GCP)",
      "React Native",
      "Expo",
      "Stripe API",
      "Docker",
      "CI/CD"
    ]
  },
  {
    role: "Team Lead & Senior React Developer",
    company: "Aarawan Tech",
    location: "Kathmandu, Nepal",
    period: "2024 — 2025",
    type: "Leadership",
    summary:
      "Promoted to lead frontend engineering initiatives, overseeing architectural design, code review standards, cross-functional delivery, and mentorship of junior engineers.",
    highlights: [
      "Directed frontend architecture and technical delivery across multiple commercial client products.",
      "Established strict TypeScript and component modularity standards, boosting team velocity and reducing regression defects.",
      "Conducted thorough code reviews, technical interviews, and 1-on-1 mentorship for junior developers.",
      "Facilitated engineering alignment with UI/UX designers, backend architects, and product stakeholders."
    ],
    skills: [
      "Engineering Leadership",
      "Frontend Architecture",
      "Code Review",
      "Mentorship",
      "System Design",
      "Sprint Coordination"
    ]
  },
  {
    role: "Mid-Level React Developer",
    company: "Aarawan Tech",
    location: "Kathmandu, Nepal",
    period: "2023 — 2024",
    type: "Full-Time",
    summary:
      "Engineered high-concurrency web applications, interactive visual engines, and complex state synchronization architectures.",
    highlights: [
      "Engineered DigiTicki's interactive SVG seat reservation system handling 2,000+ interactive seats at 60fps.",
      "Integrated multi-gateway payment processing supporting eSewa and Stripe with localized transaction handling.",
      "Built FasBas real-time negotiation marketplace featuring bidirectional WebSockets and optimistic UI updates.",
      "Optimized client-side bundle footprints and Core Web Vitals across active web applications."
    ],
    skills: [
      "React.js",
      "Next.js",
      "WebSockets",
      "SVG Engine",
      "eSewa Payment",
      "Stripe Integration",
      "Performance Tuning"
    ]
  },
  {
    role: "Junior React Developer",
    company: "Aarawan Tech",
    location: "Kathmandu, Nepal",
    period: "2022 — 2023",
    type: "Full-Time",
    summary:
      "Began professional engineering career building modular UI components, integrating RESTful APIs, and implementing responsive layouts.",
    highlights: [
      "Developed reusable UI component libraries using React.js, JavaScript, and Tailwind CSS.",
      "Contributed to Travo Nepal ride-sharing app with live vehicle marker tracking on Google Maps.",
      "Built RedTab commercial billing interfaces with Google Places autocomplete for swift tax invoice generation.",
      "Maintained cross-browser compatibility and responsive ergonomics across mobile and desktop devices."
    ],
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Google Maps API",
      "RESTful APIs",
      "Git Workflow"
    ]
  }
];

export const ACADEMIC_PROFILE = {
  currentInterest: "Postgraduate Aspirant in Cyber Security (DevSecOps & Secure Software Engineering)",
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    status: "Completed",
  },
  narrative:
    "Leveraging 4+ years of production frontend, cloud, and mobile engineering experience to investigate secure software lifecycles, zero-trust frontend architectures, automated vulnerability gating in CI/CD pipelines, and secure client-side cryptographic state handling.",
  focusAreas: [
    "DevSecOps & Secure CI/CD Automation",
    "Application Security (OWASP Top 10, XSS/CSRF Prevention, CSP)",
    "Cloud Infrastructure Security & IAM Hardening (GCP / Edge)",
    "Defensive State Management & Cryptographic Web APIs"
  ]
};
