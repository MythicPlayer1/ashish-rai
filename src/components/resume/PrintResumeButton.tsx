"use client";

import { Printer } from "lucide-react";

export function PrintResumeButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
      aria-label="Print or save resume as PDF"
    >
      <Printer className="h-3.5 w-3.5" />
      <span>Print / Save as PDF</span>
    </button>
  );
}
