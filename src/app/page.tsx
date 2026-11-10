import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
// import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      {/* <Experience /> */}
      {/* <div className="section-divider" /> */}
      <Projects />
      <div className="section-divider" />
      <Contact />
    </>
  );
}
