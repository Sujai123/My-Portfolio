import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useLayoutEffect } from 'react';

const useInitChartJS = () => {
  useLayoutEffect(() => {
    ChartJS.register(ArcElement, Tooltip, Legend);
  }, [])
}

export default useInitChartJS;