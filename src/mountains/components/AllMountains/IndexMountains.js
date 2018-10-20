import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, indexMountains } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import CardComponentAllMountains from '../../../card/cardAllMountains.js'

class IndexMountains extends Component {
  constructor () {
    super()

    this.state = {
      mountains: null
    }
  }

  async componentDidMount () {
    try {
      const { user } = this.props
      const response = await indexMountains(user)
      const json = await response.json()
      this.setState({mountains: json.mountains})
    } catch(e) {
      const { flash } = this.props
      flash(messages.indexFail, 'flash-error')
    }
  }

  render () {
    const mountainsList = this.state.mountains && this.state.mountains.map((mountain) =>
      <CardComponentAllMountains
        flash={this.props.flash}
        key={mountain.id}
        id={mountain.id}
        name={mountain.name}
        state={mountain.state}
        elevation={mountain.elevation}
        difficulty={mountain.difficulty}
        features={mountain.features}
        image={mountain.image}
        summit={mountain.completed_summits}
        user= {this.props.user}
      />
    )
    return (
      <div className="container">{mountainsList}</div>
    )
  }
}

export default withRouter(IndexMountains)
