import "./app.scss";
import Home from "./pages/Home";

import useSmoothScroll from "./hooks/useSmoothScroll";
import useInitChartJS from "./hooks/useInitChartJS";

function App() {
  useSmoothScroll();
  useInitChartJS();

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
