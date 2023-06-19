import { useState } from "react";
import PropTypes from "prop-types";
import arrowIcon from "../assets/arrow.svg";

/**
 * This component displays a collapse section with a title and content.
 * @param {object} props - The props for the component.
 * @param {string} props.title - The title of the collapse.
 * @param {string} props.borderRadius - The border radius of the collapse container.
 * @param {string} props.fontSize - The font size of the collapse.
 * @param {string} props.height - The height of the collapse header.
 * @param {ReactNode} props.children - The content of the collapse.
 * @returns {JSX.Element} The Collapse component.
 */

const Collapse = ({ children, borderRadius, fontSize, height, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Styles for the collapse and header elements
  const collapseStyle = {
    borderRadius: borderRadius,
    fontSize: fontSize,
  };
  const heightStyle = {
    height: height,
  };

  return (
    <div className="collapse" style={collapseStyle}>
      <button
        className="collapse__header"
        style={heightStyle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="collapse-content"
      >
        <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="Icône de flèche"
          className={`collapse__arrowIcon ${isOpen && "rotate"}`}
        />
      </button>
      <div
        id="collapse-content"
        className={`collapse__content ${isOpen && "collapse__content--open"}`}
      >
        {children}
      </div>
    </div>
  );
};

// Define propTypes for the component
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  borderRadius: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string,
};

// Define defaultProps for the component
Collapse.defaultProps = {
  borderRadius: "5px",
  fontSize: "1.5rem",
  height: "47px",
};

export default Collapse;
