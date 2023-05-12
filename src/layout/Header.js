import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import logoHeader from "../assets/logoHeader.svg"

function Header() {
  return (
    <header className="header">
      <Logo src={logoHeader} />
      <NavBar />
    </header>
  );
}

export default Header;
