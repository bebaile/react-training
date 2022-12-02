import React, { createContext, useState } from "react";
import personItems from "../data/data.js";

const VisibleContext = createContext();

export const VisibleContextProvider = ({ children }) => {
  const [persons, setPersons] = useState(personItems);

  const handleAddPerson = (personToAdd, role, index) => {
    console.log(personToAdd[0].firstname);
    console.log(personToAdd);
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

  const [isVisible, setIsVisible] = useState(false);
  return (
    <VisibleContext.Provider
      value={{
        isVisible,
        setIsVisible,
        persons,
        setPersons,
        handleAddPerson,
        handleFavorite,
        handleLikes,
      }}
    >
      {children}
    </VisibleContext.Provider>
  );
};

export default VisibleContext;
