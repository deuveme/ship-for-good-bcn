"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const REGISTER_URL = "#"; // TODO: replace with registration URL when available

export function Footer() {
  const t = useTranslations("Footer");

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
          <p className="text-xs uppercase tracking-widest text-accent mb-6">
            {t("tagline")}
          </p>
          <p className="font-pixel text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">
            {t("closing")}
          </p>

          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            {t("register_cta")}
          </a>
        </motion.div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted">
          <p>
            <span className="font-pixel text-foreground text-sm">Ship For Good</span>{" "}
            · Barcelona, {t("year")}
          </p>
          <p>{t("venue")}</p>
        </div>
      </div>
    </footer>
  );
}
