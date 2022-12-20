import Chart from "chart.js/auto";
import { useEffect } from "react";

const ChartDashboard = ({ data }) => {
  useEffect(() => {
   
    if (document.querySelector("#horizontalChart")) {
      document.querySelector("#horizontalChart").remove();
    }
    let canvas = document.createElement("canvas");
    canvas.id = "horizontalChart";

    document.querySelector(".horizontal-container").appendChild(canvas);

    let ctx = document.querySelector("#horizontalChart").getContext("2d");

    new Chart(ctx, {
      type: "line",
      options: {
        maintainAspectRatio: false,
        indexAxis: "x",
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      data: {
        datasets: [
          {
            data: [...data],
            label: "Successful",
            borderColor: "#04CD99",
            backgroundColor: "#04CD99",
            tension: 0.6,
            parsing: {
              xAxisKey: "day",
              yAxisKey: "status.success",
            },
          },
          {
            data: [...data,],
            label: "Failure",
            borderColor: "#fb050567",
            backgroundColor: "#fb050567",
            tension: 0.6,
            parsing: {
              xAxisKey: "day",
              yAxisKey: "status.failure",
            },
          },
        ],
      },
    });
  });
  return (
    <div className="horizontal-container  pt-8 flex  md:px-6 px-2 h-[350px] md:h-[350px] md:pr-8   "></div>
  );
};

export default ChartDashboard;
