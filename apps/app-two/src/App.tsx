import Hero from "@features/Hero";
import "./globals.css";
import About from "@features/About";
import Contact from "@features/Contact";
import ContinuousLearning from "@features/ContinuousLearning";
import Experience from "@features/Experience";
import Projects from "@features/Projects";
import { useSmoothScroll } from "@my-portfolio/hooks";
import NavBar from "@layouts/NavBar";
import { useRef } from "react";

function App() {
  useSmoothScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const continuousLearningRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      ref: heroRef,
      title: "Hero",
      id: "hero"
    },
    {
      ref: aboutRef,
      title: "About",
      id: "about"
    },
    {
      ref: experienceRef,
      title: "Experience",
      id: "experience"
    },
    {
      ref: projectsRef,
      title: "Projects",
      id: "projects"
    },
    {
      ref: continuousLearningRef,
      title: "Continuous Learning",
      id: "continuous-learning"
    },
    {
      ref: contactRef,
      title: "Contact",
      id: "contact"
    },
  ];

  return (
    <div>
      <NavBar data={data} />
      <section id="hero" ref={heroRef}>
        <Hero />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="experience" ref={experienceRef}>
        <Experience />
      </section>
      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>
      <section id="continuous-learning" ref={continuousLearningRef}>
        <ContinuousLearning />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
