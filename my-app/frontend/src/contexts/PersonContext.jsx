// difficulté à faire fonctionner ce context, car l'état que je veux modifier est systématiquement réinitialisé, je mets donc de coté l'utilisation de contextes

import React, { useState, createContext } from "react";

const PersonContext = createContext();

export default PersonContext;

export const PersonContextProvider = ({ children }) => {
  const [persons, setPersons] = useState([
    {
      firstname: "Basile",
      lastname: "Carle",
      age: "40",
    },
    {
      firstname: "Manon",
      lastname: "Carle",
      age: "5",
    },
  ]);

  console.log("je remets à zéro persons");

  return (
    <PersonContext.Provider value={{ persons, setPersons }}>
      {children}
    </PersonContext.Provider>
  );
};
