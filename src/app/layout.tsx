import type { Metadata } from "next";
import { serif, pixel } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ship for Good — Hackathon for Non-Profits | Barcelona",
  description:
    "A two-day hackathon in Barcelona where builders help non-profits turn their ideas into working solutions. April 17–18, 2025 at 42 Barcelona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${pixel.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
