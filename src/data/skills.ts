export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "Monitor",
    description: "Building resilient, performant, and accessible client-side applications with modern frameworks.",
    skills: [
      { name: "React.js", level: "Core", highlight: true },
      { name: "Next.js", level: "Core", highlight: true },
      { name: "TypeScript", level: "Core", highlight: true },
      { name: "JavaScript (ES6+)", level: "Core", highlight: true },
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "Tailwind CSS", level: "Core", highlight: true }
    ]
  },
  {
    title: "Mobile Development",
    icon: "Smartphone",
    description: "Delivering cross-platform mobile experiences with native-grade performance and store readiness.",
    skills: [
      { name: "React Native", level: "Advanced", highlight: true },
      { name: "Expo", level: "Advanced", highlight: true },
      { name: "Cross-platform Application Development", level: "Advanced" }
    ]
  },
  {
    title: "State Management & Data Fetching",
    icon: "Database",
    description: "Managing complex application state and server data synchronization efficiently.",
    skills: [
      { name: "Zustand", level: "Core", highlight: true },
      { name: "TanStack Query", level: "Core", highlight: true },
      { name: "Redux", level: "Advanced" },
      { name: "Axios", level: "Core" }
    ]
  },
  {
    title: "API & Real-Time Systems",
    icon: "Wifi",
    description: "Integrating APIs, real-time channels, and building resilient data flows.",
    skills: [
      { name: "REST API Integration", level: "Core", highlight: true },
      { name: "WebSockets", level: "Advanced", highlight: true },
      { name: "Authentication & Token Refresh", level: "Core" },
      { name: "Error Handling", level: "Core" },
      { name: "API Caching", level: "Advanced" }
    ]
  },
  {
    title: "Payments & Third-Party Integrations",
    icon: "CreditCard",
    description: "Orchestrating mission-critical third-party platforms with zero data loss.",
    skills: [
      { name: "Stripe", level: "Core", highlight: true },
      { name: "eSewa", level: "Core", highlight: true },
      { name: "Google Maps API", level: "Advanced", highlight: true },
      { name: "Location-Based Services", level: "Advanced" }
    ]
  },
  {
    title: "Cloud & Deployment",
    icon: "Cloud",
    description: "Deploying and scaling applications on cloud infrastructure with automated pipelines.",
    skills: [
      { name: "Google Cloud Platform (GCP)", level: "Advanced", highlight: true },
      { name: "Vercel", level: "Core", highlight: true },
      { name: "CI/CD Pipelines", level: "Advanced" },
      { name: "Application Deployment", level: "Core" },
      { name: "Environment Configuration", level: "Core" }
    ]
  },
  {
    title: "Performance & Optimization",
    icon: "Gauge",
    description: "Maximizing runtime efficiency, bundle sizes, and perceived user experience.",
    skills: [
      { name: "Core Web Vitals", level: "Advanced", highlight: true },
      { name: "SSR (Server-Side Rendering)", level: "Core", highlight: true },
      { name: "Lazy Loading", level: "Core" },
      { name: "Code Splitting", level: "Core" },
      { name: "Bundle Optimization", level: "Advanced" },
      { name: "Caching Strategies", level: "Advanced" }
    ]
  },
  {
    title: "Engineering Practices",
    icon: "GitBranch",
    description: "Applying professional development workflows and collaborative engineering standards.",
    skills: [
      { name: "Frontend Architecture", level: "Core", highlight: true },
      { name: "Reusable Components", level: "Core", highlight: true },
      { name: "Git & GitLab", level: "Core" },
      { name: "Code Reviews", level: "Core" },
      { name: "Technical Mentoring", level: "Advanced" },
      { name: "Responsive Design", level: "Core" }
    ]
  },
  {
    title: "Security Fundamentals",
    icon: "Shield",
    description: "Integrating defensive engineering principles and secure development lifecycles.",
    skills: [
      { name: "Input Validation", level: "Core", highlight: true },
      { name: "XSS / CSRF Prevention", level: "Advanced", highlight: true },
      { name: "Secure Token Handling", level: "Core" },
      { name: "Authentication & Authorization", level: "Core" }
    ]
  }
];
