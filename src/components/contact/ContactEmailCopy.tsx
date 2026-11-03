"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function ContactEmailCopy() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ashishraiofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-mono text-zinc-400 uppercase">Direct Email</span>
      <button
        onClick={copyEmail}
        className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300"
        aria-label="Copy email address to clipboard"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span>Copy Address</span>
          </>
        )}
      </button>
    </div>
  );
}
