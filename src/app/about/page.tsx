import type { Metadata } from "next";
import Link from "next/link";
import {
  User, Shield, ArrowRight, Lock,
  Monitor, Smartphone, Database, Wifi, CreditCard,
  Cloud, Gauge, GitBranch,
  type LucideProps,
} from "lucide-react";
import { FadeInStagger } from "@/components/animations/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { ACADEMIC_PROFILE } from "@/data/experience";
import { SKILL_CATEGORIES } from "@/data/skills";
import { createBreadcrumbSchema } from "@/data/seo";

type IconComponent = React.FC<LucideProps>;

const CATEGORY_ICONS: Record<string, IconComponent> = {
  Monitor,
  Smartphone,
  Database,
  Wifi,
  CreditCard,
  Cloud,
  Gauge,
  GitBranch,
  Shield,
};

export const metadata: Metadata = {
  title: "About & DevSecOps Direction",
  description:
    "Learn about Ashish Rai's engineering background at Tuppl and Aarawan Tech, technical competencies across React/Next.js and GCP, and postgraduate research interests in Cyber Security.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Ashish Rai | Senior Frontend Developer & DevSecOps Aspirant",
    description:
      "Engineering biography, technical competencies, and academic direction of Ashish Rai.",
    url: "https://ashishrai.dev/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <div className="py-12 sm:py-20">
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <header className="max-w-2xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
            <User className="h-3.5 w-3.5" />
            <span>Biography & Engineering Direction</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Engineering Craft, Systems & Academic Focus
          </h1>
          <p className="text-base text-zinc-400">
            A Senior Frontend Engineer bridging high-fidelity user experiences with cloud-native
            reliability and defensive security engineering.
          </p>
        </header>

        {/* Narrative & Background */}
        <section aria-labelledby="heading-background" className="space-y-6 text-sm leading-relaxed text-zinc-300 border-b border-white/[0.08] pb-12">
          <h2 id="heading-background" className="text-xl font-bold tracking-tight text-white">
            Professional Background
          </h2>
          <p>
            Over the past 4+ years, I have engineered and shipped production web applications,
            interactive canvas engines, cross-platform mobile solutions, and cloud deployments.
            Currently at <strong className="text-white">Tuppl</strong>, I lead frontend development and cloud
            infrastructure provisioning on Google Cloud Platform, most notably for platforms like{" "}
            <strong className="text-emerald-400 font-medium">MyMealCrates</strong> and mobile applications
            like <strong className="text-cyan-400 font-medium">Snaparca</strong>.
          </p>
          <p>
            Prior to Tuppl, I developed my career at <strong className="text-white">Aarawan Tech (2022–2025)</strong>,
            progressing from Junior Developer to Mid-Level Developer, and stepping into Team Lead responsibilities.
            During this tenure, I guided architecture, mentored engineers, and engineered high-concurrency systems
            like the <strong className="text-white">DigiTicki</strong> interactive seat-reservation matrix and the{" "}
            <strong className="text-white">FasBas</strong> real-time WebSocket negotiation marketplace.
          </p>
        </section>

        {/* Academic Direction: Cyber Security & DevSecOps */}
        <section aria-labelledby="heading-cybersecurity" className="py-12 border-b border-white/[0.08] space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h2 id="heading-cybersecurity" className="text-xl font-bold tracking-tight text-white">
                Academic Direction & Research Interests
              </h2>
              <div className="text-xs font-mono text-emerald-400">
                Postgraduate Aspirations in Cyber Security
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0c0e14] p-5 flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-2xl">
              🎓
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-0.5">Education</div>
              <div className="text-sm font-bold text-white">{ACADEMIC_PROFILE.education.degree}</div>
              <div className="text-xs text-zinc-400 font-mono">{ACADEMIC_PROFILE.education.status}</div>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-zinc-300">
            {ACADEMIC_PROFILE.narrative}
          </p>

          <div className="rounded-2xl border border-emerald-500/20 bg-[#0b0e14] p-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Key Academic Research Areas
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ACADEMIC_PROFILE.focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-[#121620] p-3 text-xs text-zinc-300"
                >
                  <Lock className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categorized Skills Matrix */}
        <section aria-labelledby="heading-skills-matrix" className="py-12 border-b border-white/[0.08] space-y-8">
          <div>
            <h2 id="heading-skills-matrix" className="text-xl font-bold tracking-tight text-white">
              Technical Competencies Matrix
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Categorized proficiency across frontend systems, cloud, mobile, and security lifecycles.
            </p>
          </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {SKILL_CATEGORIES.map((category, idx) => {
                            const IconComp = CATEGORY_ICONS[category.icon] ?? Monitor;
                            return (
                              <FadeInStagger key={idx} delay={idx * 0.05}>
                                <div className="rounded-xl border border-white/[0.08] bg-[#0c0e14] p-5 space-y-3 h-full flex flex-col">
                                  {/* Card header */}
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                        <IconComp className="h-4 w-4" />
                                      </div>
                                      <h3 className="text-sm font-bold text-white leading-snug">{category.title}</h3>
                                    </div>
                                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider shrink-0 ml-2">
                                      {category.skills.length}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-zinc-500 leading-relaxed">{category.description}</p>
                                  <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
                                    {category.skills.map((skill, sIdx) => (
                                      <span
                                        key={sIdx}
                                        className={`rounded-md border px-2 py-0.5 text-[11px] font-mono ${skill.highlight
                                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-semibold"
                                            : "border-white/[0.06] bg-[#131620] text-zinc-400"
                                          }`}
                                      >
                                        {skill.name}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                      </FadeInStagger>
                    );
            })}
                  </div>
                </section>

                {/* Closing Contact CTA */}
                <footer className="pt-12 text-center space-y-4">
                  <h2 className="text-lg font-bold text-white">
                    Interested in discussing an engineering role or research opportunity?
                  </h2>
                  <div className="flex justify-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-black"
                    >
                      <span>Get In Touch</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </footer>
              </div>
    </div>
          );
}
