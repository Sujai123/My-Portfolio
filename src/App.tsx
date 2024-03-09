import "./app.scss";
import Home from "./pages/Home";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();
  // useInitChartJS();
  // useRegisterGSapScrollTrigger();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
