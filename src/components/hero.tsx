"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

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

const REGISTER_URL = "#"; // TODO: replace with registration URL when available

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="text-sm tracking-widest text-accent font-medium">
            {t("tagline")}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8 max-w-3xl mx-auto"
        >
          {t("headline")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-6"
        >
          {t("subheadline")}
        </motion.p>

        <motion.div variants={fadeUp} className="mb-10">
          <span className="text-xs uppercase tracking-widest text-foreground-muted">
            {t("tags")}
          </span>
        </motion.div>

        <motion.div variants={fadeUp}>
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            {t("cta")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
