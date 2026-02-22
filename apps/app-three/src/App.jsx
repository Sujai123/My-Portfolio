import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contributions from "./components/Contributions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scene from "./components/Scene";
import { useSmoothScroll } from "@my-portfolio/hooks";

function App() {
  useSmoothScroll();
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>
      <div className="relative z-10 font-sans">
        <Header />
        <main className="container mx-auto px-4 md:px-8">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contributions />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

