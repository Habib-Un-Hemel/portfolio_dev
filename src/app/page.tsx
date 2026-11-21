import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Writing from "./components/Writing";
import ContactSection from "./components/Contact";
import Marquee from "./components/Marquee";
import Publications from "./components/Publications";

export default function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <Marquee />

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="publications" className="scroll-mt-24">
        <Publications />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="highlights" className="scroll-mt-24 py-12">
        <Highlights />
      </section>

      <section id="writing" className="scroll-mt-24">
        <Writing />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
    </>
  );
}
