import PropTypes from "prop-types";

/**
 * Banner component with an image end optional content.
 * This component displays a backgound image and can contain additional content vie the 'children'.
 * @param {object} props - The props for the component.
 * @param {string} props.className - The CSS class to apply to the container.
 * @param {string} props.src - The URL of the image to display.
 * @param {ReactNode} props.children - The optional content to display in the banner.
 * @returns {JSX.Element} The banner component.
 */

const Banner = ({ className, src, children }) => {
  return (
    <div className={className}>
      <img src={src} alt="Paysage" className="banner__img" />
      {children ? children : ""}
    </div>
  );
};

// Define propTypes for the component
Banner.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Banner;
