import Hero from "@features/Hero";
import "./globals.css";
import { useSmoothScroll } from "@my-portfolio/hooks";
import About from "@features/About";

function App() {
  useSmoothScroll();

  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default App;
