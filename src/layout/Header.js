import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import logoHeader from "../assets/logoHeader.svg";

function Header() {
  return (
    <header className="header">
      <Logo src={logoHeader} />
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
}

export default Header;
