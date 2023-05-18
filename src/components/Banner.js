import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <img src={props.src} alt={props.alt} className="banner__img" />
      {props.children ? props.children : ""}
    </div>
  );
};

export default Banner;
