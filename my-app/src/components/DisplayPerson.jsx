import React from "react";
import Person from "./Person";

const DisplayPerson = ({ persons }) => {
  // let personsToDisplay = [];
  // tmpPersons.length === 0
  //   ? (personsToDisplay = [...persons])
  //   : (personsToDisplay = [...persons, tmpPersons]);
  return (
    <div>
      {persons.map((person) => {
        return <Person {...person} key={person.firstname + person.lastname} />;
      })}
    </div>
  );
};

export default DisplayPerson;
