import React from 'react'
import './Home.scss'
import MyMapComponent from '../mountains/components/Map/map.js'

class Home extends React.Component {
  render() {
    return (
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
