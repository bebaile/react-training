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

  return (
    <PersonContext.Provider value={{ persons, setPersons }}>
      {children}
    </PersonContext.Provider>
  );
};
