import React, { useState } from 'react';
import CityInfo from './CityInfo';
import Search from './Search';

function CityWeather() {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  function getCity(city) {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e445d2593ae5af2f01388c928a96c44`,
    )
      .then(res => res.json())
      .then(data => {
        setCityData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setHasError(true);
        setLoading(false);
      });
    console.log(cityData);
  }
  // useEffect(() => {
  //   getCity(city);
  // }, []);
  if (hasError) {
    return (
      <div>
        <p>There is something wrong</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <p>City weather information is loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Weather</h1>
      <Search getCity={getCity} />
      <CityInfo cityData={cityData} />
    </div>
  );
}

export default CityWeather;
