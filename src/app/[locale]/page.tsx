import { CodeOfConduct } from "@/components/code-of-conduct";
import { MotionProvider } from "@/components/motion-provider";
import { PartnershipsSection } from "@/components/partnerships-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { InfoBar } from "@/components/info-bar";
import { Navbar } from "@/components/navbar";
import { Schedule } from "@/components/schedule";

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <InfoBar />
        <Schedule />
        <HowItWorks />
        <PartnershipsSection />
        <FAQ />
        <CodeOfConduct />
      </main>
      <Footer />
    </MotionProvider>
  );
}
