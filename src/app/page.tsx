import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Brands from "@/components/Brands";
import Work from "@/components/Work";
import CanchaViva from "@/components/CanchaViva";
import Community from "@/components/Community";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Brands />
      <Work />
      <CanchaViva />
      <Community />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
