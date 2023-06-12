import logoFooter from "../assets/logoFooter.svg";
import Logo from "../components/Logo";

/**
 * The Footer Layout.
 * This layout is used on all pages of the application.It displays the footer with a logo that scrolls to the top of
 * the page when clicked, and copyright information with the current year.
 * @returns {JSX.Element} The Footer layout.
 */

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
