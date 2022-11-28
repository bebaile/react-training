import React from "react";
import Person from "./Person";

const DisplayPerson = ({ persons, tmpPersons }) => {
  let personsToDisplay = [];
  tmpPersons.length === 0
    ? (personsToDisplay = [...persons])
    : (personsToDisplay = [...persons, tmpPersons]);
  return (
    <div>
      {personsToDisplay.map((person, id) => {
        return <Person {...person} key={id} />;
      })}
    </div>
  );
};

export default DisplayPerson;
