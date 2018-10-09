import React from 'react'
import './Home.scss'

class Home extends React.Component {
  render() {
    return (
      // the purpose of a react Fragment is that you don't need a div or something to contain this piece in.
      //  it's a Fragment of code
      <React.Fragment>
        <div
          className="hero-image"
        >
          <div className="heading">
            <h1>Explore New England</h1>
            <h3>track your greatest adventures</h3>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
