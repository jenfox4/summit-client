import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, getWeather } from '../api'
import apiUrl from '../../apiConfig'
import './weather.scss'
import Weathergraph from '../weathergraph.js'

class Weather extends Component {
  constructor (props) {
    super()

    this.state = {
      mountain: props.mountain,
      forecast: null,
    }
  }

  async componentDidMount () {
    console.log('latitude',this.state.mountain.latitude)
    const latitude = this.state.mountain.latitude
    console.log('longitude', this.state.mountain.longitude)
    const longitude = this.state.mountain.longitude
    const response = await getWeather(latitude, longitude)
    const json = await response.json()
    console.log(json)
    this.setState({forecast: json})
  }

  render () {
    if(this.state.forecast) {
      console.log(this.state.forecast)
      return (
        <div className="weather">
          <h3>Today at the mountain: {this.state.forecast.hourly.summary}</h3>
          <div className="graph">
            <Weathergraph/>
          </div>
        </div>
      )
    } else {
      return (
        <div>Weather section</div>
      )
    }
  }
}

export default Weather
