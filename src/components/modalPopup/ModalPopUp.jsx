import React, { useState } from "react";
import CityDropdown from "../cityDropDown/CityDropDown";
import styles from "./modalPopup.module.css";

const ModalPopup = ({ handleTripSelection }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleChoose = () => {
    if (selectedCity && startDate && endDate) {
      const newTrip = {
        city: selectedCity,
        startDate,
        endDate,
      };
      handleTripSelection(newTrip);
      setSelectedCity("");
      setStartDate("");
      setEndDate("");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <div className={styles.titleWrap}>
          <span className={styles.createTripText}>Create Trip</span>
          <span
            className={styles.close}
            onClick={() => handleTripSelection(null)}
          >
            &times;
          </span>
        </div>
        <label htmlFor="city" className={styles.label}>
          <span className={styles.redStar}>*</span> City
        </label>
        <CityDropdown
          selectedCity={selectedCity}
          handleCityChange={handleCityChange}
        />
        <label htmlFor="startDate" className={styles.label}>
          <span className={styles.redStar}>*</span> Start Date
        </label>
        <input
          className={styles.input}
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <label htmlFor="endDate" className={styles.label}>
          <span className={styles.redStar}>*</span> End Date
        </label>
        <input
          className={styles.input}
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
        <div className={styles.btnWrap}>
          <button
            className={styles.btnCancel}
            onClick={() => handleTripSelection(null)}
          >
            Cancel
          </button>
          <button className={styles.btnSave} onClick={handleChoose}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
