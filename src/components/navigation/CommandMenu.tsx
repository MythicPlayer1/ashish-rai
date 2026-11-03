"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Briefcase,
  User,
  Mail,
  Home,
  ExternalLink,
  Copy,
  Check,
  Code2,
  X,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  icon: ReactNode;
  action: () => void;
  shortcut?: string;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const copyEmail = () => {
    navigator.clipboard.writeText("ashishraiofficial@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  const navItems: CommandItem[] = [
    {
      id: "nav-home",
      label: "Home / Overview",
      category: "Navigation",
      icon: <Home className="h-4 w-4" />,
      action: () => {
        router.push("/");
        setOpen(false);
      },
    },
    {
      id: "nav-projects",
      label: "Projects & Case Studies",
      category: "Navigation",
      icon: <Code2 className="h-4 w-4" />,
      action: () => {
        router.push("/projects");
        setOpen(false);
      },
    },
    {
      id: "nav-experience",
      label: "Career Progression (Tuppl & Aarawan Tech)",
      category: "Navigation",
      icon: <Briefcase className="h-4 w-4" />,
      action: () => {
        router.push("/experience");
        setOpen(false);
      },
    },
    {
      id: "nav-about",
      label: "About & Cyber Security Academic Direction",
      category: "Navigation",
      icon: <User className="h-4 w-4" />,
      action: () => {
        router.push("/about");
        setOpen(false);
      },
    },
    {
      id: "nav-resume",
      label: "Interactive Resume / CV",
      category: "Navigation",
      icon: <FileText className="h-4 w-4" />,
      action: () => {
        router.push("/resume");
        setOpen(false);
      },
    },
    {
      id: "nav-contact",
      label: "Get in Touch / Contact Form",
      category: "Navigation",
      icon: <Mail className="h-4 w-4" />,
      action: () => {
        router.push("/contact");
        setOpen(false);
      },
    },
    {
      id: "action-copy-email",
      label: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
      category: "Actions",
      icon: copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />,
      action: copyEmail,
    },
    {
      id: "action-resume-pdf",
      label: "Open / Print Resume Document",
      category: "Actions",
      icon: <ExternalLink className="h-4 w-4" />,
      action: () => {
        router.push("/resume");
        setOpen(false);
      },
    },
  ];

  const projectItems: CommandItem[] = PROJECTS.map((p) => ({
    id: `project-${p.slug}`,
    label: `${p.title} — ${p.tagline}`,
    category: "Projects",
    icon: <Code2 className="h-4 w-4 text-emerald-400" />,
    action: () => {
      router.push(`/projects/${p.slug}`);
      setOpen(false);
    },
  }));

  const allItems = [...navItems, ...projectItems];
  const filteredItems = query
    ? allItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : allItems;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#12151b]/80 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-emerald-500/40 hover:text-white"
        aria-label="Open command palette"
      >
        <Search className="h-3.5 w-3.5 text-emerald-400" />
        <span className="hidden sm:inline">Search & Navigate</span>
        <kbd className="rounded border border-white/[0.1] bg-[#1a1e27] px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0d0f14] shadow-2xl shadow-emerald-500/10"
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3.5">
                <Search className="h-4 w-4 text-emerald-400 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or jump to page/project..."
                  className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded p-1 text-zinc-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-[360px] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="py-8 text-center text-xs text-zinc-500">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-zinc-300 transition-colors hover:bg-emerald-500/10 hover:text-white group"
                    >
                      <div className="flex items-center gap-3 truncate">
                        <span className="text-zinc-400 group-hover:text-emerald-400">
                          {item.icon}
                        </span>
                        <span className="truncate">{item.label}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 shrink-0 ml-2">
                        {item.category}
                      </span>
                    </button>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#090b0e] px-4 py-2 text-[11px] text-zinc-500">
                <div className="flex items-center gap-3">
                  <span>Navigation: Click or Enter</span>
                  <span>Close: Esc</span>
                </div>
                <div className="text-emerald-400 font-mono text-[10px]">Ashish Rai • Portfolio</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
