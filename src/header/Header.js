import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/mountains">All Mountains</Link>
    <Link to="/completed-summits">My Completed Summits</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-in">Sign In</Link>
    <Link to="/sign-up">Sign Up</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <Link className="logo-header" to="/">
      <img
        src={require('./logo.png')}
        className='logo' />
      <h4>Summit</h4>
    </Link>
    <nav>
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)

export default Header
