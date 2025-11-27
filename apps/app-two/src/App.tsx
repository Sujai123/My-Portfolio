import Hero from "@features/Hero";
import "./globals.css";
import About from "@features/About";
import Contact from "@features/Contact";
import ContinuousLearning from "@features/ContinuousLearning";
import Experience from "@features/Experience";
import Projects from "@features/Projects";
import { useSmoothScroll } from "@my-portfolio/hooks";
import NavBar from "@layouts/NavBar";

// test commit
function App() {
  useSmoothScroll();

  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ContinuousLearning />
      <Contact />
    </div>
  );
}

export default App;
