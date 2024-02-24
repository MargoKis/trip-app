import React from "react";
import style from "./addCityCard.module.css";

const AddCityCard = ({ addTrip }) => {
  const handleAddTrip = () => {
    const newTrip = {
      city: "New City",
      startDate: "Start Date",
      endDate: "End Date",
    };
    addTrip(newTrip);
  };

  return (
    <div className={style.addTripContainer}>
      <div className={style.addTripCard} onClick={handleAddTrip}>
        <p className={style.plus}> + </p>
        <p className={style.addTripText}>Add Trip</p>
      </div>
    </div>
  );
};

export default AddCityCard;
