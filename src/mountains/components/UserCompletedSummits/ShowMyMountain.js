import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, showCompletedSummits } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import MyNotes from './MyNotes'

import '../mountainsinfo.scss'

class ShowMyMountain extends Component {
  constructor () {
    super()

    this.state = {
      completed_summit: false,
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
        <div className="container-mountain-info">
          <div className="header-mountain-info">
            <h1>{this.state.completed_summit.mountain.name} Mountain</h1>
            <h2>{this.state.completed_summit.mountain.state}</h2>
          </div>
          <div className="stats">
            <h3>Elevation: {this.state.completed_summit.mountain.elevation} feet</h3>
            <h3>Difficulty Level: {this.state.completed_summit.mountain.difficulty}</h3>
            <h3>Distance to summit: {this.state.completed_summit.mountain.distance_to_summit}</h3>
            <h3>Features of this hike: {this.state.completed_summit.mountain.features}</h3>
            <div className="my-notes">
              <h4>My notes on the experience: {this.state.notes}</h4>
              <MyNotes notes={this.state.completed_summit.notes? this.state.completed_summit.notes : 'Click here to start adding notes about your experience!' } id={this.state.completed_summit.id} user={this.props.user}/>
            </div>
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
