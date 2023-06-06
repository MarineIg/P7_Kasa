import React from "react";
import starPink from "../assets/star_pink.svg";
import starGrey from "../assets/star_grey.svg";

const StarRating = ({ rating }) => {
  const score = [1, 2, 3, 4, 5];

  return (
    <div className="starRating">
      {score.map((rateElem, index) => (
        <img
          src={rating >= rateElem ? starPink : starGrey}
          alt="étoile"
          key={index}
          className="star"
        />
      ))}
    </div>
  );
};

export default StarRating;
