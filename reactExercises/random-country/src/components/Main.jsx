import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Main = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setCountry(res.data[0]);
    });
  }, []);

  return (
    <div>
      <Card props={country} />
    </div>
  );
};

export default Main;
