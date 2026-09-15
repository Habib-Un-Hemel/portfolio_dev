import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Highlights from "./components/Highlights";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <Hero />
        <Skills />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="highlights" className="scroll-mt-24 py-12">
        <Highlights />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
    </>
  );
}
