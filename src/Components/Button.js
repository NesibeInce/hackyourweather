import React from 'react';

function Button({ getDogPhoto }) {
  return (
    <div>
      <button className="button" onClick={getDogPhoto}>
        Enter the City!
      </button>
    </div>
  );
}

export default Button;
