import React, { Component } from 'react'
const ReactDOM = require('react-dom')
import {Doughnut} from 'react-chartjs-2'

class CompletedGraph extends Component {
  constructor (props) {
    super()
    this.state = {
      data: {
        datasets: [
          {
            data: [props.numbercompleted, props.total],
            backgroundColor: ['rgb(65,105,225,0.5)', 'rgb(176,224,230, 0.5)']
          }
        ],
        labels: [
          'Completed Peaks',
          'Mountains yet to be climed'
        ]
      }
    }
  }

  render() {
    return <Doughnut data={this.state.data} height={75}/>
  }
}

export default CompletedGraph
