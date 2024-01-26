import { ThemeProvider } from "react-jss";
import "./app.scss";
import Home from "./pages/Home";
import theme from "./constants/theme";

import useSmoothScroll from "./hooks/useSmoothScroll";
import useInitChartJS from "./hooks/useInitChartJS";

function App() {
  useSmoothScroll();
  useInitChartJS();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
