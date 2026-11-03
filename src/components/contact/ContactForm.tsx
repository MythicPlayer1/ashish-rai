"use client";

import { useActionState, useEffect, useState } from "react";
import { Check, Send } from "lucide-react";
import { submitContactForm } from "@/lib/actions/contact";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);
  const [renderedAt, setRenderedAt] = useState<number>(0);

  useEffect(() => {
    setRenderedAt(Date.now());
  }, []);

  if (state?.success) {
    return (
      <div className="py-12 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-white">Message Transmitted</h3>
        <p className="max-w-md mx-auto text-xs text-zinc-300">
          {state.message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex rounded-lg border border-white/[0.1] bg-[#141822] px-4 py-2 text-xs font-medium text-white hover:border-emerald-500/40"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" aria-label="Contact Ashish Rai">
      {/* Honeypot field (hidden from legitimate users) */}
      <input
        type="text"
        name="bot_trap_field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none -z-10 h-0 w-0"
      />

      {/* Form rendered timestamp for anti-bot validation */}
      <input
        type="hidden"
        name="form_rendered_at"
        value={renderedAt}
      />

      {state?.message && !state.success && (
        <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300" role="alert">
          {state.message}
        </div>
      )}

      {/* Name */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
        >
          Your Name <span className="text-emerald-400" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g. Jane Doe"
          className="w-full rounded-xl border border-white/[0.08] bg-[#12151c] px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-emerald-500/50 focus:outline-none"
        />
        {state?.errors?.name && (
          <p className="text-[11px] text-rose-400">{state.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
        >
          Your Email <span className="text-emerald-400" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          className="w-full rounded-xl border border-white/[0.08] bg-[#12151c] px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-emerald-500/50 focus:outline-none"
        />
        {state?.errors?.email && (
          <p className="text-[11px] text-rose-400">{state.errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label
          htmlFor="subject"
          className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
        >
          Inquiry Topic
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="e.g. Senior Frontend Role / Consulting / Academic Inquiries"
          className="w-full rounded-xl border border-white/[0.08] bg-[#12151c] px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-emerald-500/50 focus:outline-none"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
        >
          Project Details or Message <span className="text-emerald-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your team, product objectives, timeline, or engineering challenges..."
          className="w-full rounded-xl border border-white/[0.08] bg-[#12151c] px-4 py-3 text-sm text-white placeholder-zinc-400 focus:border-emerald-500/50 focus:outline-none resize-none"
        />
        {state?.errors?.message && (
          <p className="text-[11px] text-rose-400">{state.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-semibold text-black transition-all hover:bg-emerald-400 active:scale-[0.99] disabled:opacity-50"
      >
        {isPending ? (
          <span>Encrypting & Sending...</span>
        ) : (
          <>
            <span>Transmit Message</span>
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
