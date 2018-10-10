import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, indexCompletedSummits } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import CardComponent from '../../../card/card.js'

class MyCompletedSummits extends Component {
  constructor () {
    super()

    this.state = {
      completed: null
    }
  }

  async componentDidMount () {
    const { user } = this.props
    const response = await indexCompletedSummits(user)
    const json = await response.json()
    this.setState({completed: json.completed_summits})
  }

  render () {
    const completedList = this.state.completed && this.state.completed.map((completed) =>
      <CardComponent
        key={completed.id}
        id={completed.id}
        name={completed.mountain.name}
        state={completed.mountain.state}
        elevation={completed.mountain.elevation}
        difficulty={completed.mountain.difficulty}
        features={completed.mountain.features}
        image={false}
        summit={[true]}
        user= {this.props.user}
      />
    )
    return (
      <div className="container">{completedList}</div>
    )
  }
}

export default MyCompletedSummits
