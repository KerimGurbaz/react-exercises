import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Main = () => {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState(0);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setCountry(res.data[Math.floor(Math.random() * res.data.length)]);
      console.log(res.data.length);
      console.log("icerde calistim");
      console.log(country);
    });
  }, []);

  return (
    <div>
      <Card props={country} />
      <button>Click</button>
    </div>
  );
};

export default Main;
