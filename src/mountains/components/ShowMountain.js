import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, indexMountains } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class ShowMountain extends Component {
  constructor () {
    super()

    this.state = {
      mountains: null
    }
  }

  render () {
    return (
      <h1>Show Mountain</h1>
    )
  }
}

export default ShowMountain
