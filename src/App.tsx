import "./app.scss";
import Home from "./pages/Home";

import useSmoothScroll from "./hooks/useSmoothScroll";
import useInitChartJS from "./hooks/useInitChartJS";
import useRegisterGSapScrollTrigger from "./hooks/useRegisterGSapScrollTrigger";

function App() {
  useSmoothScroll();
  // useInitChartJS();
  // useRegisterGSapScrollTrigger();

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
