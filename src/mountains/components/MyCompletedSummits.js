import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, showMountain } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class ShowMountain extends Component {
  constructor () {
    super()

    this.state = {
      mountain: false
    }
  }

  // async componentDidMount () {
  //   const { user, id } = this.props
  //   const response = await showMountain(user, id)
  //   const json = await response.json()
  //   console.log(json.mountain)
  //   this.setState({mountain: json.mountain})
  // }

  render () {
    return (
      <div>Mountain</div>
    )
  }
}

export default ShowMountain
