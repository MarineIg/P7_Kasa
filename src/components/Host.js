import PropTypes from "prop-types";
import StarRating from "./StarRating";

/**
 * This component displays the host information and rating for a housing.
 * @param {object} props - The props for the component. 
 * @param {number} props.rating - This rating of the housing.
 * @param {object} props.host - The host information.
 * @param {string} props.host.name - The name of host.
 * @param {string} props.host.picture - The picture of host.
 * @returns {JSX.Element} The Host component.
 */

const Host = ({ rating, host }) => {
  // Split the host name into first and last name
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

// Define propTypes for the component
Host.propTypes = {
  rating: PropTypes.number.isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Host;
