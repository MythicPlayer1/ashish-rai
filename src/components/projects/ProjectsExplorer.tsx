"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { TiltCard } from "@/components/animations/TiltCard";
import { FadeInStagger } from "@/components/animations/PageTransition";
import type { ProjectCaseStudy } from "@/data/projects";

const CATEGORIES = ["All", "Web", "Mobile", "Full-Stack / Cloud", "Independent Systems"] as const;

interface ProjectsExplorerProps {
  initialProjects: ProjectCaseStudy[];
}

export function ProjectsExplorer({ initialProjects }: ProjectsExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = initialProjects.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Filters & Search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.08] pb-6 mb-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project Categories">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/20"
                  : "border border-white/[0.08] bg-[#12151b] text-zinc-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech or project..."
            aria-label="Search projects by title, tagline or technology"
            className="w-full rounded-lg border border-white/[0.08] bg-[#12151b] py-1.5 pl-9 pr-3 text-xs text-white placeholder-zinc-400 focus:border-emerald-500/50 focus:outline-none"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <FadeInStagger key={project.slug} delay={idx * 0.05}>
            <article className="h-full">
              <TiltCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-md border border-white/[0.1] bg-[#151821] px-2.5 py-1 font-mono text-[11px] text-zinc-300">
                      {project.companyOrContext}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                    {project.tagline}
                  </p>

                  <div className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                    <div className="text-[11px] font-mono uppercase text-zinc-400">
                      Architectural Highlights
                    </div>
                    <ul className="text-xs text-zinc-300 space-y-1">
                      {project.architectureHighlights.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-mono mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-white/[0.06] bg-[#12141c] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono text-zinc-400 self-center">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex w-full items-center justify-between rounded-lg bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:bg-emerald-500/10 hover:text-emerald-400 border border-transparent hover:border-emerald-500/30"
                  >
                    <span>View Architectural Breakdown</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </TiltCard>
            </article>
          </FadeInStagger>
        ))}
      </div>
    </div>
  );
}
