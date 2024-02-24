import React, { useState } from "react";
import style from "./mainPage.module.css";
import CityList from "../cityList/CityList";
import ModalPopup from "../modalPopup/ModalPopUp";
import SearchCityInput from "../searchCityInput/SearchCityInput";
import ForecastWeek from "../forecastWeek/ForecastWeek";
import ForecastDay from "../forecastDay/ForecastDay";

const MainPage = () => {
  const [trips, setTrips] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [showForecast, setShowForecast] = useState(false);

  const handleAddTrip = () => {
    setShowPopup(true);
  };

  const handleTripSelection = (trip) => {
    if (trip) {
      setTrips([...trips, trip]);
    }
    setShowPopup(false);
  };

  const handleCityCardClick = (city, startDate, endDate) => {
    setSelectedCity(city);
    setStartDate(startDate);
    setEndDate(endDate);
    setShowForecast(true);
  };

  return (
    <>
      <div className={style.wholePage}>
        <div className={style.leftPart}>
          <h1 className={style.title}>Weather Forecast</h1>
          <SearchCityInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            trips={trips}
            setFilteredTrips={setFilteredTrips}
          />
          <div className={style.cardList}>
            <CityList
              trips={filteredTrips.length > 0 ? filteredTrips : trips}
              handleCityCardClick={handleCityCardClick}
              searchQuery={searchQuery}
            />
            <div className={style.addTripContainer}>
              <div className={style.addTripCard} onClick={handleAddTrip}>
                <p className={style.plus}> + </p>
                <p className={style.addTripText}>Add Trip</p>
              </div>
            </div>
          </div>
          {showPopup && (
            <ModalPopup handleTripSelection={handleTripSelection} />
          )}
        </div>
        {showForecast && selectedCity && startDate && endDate && (
          <ForecastDay city={selectedCity} startDate={startDate} />
        )}
      </div>
      <div className={style.rightPart}>
        {showForecast && selectedCity && startDate && endDate && (
          <ForecastWeek
            city={selectedCity}
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </div>
    </>
  );
};

export default MainPage;
