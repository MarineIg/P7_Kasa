import PropTypes from "prop-types";
import Star from "../assets/star.svg";

/**
 * This component displays a star rating.
 * @param {object} props - The props for the component.
 * @param {number} props.rating - This rating to display.
 * @returns {JSX.Element} The StarRating component.
 */

const StarRating = ({ rating }) => {
  const score = [1, 2, 3, 4, 5];

  return (
    <div className="starRating">
      {score.map((rateElem, index) => (
        <svg
          key={`star ${index}`}
          width="25"
          height="24"
          className={`star
            ${rating >= rateElem ? "star--filled" : "star--empty"}`}
        >
          <use xlinkHref={`${Star}#Icon-Star`} />
        </svg>
      ))}
    </div>
  );
};

// Define propTypes for the component
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
