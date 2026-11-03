import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Globe, Phone } from "lucide-react";
import { PrintResumeButton } from "@/components/resume/PrintResumeButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { EXPERIENCES, ACADEMIC_PROFILE } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { createBreadcrumbSchema } from "@/data/seo";

export const metadata: Metadata = {
  title: "Resume & Curriculum Vitae",
  description:
    "Interactive and printable resume of Ashish Rai — Senior Frontend Engineer at Tuppl. Expertise in Next.js, React, React Native, GCP cloud infrastructure, and DevSecOps research.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume & Curriculum Vitae | Ashish Rai",
    description:
      "Interactive and printable resume of Ashish Rai — Senior Frontend Engineer at Tuppl.",
    url: "https://ashishrai.dev/resume",
  },
};

export default function ResumePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resume", url: "/resume" },
  ]);

  return (
    <div className="py-10 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Controls bar (hidden in print) */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <PrintResumeButton />
          </div>
        </div>

        {/* Resume Paper Container */}
        <article className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-8 sm:p-12 shadow-2xl print:border-none print:bg-white print:p-0 print:text-black print:shadow-none">
          {/* Header */}
          <header className="border-b border-white/[0.08] pb-8 print:border-zinc-300">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-baseline">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white print:text-black sm:text-4xl">
                  Ashish Rai
                </h1>
                <p className="mt-1 text-base font-medium text-emerald-400 print:text-emerald-700">
                  Senior Frontend Engineer & Systems Architect
                </p>
              </div>

              <div className="flex flex-col text-xs font-mono text-zinc-400 print:text-zinc-600 space-y-1 sm:text-right">
                <span className="flex items-center gap-1 sm:justify-end">
                  <MapPin className="h-3 w-3" /> Kathmandu, Nepal
                </span>
                <span className="flex items-center gap-1 sm:justify-end">
                  <Mail className="h-3 w-3" /> ashishraiofficial@gmail.com
                </span>
                <a
                  href="tel:+9779869812171"
                  className="flex items-center gap-1 sm:justify-end hover:text-emerald-400 transition-colors"
                >
                  <Phone className="h-3 w-3" /> +977 9869812171
                </a>
                <a
                  href="https://github.com/MythicPlayer1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:justify-end hover:text-emerald-400 transition-colors"
                >
                  <Globe className="h-3 w-3" /> github.com/MythicPlayer1
                </a>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-zinc-300 print:text-zinc-800">
              Senior Frontend Engineer with 4+ years of production experience scaling web applications, 
              cloud architectures on Google Cloud Platform, and cross-platform mobile apps. Proven track record 
              progressing from Junior Developer to Team Lead at Aarawan Tech, and driving cloud and payments 
              infrastructure at Tuppl. Pursuing postgraduate research in Cyber Security & DevSecOps.
            </p>
          </header>

          {/* Technical Skills */}
          <section aria-labelledby="resume-skills" className="py-6 border-b border-white/[0.08] print:border-zinc-300">
            <h2 id="resume-skills" className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-white print:text-black">Frontend Development: </span>
                <span className="text-zinc-400 print:text-zinc-700">
                  React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS.
                </span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">Mobile Development: </span>
                <span className="text-zinc-400 print:text-zinc-700">
                  React Native, Expo, Cross-platform Application Development.
                </span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">State Management &amp; Data Fetching: </span>
                <span className="text-zinc-400 print:text-zinc-700">
                  Zustand, TanStack Query, Redux, Axios.
                </span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">API &amp; Real-Time Systems: </span>
                <span className="text-zinc-400 print:text-zinc-700">
                  REST API Integration, WebSockets, Authentication, Token Refresh, Error Handling, API Caching.
                </span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">Payments &amp; Integrations: </span>
                <span className="text-zinc-400 print:text-zinc-700">
                  Stripe, eSewa, Google Maps API, Location-Based Services.
                </span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">Cloud &amp; Deployment: </span>
                <span className="text-zinc-400 print:text-zinc-700">
                  Google Cloud Platform (GCP), Vercel, CI/CD Pipelines, Environment Configuration.
                </span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">Performance &amp; Optimization: </span>
                <span className="text-zinc-400 print:text-zinc-700">
                  Core Web Vitals, SSR, Lazy Loading, Code Splitting, Bundle Optimization, Caching Strategies.
                </span>
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">Security Fundamentals: </span>
                <span className="text-zinc-400 print:text-zinc-700">
                  Input Validation, XSS/CSRF Prevention, Secure Token Handling, Authentication &amp; Authorization.
                </span>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section aria-labelledby="resume-experience" className="py-6 border-b border-white/[0.08] print:border-zinc-300">
            <h2 id="resume-experience" className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-4">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <div>
                      <h3 className="font-bold text-white print:text-black text-sm inline">{exp.role}</h3>
                      <span className="text-zinc-400 print:text-zinc-600"> — {exp.company} ({exp.location})</span>
                    </div>
                    <span className="font-mono text-zinc-400 print:text-zinc-600">{exp.period}</span>
                  </div>

                  <p className="text-xs text-zinc-300 print:text-zinc-800">{exp.summary}</p>

                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400 print:text-zinc-700 pl-1">
                    {exp.highlights.slice(0, 3).map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section aria-labelledby="resume-projects" className="py-6 border-b border-white/[0.08] print:border-zinc-300">
            <h2 id="resume-projects" className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-4">
              Featured Systems & Case Studies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.slug} className="rounded-lg border border-white/[0.04] print:border-zinc-200 p-3">
                  <h3 className="font-bold text-white print:text-black">{p.title}</h3>
                  <div className="text-[11px] text-emerald-400 print:text-emerald-800 font-mono">{p.companyOrContext} • {p.role}</div>
                  <p className="mt-1 text-zinc-400 print:text-zinc-700 text-[11px] leading-relaxed line-clamp-2">
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section aria-labelledby="resume-education" className="py-6 border-b border-white/[0.08] print:border-zinc-300">
            <h2 id="resume-education" className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-3">
              Education
            </h2>
            <div className="text-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-white print:text-black text-sm">{ACADEMIC_PROFILE.education.degree}</span>
                </div>
                <span className="font-mono text-zinc-400 print:text-zinc-600">{ACADEMIC_PROFILE.education.status}</span>
              </div>
            </div>
          </section>

          {/* Academic & Future Research Direction */}
          <footer className="pt-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-2">
              Academic Direction
            </h2>
            <div className="text-xs text-zinc-300 print:text-zinc-800">
              <span className="font-semibold text-white print:text-black">
                {ACADEMIC_PROFILE.currentInterest}
              </span>
              <p className="mt-1 text-zinc-400 print:text-zinc-700">
                Research interests focused on DevSecOps pipelines, automated vulnerability mitigation, 
                zero-trust frontend systems, and defensive software architectures.
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
