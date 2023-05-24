import React from "react";
import arrowIcon from "../assets/dropdown-arrow.svg";
import { useState } from "react";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    borderRadius = "5px",
    width = "100%",
    fontSize = "24px",
    height = "47px",
  } = props;

  const collapseStyle = {
    borderRadius,
    width,
    fontSize,
  };

  const heightStyle = {
    height,
  };

  return (
    <div className="collapse" style={collapseStyle}>
      <button
        className="collapse__content "
        style={heightStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{props.title}</h3>
        <span className={isOpen ? "collapse__icon rotate" : "collapse__icon"}>
          <img src={arrowIcon} alt="Icône de flèche" />
        </span>
      </button>
      <div className={isOpen ? "collapse__text collapse__text--open" : "collapse__text"}>
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
