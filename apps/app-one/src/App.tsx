import "./app.scss";
import Home from "./pages/Home";
import { useSmoothScroll } from "@my-portfolio/hooks";

function App() {
  useSmoothScroll();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
