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
          <div className="header-mountain-info">
            <h1>{this.state.mountain.name} Mountain</h1>
            <h2>{this.state.mountain.state}</h2>
          </div>
          <div className="stats">
            <h3>Elevation: {this.state.mountain.elevation} feet</h3>
            <h3>Difficulty Level: {this.state.mountain.difficulty}</h3>
            <h3>Distance to summit: {this.state.mountain.distance_to_summit}</h3>
            <h3>Features of this hike: {this.state.mountain.features}</h3>
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
