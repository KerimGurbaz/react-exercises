// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./Card";

// const Main = () => {
//   const [country, setCountry] = useState([]);
//   const [name, setName] = useState(0);

//   useEffect(() => {
//     axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
//       setCountry(res.data[Math.floor(Math.random() * res.data.length)]);
//       console.log(res.data.length);
//       console.log("icerde calistim");
//       console.log(country);
//     });
//   }, [name]);

//   return (
//     <div>
//       <Card props={country} />
//       <button onClick={(e) => setName(name)}>Click</button>
//     </div>
//   );
// };

// export default Main;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
    setCountries(data);
    // console.log("data.length :>> ", data.length);
    // console.log("data[2]", data[2]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(countries[1].population);
  return (
    <div>
      {countries.map((item) => {
        return <p>{item?.capital}</p>;
      })}
    </div>
  );
};

export default Main;
