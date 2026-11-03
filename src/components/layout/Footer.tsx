"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Check, Copy, Terminal } from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kathmandu",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("ashishraiofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#07080a] text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Col 1: Identity & Status */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Select Senior Roles & High-Ticket Contracts</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Ashish Rai
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              Senior Frontend Engineer with 4+ years of production experience in Next.js, React, 
              cloud infrastructure on GCP, and mobile engineering with React Native. Exploring 
              postgraduate research in Cyber Security & DevSecOps.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#12151b] px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>ashishraiofficial@gmail.com</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
              <div className="font-mono text-xs text-zinc-500">
                NPT: {time ? `${time} (Kathmandu)` : "UTC+5:45"}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-emerald-400 transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-emerald-400 transition-colors">
                  Career Timeline (Tuppl / Aarawan)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About & DevSecOps Direction
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-emerald-400 transition-colors">
                  Interactive Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Verified Profiles */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-200">
              Profiles & Code
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/MythicPlayer1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub (@MythicPlayer1)</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ashish-rai-942a3b24b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn (ashish-rai)</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Direct Inquiry</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-[#0f1116] px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                    <Terminal className="h-3 w-3 text-emerald-400" />
                    <span>Next.js 16 • App Router</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-zinc-500 sm:flex-row">
          <div>
            © {new Date().getFullYear()} Ashish Rai. Built with precision, performance & defensive security.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-zinc-600">WCAG 2.2 AA Compliant</span>
            <span className="text-zinc-700">•</span>
            <span className="font-mono text-zinc-600">Zero CLS Target</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
