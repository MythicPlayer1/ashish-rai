import type { Metadata } from "next";
import { Mail, ShieldCheck, MapPin, Clock, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactEmailCopy } from "@/components/contact/ContactEmailCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/data/seo";

export const metadata: Metadata = {
  title: "Contact & Consultation Inquiries",
  description:
    "Direct contact channel for Ashish Rai — Senior Frontend Developer at Tuppl. Available for high-impact engineering leadership roles, Next.js/GCP consulting, and academic inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Consultation Inquiries | Ashish Rai",
    description:
      "Initiate conversation with Ashish Rai for Senior Frontend roles, cloud architecture consulting, or academic collaboration.",
    url: "https://ashishrai.dev/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <div className="py-12 sm:py-20">
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Info & Availability */}
          <header className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
              <Mail className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let&apos;s discuss engineering.
            </h1>

            <p className="text-sm leading-relaxed text-zinc-300">
              Whether you are looking for a Senior Frontend Engineer to build production 
              Next.js systems, seeking high-ticket consulting on cloud/payments architectures, 
              or discussing postgraduate research in Cyber Security.
            </p>

            {/* Direct contact card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-6 space-y-4">
              <ContactEmailCopy />
              <div className="text-base font-semibold text-white select-all">
                ashishraiofficial@gmail.com
              </div>

              <div className="border-t border-white/[0.06] pt-4 space-y-2.5 text-xs text-zinc-400">
                <a
                  href="tel:+9779869812171"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="font-mono text-zinc-200">+977 9869812171</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Kathmandu, Nepal (Open to Remote Globally)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Timezone: UTC+5:45 (Nepal Standard Time)</span>
                </div>
              </div>
            </div>

            {/* DevSecOps defense notice */}
            <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-zinc-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Protected with rate-limiting, honeypots, and input sanitization to ensure spam-free, secure communication.
              </span>
            </div>
          </header>

          {/* Right Column: Interactive Secure Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.1] bg-[#0d0f15] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
