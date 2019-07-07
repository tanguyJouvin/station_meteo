import React, { Component } from 'react';
// import { Navbar } from 'Bootstrap';
import './Weather.css';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      temp: 0,
      clouds: 0,
      humidity: 0,
      windSpeed : 0,
      cityName: '',
      weather: '',
      iconId: ''
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((success) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${success.coords.latitude}&lon=${success.coords.longitude}&appid=a0f58b2016db39d35357ce3e8c76fcdf`)
        .then(res => res.json())
        .then((res) =>   {
           console.log(res);
           this.setState({
            temp:res.main.temp,
            clouds:res.clouds.all,
            humidity:res.main.humidity,
            windSpeed:res.wind.speed,
            cityName:res.name,
            weather:res.weather[0].description,
            iconId: res.weather[0].icon
           });
        })
    }, (error) => {
      console.log(error);
      alert('Veuillez débloquer la géolocalisation de votre appareil !')
    });
  };

  render() {
    return(
        <div className="App">
          <nav class="navbar navbar-light bg-light">
            <h1>Ma station Meteo</h1>
            <h2>{this.state.cityName}</h2>
            <img className="iconW" src={`http://openweathermap.org/img/w/${this.state.iconId}.png`}/> 
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-6 weather mx-auto">
                <p>{this.state.temp}°C</p>
                <p>taux d'humidité dans l'air:<br/>{this.state.humidity}%</p>
                <p>vitesse du vent:<br/>{this.state.windSpeed}km/h</p>
                <p>{this.state.clouds}</p>
                <p>{this.state.weather}</p>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default Weather;
