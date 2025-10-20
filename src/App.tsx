import './globals.css';
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
