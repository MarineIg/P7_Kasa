import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/logo.svg";

/**
 * This component displays the application logo.
 * It's a link to home page.
 * @param {object} props - The props for the component.
 * @param {string} props.location - The location of the logo ("header" or "footer") used to determine the css class to apply.
 * @returns {JSX.Element} The Logo component.
 */

const Logo = ({ location }) => {
  return (
    <Link to="/">
      <svg className={`logo-${location}`}>
        <use xlinkHref={`${logo}#logo`} />
      </svg>
    </Link>
  );
};

// Define propTypes for the component
Logo.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Logo;
