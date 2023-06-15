import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SelectedHousingIdContext } from "../contexts/SelectedHousingContext";

/**
 * This component displays the pictures and the title of card. It passes the card id in the url.
 * @param {object} props - The props for the component.
 * @param {string} props.src - The URL of the image to display.
 * @param {string} props.title - The title of the card to display.
 * @param {string} props.id - The ID of the card to pass in the url.
 * @returns {JSX.Element} The Card component.
 */

const Card = ({ src, title, id }) => {
  // Define the location URL
  const location = `/locations/${id}`;
  const { setSelectedHousingId } = useContext(SelectedHousingIdContext);
  const handleClick = () => {
    setSelectedHousingId(id);
  };

  return (
    <Link to={location} onClick={handleClick}>
      <div className="card">
        <img src={src} alt="location" className="card__img" />
        <h3 className="card__title">{title}</h3>
      </div>
    </Link>
  );
};

// Define propTypes for the component
Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
