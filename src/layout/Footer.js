import React from "react";
import Logo from "../components/Logo";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <span onClick={handleLogoClick}>
          <Logo src={logoFooter} />
        </span>
        <p>&copy; {currentYear} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
