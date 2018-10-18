import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import Button from '@material-ui/core/Button'

import './signin.scss'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signIn = event => {
    event.preventDefault()

    const { email, password } = this.state
    const { flash, history, setUser } = this.props

    signIn(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="sign-in-container">
        <div className="sign-in-header">
          <h1>The Mountains Are Calling</h1>
          <h4>Where will you go today?</h4>
        </div>
        <form className='auth-form-sign-in' onSubmit={this.signIn}>
          <h3>Sign In</h3>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Button variant="contained" type="sumbit" className="button">
            Sign In
          </Button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
