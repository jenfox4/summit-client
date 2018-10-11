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
			  			label: 'Sea-level Temperature',
								 backgroundColor: 	'rgb(176,224,230, 0.5)',
			  			data: props.sealevelTemp
			  		},
			  		{
			  			label: 'Summit Temperature',
							 	backgroundColor: 'rgb(65,105,225,0.5)',
			  			data: props.summitTemp
			  		}
			  	]
      }
    }
  }

  render() {
    return <LineChart data={this.state.chartData} />
  }
}

export default Weathergraph
