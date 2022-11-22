import React from "react";
import { PersonContextProvider } from "./contexts/PersonContext";
import DisplayPerson from "./components/DisplayPerson";
import AddPerson from "./components/AddPerson";
import "./App.css";

function App() {
  return (
    <PersonContextProvider>
      <div className="App">
        <DisplayPerson />
        <AddPerson />
      </div>
    </PersonContextProvider>
  );
}

export default App;
