import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const location = `/locations/${props.id}`;
  return (
    <Link to={location}>
      <div className="card">
        <img src={props.image} alt={props.alt} className="card__img" />
        <h3 className="card__title">{props.name}</h3>
      </div>
    </Link>
  );
};

export default Card;
