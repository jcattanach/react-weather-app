import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'
import { API_KEY } from './apikey'

class App extends Component {
  state = {
    temp : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const CITY = e.target.elements.city.value
    const COUNTRY = e.target.elements.country.value
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&mode=json&appid=${API_KEY}&units=imperial`)

    const DATA = await API_CALL.json()

    if(CITY && COUNTRY){
      this.setState({
        temp : DATA.main.temp,
        city : DATA.name,
        country : DATA.sys.country,
        humidity : DATA.main.humidity,
        description : DATA.weather[0].description,
        error : ''
      })
    } else {
      this.setState({
        error : 'Please enter location...'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
      </div>
    );
  }
}

export default App;
