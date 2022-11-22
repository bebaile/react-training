import React, { useContext } from "react";
import PersonContext from "../contexts/PersonContext";
import Person from "./Person";

const DisplayPerson = () => {
  const { persons } = useContext(PersonContext);
  console.log(persons);
  return (
    <div>
      {persons.map((person, id) => {
        return <Person {...person} key={id} />;
      })}
    </div>
  );
};

export default DisplayPerson;
