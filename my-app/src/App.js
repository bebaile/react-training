import React, { useEffect, useState, useRef } from "react";
import DisplayPerson from "./components/DisplayPerson";
import AddPerson from "./components/AddPerson";
import "./App.css";

function App() {
  const persons = [
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
  ];

  const [tmpPersons, setTmpPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const counter = useRef(0);
  const handleAddPerson = (personToAdd) => {
    setTmpPersons(...tmpPersons, personToAdd);
  };
  useEffect(() => {
    setIsLoading(false);
  }, [tmpPersons]);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading">... Chargement en cours</div>
      ) : (
        <DisplayPerson persons={persons} tmpPersons={tmpPersons} />
      )}

      <AddPerson
        handleAddPerson={(personToAdd) => handleAddPerson(personToAdd)}
      />
    </div>
  );
}

export default App;
