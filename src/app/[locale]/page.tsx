import { CivioSection } from "@/components/civio-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { InfoBar } from "@/components/info-bar";
import { Navbar } from "@/components/navbar";
import { Schedule } from "@/components/schedule";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoBar />
        <HowItWorks />
        <Schedule />
        <CivioSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
