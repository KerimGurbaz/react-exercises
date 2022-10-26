import React from "react";

const Card = ({ props }) => {
  const { flag, capital, population } = props;
  return (
    <div>
      <div> {flag}</div>
      <h2>Capital : {capital}</h2>
      <h3>Population : {population}</h3>
    </div>
  );
};

export default Card;
