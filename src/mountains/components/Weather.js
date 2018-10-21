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
    const latitude = this.state.mountain.latitude
    const longitude = this.state.mountain.longitude
    const response = await getWeather(latitude, longitude).catch(console.error)
    const json = await response.json()
      .then(this.setState({forecast: json}))
      .catch(console.error)
  }

  calculateDegreeChange (summitElevation) {
    return (summitElevation / 1000) * 3
  }

  unixToHumanReadable (unix) {
    const dt = new Date(unix*1000)
    const hr = dt.getHours()
    const m = '0' + dt.getMinutes()
    const s = '0' + dt.getSeconds()
    return hr+ ':' + m.substr(-2) + ':' + s.substr(-2)
  }

  render () {
    console.log(this.state.forecast)
    if(this.state.forecast !== null && this.state.forecast !== undefined) {
      const timeArray = []
      this.state.forecast.hourly.data.map(hourly =>
        timeArray.push(hourly.time))
      const timeConvert = timeArray.map(unix => this.unixToHumanReadable(unix))
      const timeForTwentyFour = timeConvert.splice(0,24)
      const hourlyArray = []
      this.state.forecast.hourly.data.map(hourly =>
        hourlyArray.push(hourly.temperature))
      const hourlyForTwentyFourHours = hourlyArray.splice(0, 24)
      const degreeChange = this.calculateDegreeChange(this.state.mountain.elevation)
      const seaLevelTemperature = hourlyForTwentyFourHours.map(hourly => hourly + degreeChange)
      const chanceOfRain = []
      this.state.forecast.hourly.data.map(hourly =>
        chanceOfRain.push(hourly.precipProbability))
      const chanceOfRainTwentyFourHours = chanceOfRain.splice(0, 24)
      return (
        <div className='weather'>
          <h3>Today at the mountain: {this.state.forecast.hourly.summary}</h3>
          <div className='graph'>
            <Weathergraph
              summitTemp={hourlyForTwentyFourHours}
              sealevelTemp={seaLevelTemperature}
              time={timeForTwentyFour}
              rain={chanceOfRainTwentyFourHours}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div>Weather is currently unavailable</div>
      )
    }
  }
}

export default Weather
