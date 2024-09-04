import React from 'react';

function MapExample() {
  const numbers = [1, 2, 3, 4, 5];
  // Convert numbers to strings
  const numberStrings = numbers.map(num => `Number: ${num}`);

  return (
    <div>
      <h1>Number Strings</h1>
      <p>{numberStrings.join(', ')}</p>
    </div>
  );
}

export default MapExample;
    