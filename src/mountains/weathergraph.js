import React, { Component } from 'react'
const ReactDOM = require('react-dom')
const LineChart = require('react-chartjs-2').Line

class Weathergraph extends Component {
  constructor (props) {
    super()
    this.state = {
      chartData: {
				 labels: ['Now', 'In One Hour', 'In Two Hours', 'In Three Hours', 'In Four Hours', 'In Five Hours'],
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
    return <LineChart data={this.state.chartData} width='600' height='250'/>
  }
}

export default Weathergraph
