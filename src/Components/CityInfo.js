import React from 'react';

function cityInfo({ cityData }) {
  return (
    <div className="cityData">
      <h2>
        {cityData.name}, {cityData.sys.country}
      </h2>
      <h3>{cityData.weather[0].main}</h3>
      <p>{cityData.weather[0].description}</p>
      <p>Max Temp: {cityData.main.temp_max}</p>
      <p>Min Temp: {cityData.main.temp_min}</p>
      <p>
        Location: {cityData.coord.lon}, {cityData.coord.lat}
      </p>
    </div>
  );
}

export default cityInfo;
