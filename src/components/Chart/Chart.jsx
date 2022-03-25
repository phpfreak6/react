import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";

function Chart({ dataPoints }) {
  const dataPointValuesArr = dataPoints.map((dataPoint) => dataPoint.value);
  const maximum_value = Math.max(...dataPointValuesArr);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            maximum_value={maximum_value}
            value={dataPoint.value}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
