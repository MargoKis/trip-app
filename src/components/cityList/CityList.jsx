import React from "react";
import CityCard from "../сityCard/CityCard";
import style from "./cityList.module.css";

const CityList = ({ trips, searchQuery, handleCityCardClick }) => {
  if (!Array.isArray(trips) || trips.length === 0) {
    return <div>No trips yet</div>;
  }

  const filteredTrips = trips.filter((trip) =>
    trip.city.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  return (
    <div className={style.container}>
      <div className={style.cardList}>
        {filteredTrips.map((trip, id) => (
          <div key={id} className={style.cardWrapper}>
            <CityCard
              city={trip.city}
              startDate={trip.startDate}
              endDate={trip.endDate}
              onClick={() =>
                handleCityCardClick(trip.city, trip.startDate, trip.endDate)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;
