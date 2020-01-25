import React, { useState } from 'react';

function Search({ getCity }) {
  const [city, setCity] = useState();
  function onChange(e) {
    setCity(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    getCity(city);
    setCity(' ');
  }

  return (
    <div>
      <input placeholder="Search City" value={city} required onChange={onChange} />
      <button onClick={submit}>Search</button>
    </div>
  );
}
export default Search;
