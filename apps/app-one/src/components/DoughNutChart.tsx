import { ChartData, plugins } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";


type DoughtNutChartProps = {
  data: ChartData<"doughnut", number[], unknown>
};

const DoughNutChart = (props: DoughtNutChartProps) => {

  const {data} = props;
  return (
    <>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "#fff",
              },
            },
          },
        }}
      />
    </>
  );
};

export default DoughNutChart;
