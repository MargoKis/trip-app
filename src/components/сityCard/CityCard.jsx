import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./cityCard.module.css";

const CityCard = ({
  city,
  startDate,
  endDate,
  onClick,
  searchQuery,
  handleCityCardClick,
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?query=${city}&client_id=yhC0HqpXJD1yW_LcyiZ-jNVyV7XqrD1hFLEwed3scjI`
        );
        setImageUrl(response.data.urls.small);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [city]);

  useEffect(() => {
    if (searchQuery !== undefined) {
      setIsVisible(
        searchQuery === "" ||
          city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }, [city, searchQuery]);

  return (
    <div
      className={style.wrapCard}
      style={{ display: isVisible ? "block" : "none" }}
      onClick={onClick}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={city} className={style.imageCard} />
      ) : (
        <div>Loading...</div>
      )}
      <h3>{city}</h3>
      <p className={style.startDate}>Start Date: {startDate}</p>
      <p className={style.endDate}>End Date: {endDate}</p>
    </div>
  );
};

export default CityCard;
