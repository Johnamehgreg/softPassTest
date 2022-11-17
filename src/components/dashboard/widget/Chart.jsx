import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'

const ChartDashboard = () => {
  useEffect(() => {
    if (document.querySelector('#horizontalChart')) {
      document.querySelector('#horizontalChart').remove()
    }
    let canvas = document.createElement('canvas')
    canvas.id = 'horizontalChart'

    document.querySelector('.horizontal-container').appendChild(canvas)

    let ctx = document.querySelector('#horizontalChart').getContext('2d')

    let newChartCreate = new Chart(ctx, {
      type: 'line',
      options: {
        maintainAspectRatio: false,
        indexAxis: 'x',
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      data: {
        labels: ['10', '20', '30', '40', '50','60', '70', '80', '90','100', ],
        datasets: [
          {
            data: [20, 30, 15, 50, 60, 30, 15, 90, 40, 33],
            label: 'Pending',
            borderColor: '#E12179',
            backgroundColor: [
              'rgba(95, 163, 72, 1)',
              'rgba(127, 188, 88, 1)',
              'rgba(146, 215, 103, 1)',
              'rgba(159, 235, 112, 1)',
              'rgba(188, 243, 153, 1)',
              'rgba(195, 231, 172, 1)',
            ],
            fill: false,
            lineTension: 0.4,
          },
        ],
      },
    })

  }, [])
  return <div className="horizontal-container pt-8 flex overflow-x-auto md:px-6 px-2 h-[350px] md:h-[400px] md:pr-8 md:w-[calc(100vw-300px)] w-[calc(100vw-32px)] "></div>
}

export default ChartDashboard
