import React from "react";
import PropTypes from "prop-types";
import arrowIcon from "../assets/dropdown-arrow.svg";
import { useState } from "react";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const collapseStyle = {
    borderRadius: props.borderRadius,
    width: props.width,
    fontSize: props.fontSize,
  };

  const heightStyle = {
    height: props.height,
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
      <div
        className={
          isOpen ? "collapse__text collapse__text--open" : "collapse__text"
        }
      >
        {props.children}
      </div>
    </div>
  );
};
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string,
};

Collapse.defaultProps = {
  borderRadius: "5px",
  width: "100%",
  fontSize: "24px",
  height: "47px",
};

export default Collapse;
