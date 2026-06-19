import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navigation } from "@/components/Navigation";
import { Portfolio } from "@/components/Portfolio";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.015]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Journey />
        <SectionDivider />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
