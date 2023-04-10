import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value) // tính giá expesnse của từng tháng trong năm 
    const totalMaximum = Math.max(...dataPointValues) //totalMaximum = tổng expense trong 1 tháng lớn nhất.
  return (
    //một chart bao gồm nhiều chartbar , một chart bao gồm 12 chartbar tương ứng từng tháng, mỗi key la` một tháng
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
            key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
