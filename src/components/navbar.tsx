"use client";

import { motion } from "motion/react";

const LUMA_URL = "#";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-pixel text-xl tracking-tight">
          Ship for Good
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#schedule"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors hidden sm:block"
          >
            Schedule
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors hidden sm:block"
          >
            How it works
          </a>
          <a
            href="#faq"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors hidden sm:block"
          >
            FAQ
          </a>
          <a
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-full hover:bg-accent-hover transition-colors"
          >
            Register
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
