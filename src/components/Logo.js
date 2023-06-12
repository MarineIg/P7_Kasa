import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * This component displays the application logo.
 * It's a link to home page.
 * @param {object} props - The props for the component.
 * @param {string} props.src - The URL of the logo to display.
 * @returns {JSX.Element} The Logo component.
 */

const Logo = ({ src }) => {
  return (
    <Link to="/">
      <img src={src} alt="Logo du site kasa" />
    </Link>
  );
};

// Define propTypes for the component
Logo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Logo;
