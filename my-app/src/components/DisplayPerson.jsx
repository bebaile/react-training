import React from "react";
import Person from "./Person";

const DisplayPerson = ({ persons, handleFavorite, handleLikes }) => {
  return (
    <div>
      {persons.map((person, id) => {
        return (
          <Person
            person={person}
            key={id}
            handleFavorite={() => handleFavorite(id)}
            handleLikes={() => handleLikes(id)}
          />
        );
      })}
    </div>
  );
};

export default DisplayPerson;
