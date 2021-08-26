import React, { useState, useEffect } from "react";
import axios from "axios";
import CardInformation from "./components/CardInformation";


const WeatherInfo = () => {
  const [coordinates, setCoordinates] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lon = position.coords.longitude;
          const lat = position.coords.latitude;
          const result = `${process.env.REACT_APP_API_URL}/current/?lat=${lat}&lon=${lon}&key=${process.env.REACT_APP_API_KEY}`;
          const res = await axios.get(result);
          setIsLoading(true)
          setCoordinates(coordinates);
          setData(res.data);
          console.log(res.data);
        });
      }
    };
    fetchLocation();
  }, [coordinates]);

  return (
    <>
      <CardInformation weatherData = {data} isLoading = {isLoading}/>

    </>
  );
};

export default WeatherInfo;
