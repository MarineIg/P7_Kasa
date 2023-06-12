import { Link } from "react-router-dom";

/**
 * The NotFound page.
 * This page displays a 404 not found page with a link to return to the home page.
 * @returns {JSX.Element} The NotFound page.
 */

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <h2 className="notFound__subtitle">
        <span>Oups! La page que </span>vous demandez n'existe pas.
      </h2>
      <Link to="/">
        <p className="notFound__link">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default NotFound;
