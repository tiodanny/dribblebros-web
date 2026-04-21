import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Brands from "@/components/Brands";
import Work from "@/components/Work";
import CanchaViva from "@/components/CanchaViva";
import Community from "@/components/Community";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Brands />
        <Work />
        <CanchaViva />
        <Community />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
