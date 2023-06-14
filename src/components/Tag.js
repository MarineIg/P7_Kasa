import PropTypes from "prop-types";

/**
 * This component displays list of tags.
 * @param {object} props - The props for the component.
 * @param {string[]} props.tags - The list of tags to display.
 * @returns {JSX.Element} The Tag component.
 */

const Tag = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};

// Define propTypes for the component
Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag;
