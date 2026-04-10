"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function CivioSection() {
  const t = useTranslations("CivioSection");

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0">
            <img
              src="/civio-logo.svg"
              alt={t("logo_alt")}
              width={160}
              height={36}
              style={{ width: "160px", height: "auto", filter: "invert(1)" }}
            />
          </div>

          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              {t("title")}
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              {t("description")}
            </p>
            <blockquote className="border-l-2 border-accent pl-4 text-sm font-medium">
              {t("quote")}
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
