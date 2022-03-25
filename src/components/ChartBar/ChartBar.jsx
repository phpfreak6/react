import React from "react";
import "./ChartBar.css";

function ChartBar({ value, maximum_value, label }) {
  let barFillHeight = "0%";
  
  if (maximum_value > 0) {
    barFillHeight = Math.round((value / maximum_value) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
