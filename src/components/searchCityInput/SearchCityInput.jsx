import React from "react";
import style from "./searchCityInput.module.css";

const SearchCityInput = ({
  searchQuery,
  setSearchQuery,
  trips,
  setFilteredTrips,
}) => {
  const handleInputChange = (e) => {
    const inputText = e.target.value.toLowerCase();
    setSearchQuery(inputText);

    const filteredTrips = trips.filter((trip) =>
      trip.city.toLowerCase().includes(inputText)
    );
    setFilteredTrips(filteredTrips);
  };

  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        type="text"
        placeholder="Search your trip..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchCityInput;
