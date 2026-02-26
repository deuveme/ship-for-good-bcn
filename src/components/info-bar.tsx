"use client";

import { motion } from "motion/react";

const items = [
  { label: "When", value: "April 17–18, 2025" },
  { label: "Where", value: "42 Barcelona, Telefónica Building" },
  { label: "Format", value: "1 evening intro + 1 full build day" },
];

export function InfoBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-border rounded-2xl divide-y sm:divide-y-0 sm:divide-x divide-border">
        {items.map((item) => (
          <div key={item.label} className="px-8 py-6 text-center">
            <p className="text-xs uppercase tracking-widest text-foreground-muted mb-2">
              {item.label}
            </p>
            <p className="text-sm font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
