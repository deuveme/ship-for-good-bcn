"use client";

import { asset } from "@/lib/asset";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function PartnershipsSection() {
  const t = useTranslations("CivioSection");

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-pixel text-4xl sm:text-5xl tracking-tight">
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://civio.es/" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/civio-logo.svg")}
                alt={t("civio_alt")}
                width={160}
                height={36}
                style={{ width: "160px", height: "auto" }}
              />
            </a>
          </div>

          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://civio.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("civio_title")}
              </a>
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              {t.rich("civio_description", {
                civio: (chunks) => (
                  <a href="https://civio.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <blockquote className="border-l-2 border-accent pl-4 text-sm font-medium">
              "{t("quote")}"
            </blockquote>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center gap-12 border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://www.42barcelona.com/es/" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/42barcelona-full-logo.svg")}
                alt="42Barcelona"
                style={{ width: "150px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://www.42barcelona.com/es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("venue_title")}
              </a>
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              {t("venue_description")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12 border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://softwarecrafters.barcelona/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sbcn-logo.svg"
                alt="Software Crafters BCN"
                style={{ width: "120px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://softwarecrafters.barcelona/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("supporter_title")}
              </a>
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              {t("supporter_description")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
