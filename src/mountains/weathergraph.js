import React, { Component } from 'react'
const ReactDOM = require('react-dom')
const LineChart = require('react-chartjs-2').Line

class Weathergraph extends Component {
  constructor (props) {
    super()
    this.state = {
      chartData: {
				 labels: props.time,
				  datasets: [
          {
            label: 'Precipitation',
            yAxisID: 'B',
            backgroundColor: 'rgb(255,250,205, 0.4)',
            data: props.rain
          },
					    {
			  			label: 'Sea-level Temperature',
            yAxisID: 'A',
								 backgroundColor: 'rgb(176,224,230, 0.6)',
			  			data: props.sealevelTemp
			  		},
			  		{
			  			label: 'Summit Temperature',
            yAxisID: 'A',
							 	backgroundColor: 'rgb(65,105,225,0.6)',
			  			data: props.summitTemp
			  		}]
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'temperature'
            },
            id: 'A',
            type: 'linear',
            position: 'left',
          }, {
            scaleLabel: {
              display: true,
              labelString: 'chance of rain'
            },
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
              max: 1,
              min: 0
            }
          }]
        }}
    }
  }

  render() {
    return <LineChart data={this.state.chartData} options={this.state.options} />
  }
}

export default Weathergraph
