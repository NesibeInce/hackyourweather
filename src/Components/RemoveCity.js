import React from 'react';

function RemoveCity({ removeCity, item }) {
  return (
    <div className="cross">
      <p onClick={() => removeCity(item)}>&#10060;</p>
    </div>
  );
}

export default RemoveCity;
