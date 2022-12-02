import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/connexion">Connexion</Link>
        </li>
        <li>
          <Link to="/">Contacts</Link>
        </li>
        <li>
          <Link to="/favoris">Favoris</Link>
        </li>
        <li>
          <Link to="/popularity">Popularité</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
