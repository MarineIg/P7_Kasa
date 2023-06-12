import { useState } from "react";
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
  function handlePrevClick() {
    hasPrev ? setIndex(index - 1) : setIndex(pictures.length - 1);
  }
  function handleNextClick() {
    hasNext ? setIndex(index + 1) : setIndex(0);
  }

  let currentPicture = pictures[index];

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
