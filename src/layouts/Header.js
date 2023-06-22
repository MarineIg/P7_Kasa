import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

/**
 * The Header layout.
 * This layout is used on all pages of the application.
 * It displays the header of the page with a logo and navigation link.
 * @returns {JSX.Element} The Header layout.
 */

const Header = () => {
  return (
    <header className="header">
      <Logo location="header" />
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "header__nav--active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "header__nav--active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
