import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, showCompletedSummits } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import MyNotes from './MyNotes'

class ShowMyMountain extends Component {
  constructor () {
    super()

    this.state = {
      completed_summit: false,
      notes: 'testing'
    }
  }

  async componentDidMount () {
    const { user, id } = this.props
    const response = await showCompletedSummits(user, id)
    const json = await response.json()
    const completed_summit = json.completed_summit
    this.setState({completed_summit: completed_summit})
  }

  render () {
    if(this.state.completed_summit) {
      return (
        <div>
          <h1>{this.state.completed_summit.mountain.name} Mountain</h1>
          <h1>{this.state.completed_summit.mountain.state}</h1>
          <div className="stats">
            <h2>Elevation: {this.state.completed_summit.mountain.elevation}</h2>
            <h2>Difficulty Level: {this.state.completed_summit.mountain.difficulty}</h2>
            <h2>Distance to summit: {this.state.completed_summit.mountain.distance_to_summit}</h2>
            <h2>Features of this hike: {this.state.completed_summit.mountain.features}</h2>
            <h2>My notes on the experience: {this.state.notes}</h2>
            <MyNotes notes={this.state.notes}/>
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

export default ShowMyMountain
