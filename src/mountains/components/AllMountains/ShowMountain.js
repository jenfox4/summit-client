import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, showMountain } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import '../mountainsinfo.scss'

class ShowMountain extends Component {
  constructor () {
    super()

    this.state = {
      mountain: false
    }
  }

  async componentDidMount () {
    const { user, id } = this.props
    const response = await showMountain(user, id)
    const json = await response.json()
    console.log(json.mountain)
    this.setState({mountain: json.mountain})
  }

  render () {
    if(this.state.mountain) {
      return (
        <div className="container-mountain-info">
          <h1>{this.state.mountain.name} Mountain</h1>
          <h1>{this.state.mountain.state}</h1>
          <div className="stats">
            <h2>Elevation: {this.state.mountain.elevation}</h2>
            <h2>Difficulty Level: {this.state.mountain.difficulty}</h2>
            <h2>Distance to summit: {this.state.mountain.distance_to_summit}</h2>
            <h2>Features of this hike: {this.state.mountain.features}</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div>Mountain</div>
      )
    }
  }
}

export default ShowMountain
