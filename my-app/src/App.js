import React, { useState } from "react";
import personItems from "./data/data.js";
import DisplayPerson from "./components/DisplayPerson";
import AddPerson from "./components/AddPerson";
import "./App.css";
import Synthesis from "./components/Synthesis.jsx";

function App() {
  const [persons, setPersons] = useState(personItems);

  const handleAddPerson = (personToAdd) => {
    const tmpPersons = [...persons, ...personToAdd];
    setPersons(tmpPersons);
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

  return (
    <div className="App">
      <DisplayPerson
        persons={persons}
        handleFavorite={handleFavorite}
        handleLikes={handleLikes}
      />
      <AddPerson handleAddPerson={handleAddPerson} />
      <Synthesis persons={persons} />
    </div>
  );
}

export default App;
