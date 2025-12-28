import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contributions from "./components/Contributions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contributions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

