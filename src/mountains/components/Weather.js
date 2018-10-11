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

  calculateDegreeChange (summitElevation) {
    return (summitElevation / 1000) * 4
  }

  render () {
    if(this.state.forecast) {
      console.log(this.state.forecast)
      const hourlyArray = []
      this.state.forecast.hourly.data.map(hourly =>
        hourlyArray.push(hourly.temperature))
      const hourlyForNextFive = hourlyArray.splice(0, 6)
      console.log(hourlyForNextFive)
      const degreeChange = this.calculateDegreeChange(this.state.mountain.elevation)
      console.log(degreeChange)
      const seaLevelTemperature = hourlyForNextFive.map(hourly => hourly + degreeChange)
      console.log(seaLevelTemperature)
      return (
        <div className="weather">
          <h3>Today at the mountain: {this.state.forecast.hourly.summary}</h3>
          <div className="graph">
            <Weathergraph
              summitTemp={hourlyForNextFive}
              sealevelTemp={seaLevelTemperature}
            />
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
