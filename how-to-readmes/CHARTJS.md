## Chartjs Library

[Chartjs Documentation](https://www.chartjs.org/)

# Installation for Chartjs using React

In your project include Chartjs dependencies.

`npm install --save react-chartjs-2`

Check to make sure chartjs is in your package.json

# Include Chartjs in file

In the file of your graph, make sure you include the following at the top:

```JSX
import React, { Component } from 'react'
const ReactDOM = require('react-dom')
const LineChart = require('react-chartjs-2').Line
```

# Example Usage

Create a component for your graph and pass it in the data you want in the form of an array. Below, I pass in
`props.time` which is an array of time, `props.rain` which is an array of chance of rain, `props.sealevelTemp` and `props.summitTemp` which are arrays of temperature values. I wanted two different yAxis labels to overlap precipitation
and temperature, so you will see two different axis Id's. The color values include opacity in order to overlap the graphs.

```JSX
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
```
