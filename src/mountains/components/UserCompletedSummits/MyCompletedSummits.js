import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, indexCompletedSummits } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import CardComponentCompletedSummits from '../../../card/cardCompletedSummits.js'
import CompletedGraph from './completedsummitsgraph'
import Loading from '../../../loadingicon/loading.js'

import '../../../index.scss'

class MyCompletedSummits extends Component {
  constructor (props) {
    super(props)

    this.state = {
      completed: null
    }
  }

  async componentDidMount () {
    try {
      const { user } = this.props
      const response = await indexCompletedSummits(user)
      const json = await response.json()
      this.setState({completed: json.completed_summits})
    } catch(e) {
      const { flash } = this.props
      flash(messages.indexFail, 'flash-error')
    }
  }

  render () {
    if (this.state.completed && this.state.completed.length > 0) {
      const completedList = this.state.completed.map((completed) =>
        <CardComponentCompletedSummits
          flash={this.props.flash}
          key={completed.id}
          id={completed.id}
          name={completed.mountain.name}
          state={completed.mountain.state}
          elevation={completed.mountain.elevation}
          difficulty={completed.mountain.difficulty}
          features={completed.mountain.features}
          image={completed.mountain.image}
          summit={[true]}
          user= {this.props.user}
        />
      )
      return (
        <div>
          <div className="completed-chart">
            <CompletedGraph numbercompleted={this.state.completed.length} total={68-this.state.completed.length}/>
          </div>
          <div className="container">{completedList}</div>
        </div>
      )
    } if(this.state.completed && this.state.completed.length == 0) {
      return (
        <div className="no-summits">
          <h1> Looks like you have yet to climb the peaks of New England</h1>
          <h3> Be bold. Go outside. </h3>
        </div>
      )
    } else {
      return (
        <Loading />
      )
    }
  }
}

export default MyCompletedSummits
