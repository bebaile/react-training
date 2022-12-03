import React from "react";
import axios from "axios";

const Connexion = () => {
  const API = "";

  axios.get("http://localhost:5000/").then((result) => {
    console.log(result);
  });
  return <div className="Connexion">connexion</div>;
};

export default Connexion;
