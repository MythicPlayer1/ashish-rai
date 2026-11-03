import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Zap,
  Layers,
  Cloud,
  Shield,
} from "lucide-react";
import { TiltCard } from "@/components/animations/TiltCard";
import { Magnetic } from "@/components/animations/MagneticButton";
import { HeroTerminal } from "@/components/home/HeroTerminal";
import { HeroActions } from "@/components/home/HeroActions";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROJECTS } from "@/data/projects";
import { EXPERIENCES, ACADEMIC_PROFILE } from "@/data/experience";
import { SITE_CONFIG, PROFILE_PAGE_SCHEMA } from "@/data/seo";

export const metadata: Metadata = {
  title: "Ashish Rai | Senior Frontend Developer, React & Next.js Systems Architect",
  description:
    "Ashish Rai is a Senior Frontend Engineer at Tuppl specializing in React, Next.js, React Native, and GCP cloud deployments. Explore production case studies and architecture.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashish Rai | Senior Frontend Developer & Systems Architect",
    description:
      "Frontend Engineer at Tuppl with 4+ years of experience scaling web applications, React Native mobile apps, and GCP cloud infrastructure.",
    url: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <>
      <JsonLd data={PROFILE_PAGE_SCHEMA} />

      {/* ===================== HERO SECTION ===================== */}
      <section
        aria-label="Introduction"
        className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Narrative & Headline */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Frontend Engineer @ Tuppl • Open to High-Impact Senior Roles</span>
              </div>

              {/* Main H1 for SEO & Search Engine Hierarchy */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ashish Rai — <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Frontend Developer
                </span>{" "}
                & Systems Architect.
              </h1>

              {/* Sub-headline with naturally woven keyword authority */}
              <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                I am <span className="font-semibold text-white">Ashish Rai</span>, a Senior Frontend Developer
                and React / Next.js specialist with 4+ years of production experience scaling web applications at{" "}
                <span className="text-emerald-400 font-medium">Tuppl</span> and leading engineering teams at{" "}
                <span className="text-zinc-200 font-medium">Aarawan Tech</span>. Experienced in React Native
                mobile apps, Google Cloud Platform (GCP) infrastructure, and researching{" "}
                <span className="text-emerald-300 font-medium">Cyber Security & DevSecOps</span>.
              </p>

              {/* Action Buttons (Client Island) */}
              <HeroActions />

              {/* Quick stats ribbon */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-6 max-w-lg">
                <div>
                  <div className="font-mono text-2xl font-bold text-white">4+ Yrs</div>
                  <div className="text-xs text-zinc-400">Frontend Engineering</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-emerald-400">Team Lead</div>
                  <div className="text-xs text-zinc-400">Progression & Mentorship</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-cyan-400 text-nowrap">GCP + Stripe</div>
                  <div className="text-xs text-zinc-400">Cloud & Payments</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Systems Terminal Widget (Client Island) */}
            <div className="lg:col-span-5">
              <HeroTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FLAGSHIP CASE STUDIES ===================== */}
      <section
        aria-label="Featured Projects"
        className="py-20 border-t border-white/[0.06] bg-[#090b0e]/50"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                Selected Work & Systems
              </div>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Featured Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Explore All 7 Engineering Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Grid of Flagship Projects */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="h-full">
                <TiltCard className="h-full flex flex-col justify-between p-6">
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-md border border-white/[0.1] bg-[#151821] px-2.5 py-1 font-mono text-[11px] text-zinc-300">
                        {project.companyOrContext}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                      {project.tagline}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                      <div className="text-[11px] font-mono uppercase text-zinc-400">
                        Key Architecture
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

                    {/* Tech Badges */}
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

                  {/* Footer link to deep case study */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex w-full items-center justify-between rounded-lg bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:bg-emerald-500/10 hover:text-emerald-400 border border-transparent hover:border-emerald-500/30"
                    >
                      <span>Read Deep-Dive Case Study</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </TiltCard>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ENGINEERING PILLARS ===================== */}
      <section aria-label="Core Engineering Disciplines" className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              Core Principles
            </div>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Engineering Disciplines
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              How I balance cutting-edge frontend craft with defensive systems reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/[0.08] bg-[#0d0f14] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Sub-Second Performance</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Zero CLS layouts, edge caching, server component boundaries, and strict asset budgets
                consistently hitting 95+ Core Web Vitals.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0d0f14] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Fluid UI & Design Systems</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Design-token driven architectures, 60fps spring micro-animations, and full keyboard/screen-reader
                accessibility (WCAG AA).
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0d0f14] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <Cloud className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Cloud Infrastructure (GCP)</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Hands-on provisioning with Google Cloud Platform, Cloud Run containerization, Cloud Build CI/CD,
                and resilient Stripe payment webhooks.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0d0f14] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/10 text-rose-400">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Defensive Security (DevSecOps)</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                OWASP Top 10 mitigation, CSP headers, rate-limiting, and pursuing postgraduate academic
                research in secure software lifecycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CAREER PROGRESSION TIMELINE ===================== */}
      <section aria-label="Career Experience" className="py-20 border-t border-white/[0.06] bg-[#090b0e]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                Career Trajectory
              </div>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Experience & Progression
              </h2>
            </div>
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>View Full Career Timeline</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.slice(0, 3).map((exp, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/[0.08] bg-[#0d0f14] p-6 sm:p-8 transition-colors hover:border-emerald-500/30"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      {exp.current && (
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-zinc-400 font-medium mt-0.5">
                      {exp.company} <span className="text-zinc-600">•</span> {exp.location}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-zinc-400">{exp.period}</div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{exp.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-white/[0.06] bg-[#141822] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ACADEMIC & DEVSECOPS SPOTLIGHT ===================== */}
      <section aria-label="Academic Direction" className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0c1318] via-[#0d1017] to-[#080a0e] p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
                <Shield className="h-3.5 w-3.5" />
                <span>Academic Direction & Research</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {ACADEMIC_PROFILE.currentInterest}
              </h2>
              <p className="text-sm leading-relaxed text-zinc-300">
                {ACADEMIC_PROFILE.narrative}
              </p>
              <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2">
                {ACADEMIC_PROFILE.focusAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Learn more about my background and academic objectives</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION BANNER ===================== */}
      <section aria-label="Contact Call to Action" className="py-20 border-t border-white/[0.08] bg-[#07080a]">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something exceptional together.
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400">
            Whether you are seeking a Senior Frontend Engineer to scale your product, looking
            for high-ticket consulting on Next.js/GCP architectures, or discussing academic research.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Initiate Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#12151c] px-6 py-3.5 text-sm font-medium text-zinc-200 hover:text-white"
              >
                Inspect Resume / CV
                <ExternalLink className="h-4 w-4 text-zinc-400" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
