import React, { useState, useEffect } from "react";
import personItems from "./data/data.js";
import DisplayPerson from "./components/DisplayPerson";
import AddPerson from "./components/AddPerson";
import "./App.css";

function App() {
  const [persons, setPersons] = useState(personItems);

  const [isLoading, setIsLoading] = useState(true);
  // const [tmpPersons, setTmpPersons] = useState([]);

  const handleAddPerson = (personToAdd) => {
    const tmpPersons = [...persons, ...personToAdd];
    console.log(tmpPersons);
    setPersons(tmpPersons);
  };

  useEffect(() => {
    console.log(persons);
    setIsLoading(false);
  }, [persons]);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading">...chargement</div>
      ) : (
        <DisplayPerson persons={persons} />
      )}
      <AddPerson
        // handleAddPerson={(personToAdd) => handleAddPerson(personToAdd)}
        handleAddPerson={handleAddPerson}
      />
    </div>
  );
}

export default App;
