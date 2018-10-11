import React, { Component } from 'react'
const ReactDOM = require('react-dom')
const LineChart = require('react-chartjs-2').Line

const chartData = {
	 labels: ['Now', 'In One Hour', 'In Two Hours', 'In Three Hours', 'In Four Hours', 'In Five Hours'],
	  datasets: [
		    {
  			label: 'Sea-level Temperature',
					 backgroundColor: 	'rgb(176,224,230, 0.5)',
  			data: [65, 59, 80, 81, 56, 55, 40]
  		},
  		{
  			label: 'Summit Temperature',
				 	backgroundColor: 'rgb(65,105,225,0.5)',
  			data: [28, 48, 40, 19, 86, 27, 90]
  		}
  	]
}

class Weathergraph extends Component {
  render() {
    return <LineChart data={chartData} width='600' height='250'/>
  }
}

export default Weathergraph
