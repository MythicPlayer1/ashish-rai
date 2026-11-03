import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Layers,
  ShieldCheck,
  Server,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { createProjectSchema, createBreadcrumbSchema, SITE_CONFIG } from "@/data/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const pageTitle = `${project.title} — Architectural Case Study`;
  const pageDescription = `${project.title}: ${project.tagline} Engineered with ${project.technologies.slice(0, 4).join(", ")}. Explore architecture, challenges, and solutions by Ashish Rai.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${pageTitle} | Ashish Rai`,
      description: pageDescription,
      url: `${SITE_CONFIG.url}/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study — Ashish Rai`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Ashish Rai`,
      description: pageDescription,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const projectSchema = createProjectSchema(project);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.title, url: `/projects/${project.slug}` },
  ]);

  return (
    <article className="py-12 sm:py-20">
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Link href="/projects" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Projects</span>
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-zinc-200" aria-current="page">{project.title}</span>
        </nav>

        {/* 1. Case Study Header */}
        <header className="space-y-4 border-b border-white/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-md border border-white/[0.1] bg-[#141822] px-3 py-1 font-mono text-xs text-zinc-300">
              {project.companyOrContext}
            </span>
            <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              {project.status}
            </span>
            <span className="font-mono text-xs text-zinc-400">
              {project.period}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-zinc-300">
            {project.tagline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-mono">
            <div className="rounded-lg border border-white/[0.06] bg-[#0e1117] p-3">
              <span className="text-zinc-400 block mb-1">ROLE & RESPONSIBILITY</span>
              <span className="text-emerald-400 font-semibold">{project.role}</span>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-[#0e1117] p-3">
              <span className="text-zinc-400 block mb-1">DOMAIN & CATEGORY</span>
              <span className="text-zinc-200">{project.category}</span>
            </div>
          </div>
        </header>

        {/* 2. Business Problem & Objectives */}
        <section aria-labelledby="heading-business-context" className="py-10 border-b border-white/[0.08] space-y-4">
          <h2 id="heading-business-context" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-400" />
            <span>Business Problem & Context</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            {project.businessContext}
          </p>
          <div className="rounded-xl border border-white/[0.06] bg-[#0c0e14] p-5 text-xs text-zinc-400 leading-relaxed">
            <span className="text-zinc-200 font-semibold block mb-1">System Scope Summary:</span>
            {project.summary}
          </div>
        </section>

        {/* 3. Actual Responsibilities & Ownership */}
        <section aria-labelledby="heading-responsibilities" className="py-10 border-b border-white/[0.08] space-y-4">
          <h2 id="heading-responsibilities" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <span>Role & Engineering Responsibilities</span>
          </h2>
          <p className="text-xs text-zinc-400">
            Specific engineering deliverables directly executed on this system:
          </p>
          <ul className="space-y-2.5">
            {project.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Technologies & Tools */}
        <section aria-labelledby="heading-technologies" className="py-10 border-b border-white/[0.08] space-y-4">
          <h2 id="heading-technologies" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Cpu className="h-5 w-5 text-cyan-400" />
            <span>Technologies & Stack Ecosystem</span>
          </h2>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/[0.08] bg-[#12151d] px-3 py-1.5 text-xs font-mono text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 5. System Architecture Highlights */}
        <section aria-labelledby="heading-architecture" className="py-10 border-b border-white/[0.08] space-y-4">
          <h2 id="heading-architecture" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Server className="h-5 w-5 text-amber-400" />
            <span>System Architecture Highlights</span>
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.architectureHighlights.map((arch, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-[#0c0f15] p-4 text-xs text-zinc-300"
              >
                <div className="font-mono text-emerald-400 mb-1 text-[11px]">
                  PATTERN 0{i + 1}
                </div>
                <div>{arch}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Technical Challenges & Architectural Solutions */}
        <section aria-labelledby="heading-challenges" className="py-10 border-b border-white/[0.08] space-y-6">
          <h2 id="heading-challenges" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-rose-400" />
            <span>Technical Challenges & Solutions</span>
          </h2>

          <div className="space-y-4">
            {project.challenges.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.08] bg-[#0d0f15] p-5 space-y-3"
              >
                <div className="flex items-start gap-2.5">
                  <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] text-rose-400 uppercase">
                    Challenge
                  </span>
                  <h3 className="text-sm font-medium text-white">{item.challenge}</h3>
                </div>
                <div className="flex items-start gap-2.5 border-t border-white/[0.06] pt-3">
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-400 uppercase">
                    Solution
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Measurable Outcomes & Quality Checks */}
        <section aria-labelledby="heading-outcomes" className="py-10 border-b border-white/[0.08] space-y-4">
          <h2 id="heading-outcomes" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span>Outcomes & Verification</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.metricsOrOutcomes.map((metric, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-zinc-200"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Footer Bar */}
        <footer className="pt-10 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All Case Studies</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-[#12151c] px-4 py-2 text-xs font-medium text-white hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </footer>
      </div>
    </article>
  );
}
