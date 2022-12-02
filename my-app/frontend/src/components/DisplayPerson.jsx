import React, { useContext } from "react";
import Person from "./Person";
import VisibleContext from "../contexts/VisibleContext";

const DisplayPerson = () => {
  const { persons } = useContext(VisibleContext);

  return (
    <div>
      {persons.map((person, index) => {
        return <Person person={person} key={index} index={index} />;
      })}
    </div>
  );
};

export default DisplayPerson;
