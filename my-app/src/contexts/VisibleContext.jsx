import React, { createContext, useState } from "react";
import personItems from "../data/data.js";

const VisibleContext = createContext();

export const VisibleContextProvider = ({ children }) => {
  const [persons, setPersons] = useState(personItems);

  const handleAddPerson = (personToAdd, role, index) => {
    if (role === "add") {
      const tmpPersons = [...persons, ...personToAdd];
      setPersons(tmpPersons);
    }
    if (role === "modify") {
      const tmpPerson = [...persons];
      tmpPerson[index].firstname = personToAdd[0].firstname;
      tmpPerson[index].lastname = personToAdd[0].lastname;
      tmpPerson[index].age = personToAdd[0].age;
      setPersons(tmpPerson);
      displayModify(index);
    }
  };
  const handleFavorite = (index) => {
    const tmpPersons = [...persons];
    tmpPersons[index].favorite = !tmpPersons[index].favorite;
    setPersons(tmpPersons);
  };

  const handleLikes = (index) => {
    const tmpPersons = [...persons];
    tmpPersons[index].likes = tmpPersons[index].likes + 1;
    setPersons(tmpPersons);
  };

  const displayModify = (index) => {
    const tmpPersons = [...persons];
    tmpPersons[index].isVisible = !tmpPersons[index].isVisible;
    setPersons(tmpPersons);
  };

  return (
    <VisibleContext.Provider
      value={{
        persons,
        setPersons,
        handleAddPerson,
        handleFavorite,
        handleLikes,
        displayModify,
      }}
    >
      {children}
    </VisibleContext.Provider>
  );
};

export default VisibleContext;
