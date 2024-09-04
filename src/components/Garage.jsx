import React from 'react';

function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  return (
    <div>
      <h1>Welcome to the garage!</h1>
      <Car brand="Ford" />
      <Car brand="Toyota" />
      <Car brand="Tesla" />
    </div>
  );
}

export default Garage;
