import React from "react";
import arrow from "../assets/arrow.svg";
import { useState } from "react";

const Slideshow = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const hasPrev = index > 0;
  const hasNext = index < pictures.length - 1;

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

export default Slideshow;
