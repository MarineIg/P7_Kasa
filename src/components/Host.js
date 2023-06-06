import React from "react";
import StarRating from "./StarRating";

const Host = ({ rating, host }) => {
  const fullName = host.name;
  const [firstName, lastName] = fullName.split(" ");
  return (
    <div className="host">
      <div className="host__infos">
        <div className="host__name">
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
        <img className="host__picture" src={host.picture} alt={host.name} />
      </div>
      <StarRating rating={rating} />
    </div>
  );
};

export default Host;
