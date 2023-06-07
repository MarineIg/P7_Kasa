import React, { useState } from "react";
import PropTypes from "prop-types";
import arrowIcon from "../assets/arrow.svg";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const collapseStyle = {
    borderRadius: props.borderRadius,
    fontSize: props.fontSize,
  };

  const heightStyle = {
    height: props.height,
  };

  return (
    <div className="collapse" style={collapseStyle}>
      <button
        className="collapse__header"
        style={heightStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{props.title}</h3>
        <img
          src={arrowIcon}
          alt="Icône de flèche"
          className={
            isOpen ? "collapse__arrowIcon rotate" : "collapse__arrowIcon"
          }
        />
      </button>
      <div
        className={
          isOpen
            ? "collapse__content collapse__content--open"
            : "collapse__content"
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
  fontSize: PropTypes.string,
  height: PropTypes.string,
};

Collapse.defaultProps = {
  borderRadius: "5px",
  fontSize: "24px",
  height: "47px",
};

export default Collapse;
