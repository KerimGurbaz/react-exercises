import React from "react";

const Card = ({ props }) => {
  const { flag, capital, population, name: common } = props;
  console.log(flag);
  return (
    <div className="country-div">
      <div className="img">{flag}</div>

      <h2>Capital : {capital}</h2>
      <h3>Population : {population}</h3>
    </div>
  );
};

export default Card;
