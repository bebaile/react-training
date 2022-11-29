import React, { useState } from "react";
import personItems from "./data/data.js";
import DisplayPerson from "./components/DisplayPerson";
import AddPerson from "./components/AddPerson";
import "./App.css";

function App() {
  const [persons, setPersons] = useState(personItems);

  const handleAddPerson = (personToAdd) => {
    const tmpPersons = [...persons, ...personToAdd];
    setPersons(tmpPersons);
  };

  const handleFavorite = (index) => {
    console.log("coucou");
    const tmpPersons = [...persons];
    tmpPersons[index].favorite = !tmpPersons[index].favorite;
    setPersons(tmpPersons);
  };

  return (
    <div className="App">
      <DisplayPerson persons={persons} handleFavorite={handleFavorite} />
      <AddPerson handleAddPerson={handleAddPerson} />
    </div>
  );
}

export default App;
