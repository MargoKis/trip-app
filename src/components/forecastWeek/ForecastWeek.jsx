import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./forecastWeek.module.css";

const ForecastWeek = ({ city, startDate, endDate }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&key=8RL3A4QYMYG7VUBDAVLDCZENK&contentType=json`
        );
        console.log("Weather data:", response.data);
        setWeatherData(response.data?.days.slice(0, 7) || []);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city, startDate, endDate]);

  return (
    <>
      <h1 className={style.title}>Week</h1>
      <div style={{ display: "flex" }}>
        {weatherData.map((day, id) => (
          <div key={id} className={style.cardDay}>
            <p>{day.weekday}</p>
            <p>{day.conditions}</p>
            <p>Day: {day.tempmax}°C </p>
            <p>Night: {day.tempmin}°C </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForecastWeek;
