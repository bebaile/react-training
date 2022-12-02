import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/connexion">Connexion</Link>
      </div>
      <div>
        <Link to="/">Contacts</Link>
      </div>
      <div>
        <Link to="/favoris">Favoris</Link>
      </div>
      <div>
        <Link to="/popularity">Popularité</Link>
      </div>
    </div>
  );
};

export default NavBar;
