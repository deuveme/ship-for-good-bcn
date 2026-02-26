"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
} as const;

const LUMA_URL = "#";
const MEETUP_URL = "#";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground-muted border border-border rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            April 17–18, 2025 · Barcelona
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-pixel text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] mb-8"
        >
          Ship for{" "}
          <span className="relative inline-block">
            Good
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M2 8C30 3 70 2 100 5C130 8 170 4 198 6"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A hackathon where builders help non-profits turn their ideas into
          working solutions. Two days of real collaboration at{" "}
          <span className="text-foreground">42 Barcelona</span>.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Register on Luma
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={MEETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-background-alt transition-colors"
          >
            Join on Meetup
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
