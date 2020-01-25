import React from 'react';
import WeatherJson from '../city-weather.json';

function CityWeather() {
  return (
    <div>
      <h1>Weather</h1>
      {WeatherJson.map(city => {
        return (
          <div className="city">
            <h2>
              {city.name}, {city.sys.country}
            </h2>
            <h3>{city.weather[0].main}</h3>
            <p>{city.weather[0].description}</p>
            <p>Max Temp: {city.main.temp_max}</p>
            <p>Min Temp: {city.main.temp_min}</p>
            <p>
              Location: {city.coord.lon}, {city.coord.lat}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CityWeather;

// Key	No
// 1e445d2593ae5af2f01388c928a96c44
