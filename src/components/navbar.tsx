"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Locale } from "@/i18n/routing";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

const REGISTER_URL = "#"; // TODO: replace with registration URL when available

const locales: Locale[] = ["es", "ca", "en"];

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt={t("logo_alt")}
            height={36}
            style={{ height: "36px", width: "auto" }}
          />
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="#schedule"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors hidden sm:block"
          >
            {t("schedule")}
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors hidden sm:block"
          >
            {t("howItWorks")}
          </a>
          <a
            href="#faq"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors hidden sm:block"
          >
            {t("faq")}
          </a>

          <div className="flex items-center rounded-full border border-border p-1">
            {locales.map((switchLocale) => {
              const isActive = locale === switchLocale;

              return (
                <Link
                  key={switchLocale}
                  href={pathname}
                  locale={switchLocale}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-white"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {t(`language.${switchLocale}`)}
                </Link>
              );
            })}
          </div>

          <a
            href={REGISTER_URL}
            className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-full hover:bg-accent-hover transition-colors"
          >
            {t("register")}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
