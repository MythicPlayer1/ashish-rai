export const SITE_CONFIG = {
  name: "Ashish Rai",
  title: "Ashish Rai | Senior Frontend Developer & Systems Architect",
  description:
    "Ashish Rai is a Senior Frontend Engineer & React/Next.js Developer at Tuppl. Specializing in high-performance web applications, React Native mobile apps, GCP cloud infrastructure, and DevSecOps research.",
  url: "https://ashishrai.dev",
  ogImage: "https://ashishrai.dev/og-image.png",
  author: "Ashish Rai",
  jobTitle: "Senior Frontend Engineer",
  company: "Tuppl",
  previousCompany: "Aarawan Tech",
  location: "Kathmandu, Nepal",
  email: "ashishraiofficial@gmail.com",
  phone: "+977 9869812171",
  socials: {
    github: "https://github.com/MythicPlayer1",
    linkedin: "https://www.linkedin.com/in/ashish-rai-942a3b24b/",
  },
  keywords: [
    "Ashish Rai",
    "Ashish Rai Frontend Developer",
    "Ashish Rai React Developer",
    "Ashish Rai Next.js Developer",
    "Ashish Rai React Native Developer",
    "Frontend Engineer Nepal",
    "Senior Frontend Architect",
    "Next.js App Router Specialist",
    "React Native Expo Engineer",
    "GCP Cloud Run Deployments",
    "DevSecOps Aspirant",
    "Tuppl Frontend Lead",
    "Aarawan Tech Developer",
    "Web Performance Core Web Vitals",
  ],
};

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_CONFIG.url}/#person`,
  name: "Ashish Rai",
  alternateName: ["Ashish Rai Frontend Developer", "Ashish Rai React Developer"],
  jobTitle: "Senior Frontend Engineer & Systems Architect",
  description:
    "Senior Frontend Engineer with 4+ years of production experience scaling web applications at Tuppl and Aarawan Tech. Specializing in Next.js, React, React Native, GCP cloud infrastructure, and DevSecOps.",
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/profile.jpg`,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "Nepal",
  },
  worksFor: {
    "@type": "Organization",
    name: "Tuppl",
    url: "https://tuppl.com",
  },
  alumniOf: [
    {
      "@type": "Organization",
      name: "Aarawan Tech",
    },
  ],
  sameAs: [
    SITE_CONFIG.socials.github,
    SITE_CONFIG.socials.linkedin,
  ],
  knowsAbout: [
    "Frontend Engineering",
    "Next.js Architecture",
    "React.js Development",
    "React Native & Expo",
    "TypeScript",
    "Google Cloud Platform (GCP)",
    "Payment Gateways (Stripe & eSewa)",
    "Real-time WebSockets",
    "DevSecOps & Cyber Security",
    "Core Web Vitals Optimization",
    "Design Systems & WCAG Accessibility",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  url: SITE_CONFIG.url,
  name: "Ashish Rai | Senior Frontend Developer & Systems Architect",
  description: SITE_CONFIG.description,
  publisher: {
    "@id": `${SITE_CONFIG.url}/#person`,
  },
  inLanguage: "en-US",
};

export const PROFILE_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_CONFIG.url}/#webpage`,
  url: SITE_CONFIG.url,
  name: "Ashish Rai Portfolio",
  isPartOf: {
    "@id": `${SITE_CONFIG.url}/#website`,
  },
  about: {
    "@id": `${SITE_CONFIG.url}/#person`,
  },
  mainEntity: {
    "@id": `${SITE_CONFIG.url}/#person`,
  },
  inLanguage: "en-US",
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function createProjectSchema(project: {
  title: string;
  tagline: string;
  slug: string;
  summary: string;
  technologies: string[];
  companyOrContext: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    headline: project.tagline,
    description: project.summary,
    applicationCategory: "WebApplication",
    operatingSystem: "Web, Cloud, Cross-platform",
    url: `${SITE_CONFIG.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Ashish Rai",
    },
    creator: {
      "@type": "Organization",
      name: project.companyOrContext,
    },
    softwareRequirements: project.technologies.join(", "),
  };
}
