import React from "react";
import cities from "./cities";

const CityDropdown = ({ selectedCity, handleCityChange }) => {
  return (
    <select
      style={{ height: "30px", padding: "0 1%" }}
      value={selectedCity}
      onChange={handleCityChange}
    >
      <option value="">Select a city</option>
      {cities.map((city, id) => (
        <option key={id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CityDropdown;
