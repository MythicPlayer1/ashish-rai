import type { Metadata } from "next";
import { Code2 } from "lucide-react";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROJECTS } from "@/data/projects";
import { createBreadcrumbSchema } from "@/data/seo";

export const metadata: Metadata = {
  title: "Engineering Projects & Architectural Case Studies",
  description:
    "Explore 7 production and independent software systems engineered by Ashish Rai, including MyMealCrates (Next.js/GCP), Snaparca (React Native), Proclaim Projection, and DigiTicki.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Engineering Projects & Architectural Case Studies | Ashish Rai",
    description:
      "Production and independent engineering case studies in Next.js, React Native, GCP cloud infrastructure, and WebSocket platforms by Ashish Rai.",
    url: "https://ashishrai.dev/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);

  return (
    <div className="py-12 sm:py-20">
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
            <Code2 className="h-3.5 w-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Selected Systems & Applications
          </h1>
          <p className="text-base text-zinc-400">
            Deep-dive case studies across production web platforms at Tuppl, high-concurrency 
            systems at Aarawan Tech, and independently developed media projection platforms.
          </p>
        </div>

        {/* Client Interactive Explorer */}
        <ProjectsExplorer initialProjects={PROJECTS} />
      </div>
    </div>
  );
}
