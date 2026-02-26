"use client";

import { motion } from "motion/react";

const LUMA_URL = "#";
const MEETUP_URL = "#";

export function Footer() {
  return (
    <footer className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-5xl sm:text-6xl md:text-7xl tracking-tight mb-6">
            Ready to ship
            <br />
            <span className="text-accent">for good?</span>
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto mb-10">
            Join us April 17–18 at 42 Barcelona. Whether you&apos;re a builder
            or a non-profit, there&apos;s a place for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </motion.div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted">
          <p>
            <span className="font-pixel text-foreground text-sm">
              Ship for Good
            </span>{" "}
            · Barcelona, 2025
          </p>
          <p>
            42 Barcelona · Telefónica Building
          </p>
        </div>
      </div>
    </footer>
  );
}
