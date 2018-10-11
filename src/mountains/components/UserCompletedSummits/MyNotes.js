import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ContentEditable from 'react-contenteditable'
import { handleErrors, editMyNotes  } from '../../api'
import './MyNotes.scss'

class MyNotes extends Component {
  constructor(props) {
    super()
    this.state = {
      html: props.notes,
      completedSummitId: props.id
    }
  }

  handleChange = evt => {
    const user = this.props.user
    const completedSummitId = this.state.completedSummitId
    const notes = evt.target.value
    this.setState({ html: evt.target.value })
    this.sendEditRequest(user, completedSummitId, notes)
  }

  async sendEditRequest(user, completedSummitId, notes) {
    try {
      const response = await editMyNotes(user, completedSummitId, notes)
    } catch(e) {
      const { flash } = this.props
      flash('Sorry, you cannot edit your notes right now!', 'flash-error')
    }
  }

  render = () => {
    return (
      <ContentEditable
        html={this.state.html}
        disabled={false}
        onChange={this.handleChange}
      />
    )
  }
}

export default MyNotes
