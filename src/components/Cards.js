import React from "react";
import Card from "./Card";
import data from "../data/HousingData.json";

const Cards = () => {
  return (
    <div className="gallery">
      {data.map((location) => (
        <Card
          key={location.id}
          id={location.id}
          image={location.cover}
          alt="image de la location"
          name={location.title}
        />
      ))}
    </div>
  );
};

export default Cards;
