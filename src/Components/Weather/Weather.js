import React, { Component } from 'react';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      long: 0
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((success) => {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.2311225&lon=-1.5554265999999999&appid=a0f58b2016db39d35357ce3e8c76fcdf')
        .then(res => res.json())
        .then((res) =>   {
           console.log(res);
        })

      this.setState({
        lat: success.coords.latitude, //c'est la latitude récupéré dans l'objet qui s'affiche dans la console grâce au console.log(success)
        long: success.coords.longitude,
      });
      console.log(success);
    }, (error) => {
      console.log(error);
      alert('Veuillez débloquer la géolocalisation de votre appareil !')
    });
    console.log("test");
  };

  render() {
    return(
      <div className="App">
          weather<br/>
          {this.state.lat}<br/>
          {this.state.long}
      </div>
    )
  }
}

export default Weather;
