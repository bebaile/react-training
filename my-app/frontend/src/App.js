import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Connexion from "./pages/Connexion";
import Favorites from "./pages/Favorites";
import Popularity from "./pages/Popularity";
import NavBar from "./components/NavBar.jsx";

import "./App.css";

import { VisibleContextProvider } from "./contexts/VisibleContext";

function App() {
  return (
    <Router>
      <VisibleContextProvider>
        <>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/favoris" element={<Favorites />} />
              <Route path="/popularity" element={<Popularity />} />
            </Routes>
          </div>
        </>
      </VisibleContextProvider>
    </Router>
  );
}

export default App;
