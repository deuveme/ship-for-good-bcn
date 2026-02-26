"use client";

import { motion } from "motion/react";

const SPONSOR_EMAIL = "mailto:hello@shipforgood.dev";

export function Sponsors() {
  return (
    <section className="py-24 sm:py-32 bg-background-alt">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            Partners
          </p>
          <h2 className="font-pixel text-4xl sm:text-5xl tracking-tight mb-6">
            Backed by people who care
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto mb-16">
            We&apos;re looking for sponsors and partners who want to support
            non-profits and the builder community in Barcelona.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-24 border border-dashed border-border rounded-xl flex items-center justify-center text-sm text-foreground-muted"
            >
              Your logo here
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={SPONSOR_EMAIL}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Interested in sponsoring?
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
