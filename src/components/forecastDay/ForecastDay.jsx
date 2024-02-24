import React, { useState, useEffect } from "react";
import axios from "axios";
import CountdownTimer from "../countDownTimer/CountDownTimer";
import style from "./forecastDay.module.css";

const ForecastDay = ({ city, startDate }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!city) {
          console.error("City is not provided");
          return;
        }

        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=Z74BPM98UENPEAK3FMCCZLJQ3&contentType=json`
        );
        console.log("Weather data:", response.data);
        setWeatherData(response.data?.days[0] || null);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (!city || !startDate || !weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.wrapCard}>
      <h2>Weather in {city} today:</h2>
      <p>Conditions: {weatherData.conditions}</p>
      <p>Temperature: {weatherData.temp}</p>
      <p>Wind Speed: {weatherData.windspeed}</p>

      <CountdownTimer startDate={startDate} />
    </div>
  );
};

export default ForecastDay;
