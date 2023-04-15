import React, { Component } from 'react';
import Chart from 'chart.js/auto';

class ScatterPlotWithLine extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const { xData, yData } = this.props;

    this.myChart = new Chart(this.chartRef.current, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Plot',
            data: xData.map((x, i) => ({ x, y: yData[i] })),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Regression Line',
            data: [
              { x: 2, y: 3 },
              { x: 12, y: 19 }
            ],
            type: 'line',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
          }
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: 'X',
              },
            },
          ],
          yAxes: [
            {
              type: 'linear',
              position: 'left',
              scaleLabel: {
                display: true,
                labelString: 'Y',
              },
            },
          ],
        },
      },
    });
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default ScatterPlotWithLine;
