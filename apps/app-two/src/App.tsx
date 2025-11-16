import Hero from "@features/Hero";
import "./globals.css";
import { useSmoothScroll } from "@my-portfolio/hooks";
import About from "@features/About";
import Experience from "@features/Experience";
import Projects from "@features/Projects";
import ContinuousLearning from "@features/ContinuousLearning";
import Contact from "@features/Contact";

function App() {
  useSmoothScroll();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ContinuousLearning />
      <Contact />
    </>
  )
}

export default App;
