import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '6a3a8d18d964a3a6e0ff630f04a23ae5'

class App extends Component {
  getWeather = async (e) => {
    e.preventDefault()
    const CITY = e.target.elements.city.value
    const COUNTRY = e.target.elements.country.value
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&mode=json&appid=${API_KEY}&units=imperial`)

    const DATA = await API_CALL.json()
    console.log(DATA)
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
