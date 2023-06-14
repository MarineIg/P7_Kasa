import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import arrow from "../assets/arrow.svg";

/**
 * This component displays a slideshow of pictures.
 * @param {object} props - The props for the component.
 * @param {string[]} props.pictures - The list of pictures to display in the slideshow.
 * @returns {JSX.Element} The SlideShow component.
 */

const Slideshow = ({ pictures }) => {
  // State for the current picture index
  const [index, setIndex] = useState(0);

  // Determine if there is a previous and next picture
  const hasPrev = index > 0;
  const hasNext = index < pictures.length - 1;

  // Handle clicks on the previous and next buttons
  const handlePrevClick = () => {
    hasPrev ? setIndex(index - 1) : setIndex(pictures.length - 1);
  };

  const handleNextClick = () => {
    hasNext ? setIndex(index + 1) : setIndex(0);
  };

  let currentPicture = pictures[index];

  // Use useEffect to update the current picture index every 5 seconds
  useEffect(() => {
    // Create an interval to update the index every 5 seconds
    const interval = setInterval(() => {
      // Use setIndex to update the current picture index
      setIndex((prevIndex) =>
        // If we are at the last picture, set the index to 0
        // Otherwise, move to the next picture
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    // Stop the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [pictures]);

  return (
    <div className="slideshow">
      <img src={currentPicture} alt="img" className="slideshow__img" />
      {pictures.length > 1 ? (
        <>
          <span onClick={handlePrevClick}>
            {" "}
            <img
              src={arrow}
              alt="flèche gauche"
              className="slideshow__arrow slideshow__arrow--previous"
            />
          </span>
          <span onClick={handleNextClick}>
            <img
              src={arrow}
              alt="flèche droite"
              className="slideshow__arrow slideshow__arrow--next"
            />
          </span>
          <span className="slideshow__counter">
            {index + 1}/{pictures.length}
          </span>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

// Define propTypes for the component
Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
