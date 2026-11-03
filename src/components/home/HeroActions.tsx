"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Copy } from "lucide-react";
import { Magnetic } from "@/components/animations/MagneticButton";

export function HeroActions() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ashishraiofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <Magnetic>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Explore Case Studies</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Magnetic>

      <Magnetic>
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#12151c] px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-500/40 hover:text-white"
        >
          <span>View Resume</span>
          <ArrowUpRight className="h-4 w-4 text-zinc-400" />
        </Link>
      </Magnetic>

      <button
        onClick={copyEmail}
        className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#0d0f14] px-4 py-3 text-sm text-zinc-400 transition-colors hover:border-emerald-500/30 hover:text-white"
        title="Copy email to clipboard"
        aria-label="Copy email address"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 font-mono text-xs">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            <span className="font-mono text-xs">Copy Email</span>
          </>
        )}
      </button>
    </div>
  );
}
