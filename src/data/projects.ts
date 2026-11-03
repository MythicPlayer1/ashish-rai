export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: "Web" | "Mobile" | "Full-Stack / Cloud" | "Independent Systems";
  featured: boolean;
  status: "Production" | "Active Development" | "Store Submission Prep" | "Archived";
  companyOrContext: "Tuppl" | "Aarawan Tech" | "Independent Platform";
  role: string;
  period: string;
  summary: string;
  businessContext: string;
  architectureHighlights: string[];
  technologies: string[];
  responsibilities: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  metricsOrOutcomes: string[];
  links?: {
    demo?: string;
    github?: string;
    external?: string;
  };
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "mymealcrates",
    title: "MyMealCrates",
    tagline: "Location-based food ordering & delivery platform with cloud-native infrastructure.",
    category: "Full-Stack / Cloud",
    featured: true,
    status: "Production",
    companyOrContext: "Tuppl",
    role: "Frontend Engineer & Cloud Infrastructure Lead",
    period: "2025 - Present",
    summary:
      "A high-throughput food discovery and order dispatch platform enabling customers to discover regional vendors, customize orders, and complete transactions with zero latency.",
    businessContext:
      "Addressing the latency and spatial discovery limitations in dense urban delivery environments by combining dynamic client-side geolocation filtering with edge-cached vendor inventory.",
    architectureHighlights: [
      "Next.js App Router for hybrid SSR and client-side reactive carts",
      "Stripe Payment Intent lifecycle with idempotent webhook handling",
      "Google Cloud Platform (GCP) containerized services with Cloud Run & Cloud Build pipelines",
      "Automated transactional notification engine for real-time dispatch updates"
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Google Cloud Platform (GCP)",
      "Stripe API",
      "Tailwind CSS",
      "RESTful APIs",
      "Docker"
    ],
    responsibilities: [
      "Engineered the modern web storefront using Next.js with sub-second page transitions and responsive UI.",
      "Implemented spatial location detection, address auto-completion, and radius-based vendor querying.",
      "Integrated secure Stripe payment processing with client tokenization and error recovery flows.",
      "Configured GCP infrastructure, deployment pipelines, container services, and secret management.",
      "Connected transactional email dispatch and third-party delivery tracking hooks."
    ],
    challenges: [
      {
        challenge: "Handling unreliable mobile network connectivity during multi-step checkout.",
        solution:
          "Architected optimistic cart mutations paired with idempotent Stripe checkout session verifications, preventing duplicate billing on connection drops."
      },
      {
        challenge: "Sub-second vendor catalog filtering across multiple dynamic geographic radii.",
        solution:
          "Implemented client-side spatial indexing and geohash-based query boundaries, cutting redundant API queries by 60%."
      }
    ],
    metricsOrOutcomes: [
      "Sub-second initial paint and zero Cumulative Layout Shift across mobile viewports.",
      "Automated zero-downtime GCP deployment pipeline."
    ]
  },
  {
    slug: "proclaim-projection",
    title: "Proclaim Projection",
    tagline: "Independently engineered multi-display church presentation & live projection platform.",
    category: "Independent Systems",
    featured: true,
    status: "Active Development",
    companyOrContext: "Independent Platform",
    role: "Sole Creator & Lead Systems Architect",
    period: "2024 - Present",
    summary:
      "A zero-lag live media projection tool engineered for multi-monitor display synchronization, scripture database querying, dynamic typography scaling, and real-time lower-third streaming overlays.",
    businessContext:
      "Traditional church projection software is often bloated, hardware-intensive, and difficult for non-technical volunteers to operate smoothly under live service pressure.",
    architectureHighlights: [
      "Dual-screen state synchronization with low-latency window messaging",
      "Scripture indexing engine with instantaneous regex & book-chapter-verse lookup",
      "Custom display renderer with dynamic aspect-ratio scaling and live background media studio",
      "Offline-first local cache architecture ensuring continuity without active internet"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "HTML5 Canvas",
      "Tailwind CSS",
      "Web Storage API",
      "BroadcastChannel API"
    ],
    responsibilities: [
      "Architected the entire application from initial concept to high-fidelity multi-screen renderer.",
      "Built the Background Studio Modal with live video, gradient overlays, and dynamic text positioning.",
      "Engineered the rapid keyboard-driven scripture and lyric retrieval engine with instant hotkeys.",
      "Designed an accessible, high-contrast dark UI tailored for low-light projection booth environments."
    ],
    challenges: [
      {
        challenge: "Preventing UI stutter or desynchronization when streaming high-resolution background video behind dynamic verses.",
        solution:
          "Separated rendering layers into hardware-accelerated video backdrop and independent text vector overlays, utilizing requestAnimationFrame for synchronized projection."
      },
      {
        challenge: "Ensuring zero data loss or freeze when operating offline in remote venues.",
        solution:
          "Implemented robust local schema persistence using IndexedDB and Service Worker caching."
      }
    ],
    metricsOrOutcomes: [
      "Instantaneous verse retrieval under 15ms across full biblical corpus.",
      "Adopted for live weekly multi-display operations."
    ]
  },
  {
    slug: "digiticki",
    title: "DigiTicki",
    tagline: "High-concurrency event ticketing platform with interactive SVG seat reservation.",
    category: "Web",
    featured: true,
    status: "Production",
    companyOrContext: "Aarawan Tech",
    role: "Lead Frontend Engineer",
    period: "2023 - 2024",
    summary:
      "A comprehensive digital ticketing and event discovery platform featuring an interactive seat-selection matrix, real-time lock timeouts, and dual domestic and international payment gateways.",
    businessContext:
      "Event ticketing demands strict atomicity and high responsiveness: users need visual seat selection without experiencing race conditions or purchasing already-reserved seats.",
    architectureHighlights: [
      "Interactive SVG stadium and theater seating engine with pinch-to-zoom and pan support",
      "Ephemeral seat locking state machine preventing double-booking during checkout grace period",
      "Dual payment gateway routing (eSewa for domestic Nepal payments + Stripe for international cards)",
      "Dynamic ticket QR code generation with cryptographic validation verification"
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SVG Manipulation Engine",
      "eSewa SDK",
      "Stripe API"
    ],
    responsibilities: [
      "Engineered the responsive seat map renderer capable of rendering 2,000+ interactive seats without DOM lag.",
      "Implemented seat-holding countdown timers synchronized with server-side lease timeouts.",
      "Built seamless payment transition flows across eSewa redirect flows and Stripe Elements.",
      "Standardized UI components and reusable design system tokens across organizer and attendee portals."
    ],
    challenges: [
      {
        challenge: "Rendering large-scale venue seating layouts on low-end mobile devices without memory exhaustion.",
        solution:
          "Virtualized SVG node rendering and dynamic viewport culling so only visible sections recalculate hover/click bounding boxes."
      }
    ],
    metricsOrOutcomes: [
      "60fps smooth pan and zoom across 2,000+ interactive seat elements.",
      "Successful zero-conflict ticket reservation across major live events."
    ]
  },
  {
    slug: "snaparca",
    title: "Snaparca",
    tagline: "Cross-platform mobile application engineered with React Native and Expo.",
    category: "Mobile",
    featured: true,
    status: "Store Submission Prep",
    companyOrContext: "Tuppl",
    role: "Mobile Frontend Engineer",
    period: "2025 - Present",
    summary:
      "A cross-platform mobile application providing intuitive user workflows, camera capture integrations, and responsive interfaces optimized for both iOS and Android release standards.",
    businessContext:
      "Delivering a native-quality mobile experience across diverse device form factors with streamlined store preparation and build reproducibility.",
    architectureHighlights: [
      "Expo Application Services (EAS) build configurations and credentials management",
      "Platform-specific UI adaptations conforming to Apple Human Interface and Material Design standards",
      "Client-side media caching and offline optimistic UI states"
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "EAS Build",
      "Mobile State Management",
      "iOS & Android Toolchains"
    ],
    responsibilities: [
      "Developed core mobile application screens, navigation hierarchy, and user interaction states.",
      "Integrated native device capabilities and handled permissions handling for iOS and Android.",
      "Configured EAS build workflows, release certificates, and app store compliance assets.",
      "Prepared submission metadata, app bundle signing, and store compliance testing."
    ],
    challenges: [
      {
        challenge: "Resolving platform-specific layout variances and notch/island safe area constraints.",
        solution:
          "Architected adaptive layout tokens and strict safe-area wrappers preventing UI clipping across varying device screen geometries."
      }
    ],
    metricsOrOutcomes: [
      "Reproducible CI/CD mobile builds via EAS with 100% type-checked codebases.",
      "Completed readiness checklist for Apple App Store and Google Play Store submission."
    ]
  },
  {
    slug: "fasbas",
    title: "FasBas",
    tagline: "Real-time e-commerce marketplace featuring bidirectional buyer-seller WebSockets.",
    category: "Web",
    featured: false,
    status: "Production",
    companyOrContext: "Aarawan Tech",
    role: "Senior React Developer",
    period: "2023 - 2024",
    summary:
      "A modern e-commerce marketplace with instant negotiation, real-time messaging, and live price offers directly between buyers and vendors.",
    businessContext:
      "Bridging the trust gap in online commerce by empowering buyers and sellers to negotiate terms in real-time before finalizing orders.",
    architectureHighlights: [
      "Bidirectional WebSocket messaging layer for instant negotiation chat",
      "Reactive cart state management with real-time stock availability updates",
      "Optimized product catalog with infinite scroll and faceted search"
    ],
    technologies: ["React.js", "WebSockets", "JavaScript", "Tailwind CSS", "REST APIs"],
    responsibilities: [
      "Built the live chat and negotiation widget with typing indicators and read receipts.",
      "Implemented state reconciliation when prices change mid-negotiation.",
      "Optimized image loading and infinite scroll pagination."
    ],
    challenges: [
      {
        challenge: "Handling intermittent WebSocket disconnects on mobile networks.",
        solution:
          "Created an exponential backoff auto-reconnect client with an offline message queue."
      }
    ],
    metricsOrOutcomes: [
      "Zero message drop rate during network toggles.",
      "Smooth real-time negotiation experience across web and mobile browsers."
    ]
  },
  {
    slug: "travo-nepal",
    title: "Travo Nepal",
    tagline: "Dynamic ride-sharing and spatial commute platform.",
    category: "Full-Stack / Cloud",
    featured: false,
    status: "Production",
    companyOrContext: "Aarawan Tech",
    role: "Frontend Developer",
    period: "2022 - 2023",
    summary:
      "Ride-sharing application enabling passengers and drivers to match routes, track trips in real-time, and calculate dynamic fare estimates.",
    businessContext:
      "Addressing urban mobility challenges with high-reliability map interfaces and instant driver assignment.",
    architectureHighlights: [
      "Live geospatial coordinates tracking and route polyline rendering",
      "Dynamic fare calculation engine based on route distance and traffic duration",
      "Modular driver and passenger state synchronization"
    ],
    technologies: ["React.js", "Google Maps Platform", "JavaScript", "REST APIs", "Tailwind CSS"],
    responsibilities: [
      "Integrated map overlays, vehicle location markers, and route recalculation animations.",
      "Developed responsive driver-passenger booking workflow UI.",
      "Assisted in testing geospatial accuracy and error states."
    ],
    challenges: [
      {
        challenge: "Smooth vehicle marker motion along irregular road polyline vectors.",
        solution:
          "Implemented vector interpolation and bearing angle recalculation to prevent jerky marker updates."
      }
    ],
    metricsOrOutcomes: [
      "Smooth 60fps vehicle marker animation across active trip tracking sessions."
    ]
  },
  {
    slug: "redtab",
    title: "RedTab",
    tagline: "Point-of-sale and billing management software with geospatial customer intelligence.",
    category: "Web",
    featured: false,
    status: "Production",
    companyOrContext: "Aarawan Tech",
    role: "React Developer",
    period: "2022 - 2023",
    summary:
      "Commercial billing and invoicing suite equipped with Google Places autocomplete for swift tax invoice generation and delivery tracking.",
    businessContext:
      "Accelerating checkout desk billing speeds while ensuring 100% address accuracy for delivery-linked invoices.",
    architectureHighlights: [
      "High-speed invoice item entry table with keyboard-only navigation",
      "Google Places SDK autocomplete integration for error-free billing addresses",
      "Automated thermal receipt and PDF invoice generation"
    ],
    technologies: ["React.js", "Google Places API", "JavaScript", "CSS Modules", "REST APIs"],
    responsibilities: [
      "Developed the invoice creation interface with dynamic item calculations and tax rules.",
      "Integrated Google Maps location autocomplete with debounced query caching.",
      "Built print-optimized stylesheets for standard POS thermal printers."
    ],
    challenges: [
      {
        challenge: "Minimizing Google API billing costs while maintaining snappy address suggestions.",
        solution:
          "Applied strict keystroke debouncing (300ms) and session token billing isolation."
      }
    ],
    metricsOrOutcomes: [
      "Over 40% reduction in billing address entry time for store operators."
    ]
  }
];
