import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <h2 className="notFound__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/">
        <p className="notFound__link">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default NotFound;
