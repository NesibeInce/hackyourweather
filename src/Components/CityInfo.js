import React from 'react';

const CityInfo = ({ cityWeather }) => {
  if (cityWeather.cod == 404) {
    return <h3>City not Found, please check the spelling for the city</h3>;
  } else {
    return (
      <div className="container">
        <h1 className="cityName">
          {cityWeather.name}, {cityWeather.sys.country}
        </h1>
        <div className="main">
          <h3>{cityWeather.weather[0].main}</h3>
          <p>{cityWeather.weather[0].description}</p>
        </div>
        <div className="details">
          <p>min temp: {(cityWeather.main.temp_min - 273.15).toFixed(2)} °C</p>
          <p>max temp: {(cityWeather.main.temp_max - 273.15).toFixed(2)} °C</p>
          <p>
            location: {cityWeather.coord.lon}, {cityWeather.coord.lat}
          </p>
        </div>
      </div>
    );
  }
};
export default CityInfo;
