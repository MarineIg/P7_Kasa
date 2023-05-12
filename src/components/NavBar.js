import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header__nav">
      <ul>
          <li>
            <NavLink to="/" className={(nav) => (nav.isActive ? "header__nav--active" : "" )}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "header__nav--active" : "" )}>A Propos</NavLink>
          </li>
      </ul>
    </nav>
  );
};

export default NavBar;
