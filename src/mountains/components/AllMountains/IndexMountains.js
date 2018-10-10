import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, indexMountains } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import CardComponent from '../../../card/card.js'

class IndexMountains extends Component {
  constructor () {
    super()

    this.state = {
      mountains: null
    }
  }

  async componentDidMount () {
    const { user } = this.props
    const response = await indexMountains(user)
    const json = await response.json()
    this.setState({mountains: json.mountains})
  }

  render () {
    console.log(this.props.user.id)
    const mountainsList = this.state.mountains && this.state.mountains.map((mountain) =>
      <CardComponent
        key={mountain.id}
        id={mountain.id}
        name={mountain.name}
        state={mountain.state}
        elevation={mountain.elevation}
        difficulty={mountain.difficulty}
        features={mountain.features}
        image={false}
        summit={mountain.completed_summits.map(completed => completed.user.id === this.props.user.id)}
        user= {this.props.user}
      />
    )
    return (
      <div className="container">{mountainsList}</div>
    )
  }
}

export default withRouter(IndexMountains)
