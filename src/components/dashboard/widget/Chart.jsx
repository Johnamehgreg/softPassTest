import Chart from 'chart.js/auto'
import { useEffect } from 'react'



const ChartDashboard = ({day, failureList, successList}) => {
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
        labels: [...new Set(day)],
        datasets: [
          {
            data: successList,
            label: 'Successful',
            borderColor: '#05CD99',
            backgroundColor: [
              '#05CD99',
              '#05CD99',
              '#05CD99',
              '#05CD99',
              '#05CD99',
              '#05CD99',
            ],
            fill: false,
            lineTension: 0.6,
          },
          {
            data: failureList,
            label: 'Failure',
            borderColor: '#fb050567',
            backgroundColor: [
              '#fb050567',
              '#fb050567',
              '#fb050567',
              '#fb050567',
              '#fb050567',
              '#fb050567',
            ],
            fill: false,
            lineTension: 0.6,
          },
        ],
      },
    })

  })
  return <div className="horizontal-container  pt-8 flex overflow-x-auto md:px-6 px-2 h-[350px] md:h-[350px] md:pr-8 md:w-[calc(100vw-300px)] w-[calc(100vw-32px)] "></div>
}

export default ChartDashboard
