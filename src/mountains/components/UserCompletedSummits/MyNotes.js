import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ContentEditable from 'react-contenteditable'
import './MyNotes.scss'

class MyNotes extends Component {
  constructor(props) {
    super()
    this.state = {
      html: props.notes
    }
  }

  handleChange = evt => {
    this.setState({ html: evt.target.value })
  }

  render = () => {
    return (
      <ContentEditable
        html={this.state.html} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
      />
    )
  }
}

export default MyNotes
