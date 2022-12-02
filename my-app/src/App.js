import React, { useState, useContext } from "react";
import personItems from "./data/data.js";
import DisplayPerson from "./components/DisplayPerson";
import AddPerson from "./components/AddPerson";
import "./App.css";
import Synthesis from "./components/Synthesis.jsx";

import VisibleContext, {
  VisibleContextProvider,
} from "./contexts/VisibleContext";

function App() {
  return (
    <VisibleContextProvider>
      <div className="App">
        <DisplayPerson />
        <AddPerson role="add" />
        <Synthesis />
      </div>
    </VisibleContextProvider>
  );
}

export default App;
