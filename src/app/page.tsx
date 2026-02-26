import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { InfoBar } from "@/components/info-bar";
import { HowItWorks } from "@/components/how-it-works";
import { Schedule } from "@/components/schedule";
import { FAQ } from "@/components/faq";
import { Sponsors } from "@/components/sponsors";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoBar />
        <HowItWorks />
        <Schedule />
        <FAQ />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
