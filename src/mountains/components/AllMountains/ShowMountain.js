import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, showMountain } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import '../mountainsinfo.scss'
import Weather from '../Weather'

class ShowMountain extends Component {
  constructor () {
    super()

    this.state = {
      mountain: false
    }
  }

  async componentDidMount () {
    try {
      const { user, id } = this.props
      const response = await showMountain(user, id)
      const json = await response.json()
      this.setState({mountain: json.mountain})
    } catch(e) {
      const { flash } = this.props
      flash('We\'\re having trouble displaying the data. Try again soon.', 'flash-error')
    }
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
          <Weather
            mountain={this.state.mountain}
            flash={this.props.flash}
          />
        </div>
      )
    } else {
      return (
        <div>We are retrieving your data. Check back shortly</div>
      )
    }
  }
}

export default ShowMountain
