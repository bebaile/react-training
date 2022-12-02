import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar.jsx";

import "./App.css";

import VisibleContext, {
  VisibleContextProvider,
} from "./contexts/VisibleContext";

function App() {
  return (
    <Router>
      <VisibleContextProvider>
        <>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Contacts />} />
            </Routes>
          </div>
        </>
      </VisibleContextProvider>
    </Router>
  );
}

export default App;
