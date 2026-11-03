import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeInStagger } from "@/components/animations/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { EXPERIENCES } from "@/data/experience";
import { createBreadcrumbSchema } from "@/data/seo";

export const metadata: Metadata = {
  title: "Professional Experience & Career Progression",
  description:
    "Review Ashish Rai's engineering trajectory: from Junior Developer to Team Lead at Aarawan Tech (2022-2025), and currently scaling frontend & cloud architectures at Tuppl.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Professional Experience & Career Progression | Ashish Rai",
    description:
      "Career history of Ashish Rai: Frontend Engineer at Tuppl, former Team Lead and Senior React Developer at Aarawan Tech.",
    url: "https://ashishrai.dev/experience",
  },
};

export default function ExperiencePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Experience", url: "/experience" },
  ]);

  return (
    <div className="py-12 sm:py-20">
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <header className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Professional Career History</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Career Timeline & Progression
          </h1>
          <p className="text-base text-zinc-400">
            A continuous progression of technical ownership, moving from modular UI component 
            development to leading teams at Aarawan Tech and architecting cloud-native 
            Next.js platforms at Tuppl.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative border-l border-white/[0.1] pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <FadeInStagger key={index} delay={index * 0.1}>
              <div className="relative group">
                {/* Timeline node */}
                <span
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 rounded-full border-2 bg-[#08090b] ${
                    exp.current
                      ? "border-emerald-400 ring-4 ring-emerald-500/20"
                      : "border-zinc-500 group-hover:border-emerald-400"
                  }`}
                />

                {/* Card Container */}
                <article className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-6 sm:p-8 space-y-4 hover:border-emerald-500/30 transition-colors">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                        {exp.current && (
                          <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                            CURRENT
                          </span>
                        )}
                        <span className="rounded-md border border-white/[0.08] bg-[#141822] px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-emerald-400 mt-1">
                        {exp.company}{" "}
                        <span className="text-zinc-600">•</span>{" "}
                        <span className="text-zinc-400">{exp.location}</span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-zinc-400 shrink-0">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-300">
                    {exp.summary}
                  </p>

                  {/* Accomplishments */}
                  <div className="space-y-2 border-t border-white/[0.06] pt-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Key Responsibilities & Deliverables
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-white/[0.06] bg-[#12151e] px-2.5 py-0.5 text-[11px] font-mono text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </FadeInStagger>
          ))}
        </div>

        {/* Bottom CTA */}
        <section aria-label="Explore more" className="mt-16 rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-8 text-center space-y-4">
          <h2 className="text-lg font-bold text-white">
            Looking for comprehensive documentation of my work?
          </h2>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Review detailed case study write-ups or view an executive summary in my interactive resume.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-black"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-[#12151b] px-4 py-2 text-xs font-medium text-white hover:border-emerald-500/40"
            >
              <span>Interactive Resume</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
