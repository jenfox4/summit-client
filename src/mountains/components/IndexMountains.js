import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, indexMountains } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class IndexMountains extends Component {
  constructor () {
    super()

    this.state = {
      mountains: null
    }
  }
  componentDidMount () {
    const { user } = this.props
    const mountainArray = []

    indexMountains(user)
      .then((response)=> {return response.json()})
      .then((responseJson) => {
        this.setState({mountains: responseJson.mountains})
      })
      .catch(()=> console.error)
  }

  render () {
    const mountainsList = this.state.mountains && this.state.mountains.map((mountain) =>
      <h1 key={mountain.id}>{mountain.name}</h1>
    )
    return (
      <div>{mountainsList}</div>
    )
  }
}

export default withRouter(IndexMountains)
