"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<"terminal" | "architecture">("terminal");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative rounded-2xl border border-white/[0.12] bg-[#0c0e14]/90 p-5 shadow-2xl shadow-emerald-500/5 backdrop-blur-xl"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-zinc-400">
            ashish@tuppl-workstation:~
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#141720] p-0.5 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === "terminal"
                ? "bg-emerald-500/20 text-emerald-300"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            status.sh
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === "architecture"
                ? "bg-emerald-500/20 text-emerald-300"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            stack.env
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="mt-4 font-mono text-xs leading-relaxed">
        {activeTab === "terminal" ? (
          <div className="space-y-2.5 text-zinc-300">
            <div className="text-zinc-400">
              <span className="text-emerald-400">$</span> tuppl --active-projects
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-[#12151d] p-2.5 text-[11px]">
              <div className="flex items-center justify-between text-emerald-400">
                <span>[1] MyMealCrates (Next.js / Web)</span>
                <span className="rounded bg-emerald-500/20 px-1 text-[10px]">PRODUCTION</span>
              </div>
              <p className="mt-1 text-zinc-400">
                Next.js, Geolocation filtering, Stripe payments, GCP infrastructure.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-[#12151d] p-2.5 text-[11px]">
              <div className="flex items-center justify-between text-cyan-400">
                <span>[2] Snaparca (React Native / Mobile)</span>
                <span className="rounded bg-cyan-500/20 px-1 text-[10px]">STORE PREP</span>
              </div>
              <p className="mt-1 text-zinc-400">
                React Native, Expo EAS builds, cross-platform interfaces.
              </p>
            </div>
            <div className="pt-2 text-zinc-400">
              <span className="text-emerald-400">$</span> academic --future-direction
            </div>
            <div className="text-[11px] text-zinc-300">
              &gt; Postgraduate Cyber Security | DevSecOps & Defensive Architecture
            </div>
          </div>
        ) : (
          <div className="space-y-2 text-zinc-300 text-[11px]">
            <div className="text-zinc-400">// Primary Engineering Stack</div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-400">FRAMEWORK</span>
              <span className="text-emerald-400 font-semibold">Next.js 16 / React 19</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-400">LANGUAGE</span>
              <span className="text-emerald-400">TypeScript (Strict)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-400">MOBILE</span>
              <span className="text-cyan-400">React Native / Expo EAS</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-400">CLOUD</span>
              <span className="text-amber-400">GCP (Cloud Run, Build, Storage)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-400">PAYMENTS</span>
              <span className="text-emerald-300">Stripe & eSewa Gateway</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-400">APP-SEC FOCUS</span>
              <span className="text-rose-400">OWASP, CSP, DevSecOps</span>
            </div>
          </div>
        )}
      </div>

      {/* Terminal status bar */}
      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[11px] font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>SYSTEMS: ONLINE</span>
        </div>
        <span>LATENCY: 12ms</span>
      </div>
    </motion.div>
  );
}
