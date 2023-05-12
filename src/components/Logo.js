import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link to="/">
      <img src={props.src} alt="Logo du site kasa" />
    </Link>
  );
};

export default Logo;
