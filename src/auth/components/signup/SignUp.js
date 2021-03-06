import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, signUp, signIn } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import Button from '@material-ui/core/Button'

import './signup.scss'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signUp = event => {
    event.preventDefault()

    const { email, password, passwordConfirmation} = this.state
    const { flash, history, setUser } = this.props

    signUp(this.state)
      .then(handleErrors)
      .then(() => signIn(this.state))
      .then(handleErrors)
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signUpSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signUpFailure, 'flash-error'))
  }

  render () {
    const { email, password, passwordConfirmation} = this.state

    return (
      <div className="sign-up-container">
        <div className="sign-up-header">
          <h1>Start your adventure today</h1>
          <ul className="list">
            <li> Explore the 100 highest New England Mountains. </li>
            <li> Track your peaks.</li>
            <li> See your progress towards joining the 4,000 footer club.</li>
          </ul>
        </div>
        <form className='auth-form-sign-up' onSubmit={this.signUp}>
          <h4>Sign Up</h4>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            value={email}
            type="email"
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
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />
          <Button variant="contained" type="sumbit" className="button">
            Sign Up
          </Button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp)
