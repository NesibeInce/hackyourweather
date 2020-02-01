import React, { useState } from 'react';
import CityInfo from './CityInfo';
import SearchButton from './SearchButton';

const CityWeather = () => {
  const [cityWeather, setCityWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [result, setResult] = useState('notDone');

  function getCity(city) {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setCityWeather(data);
        setResult('Done');
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }
  if (loading) {
    return <p>Loading data...</p>;
  }
  if (cityWeather) {
    return (
      <div>
        <h1>Weather</h1>
        <SearchButton getCity={getCity} />
        {result === 'Done' && <CityInfo cityWeather={cityWeather} />}
      </div>
    );
  }
};

export default CityWeather;
