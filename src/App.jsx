import React from 'react';
import { Route, Routes } from "react-router-dom";

import CharactersList from './components/Pokedex/CharactersList/CharactersList';
import NavBarElements from './components/NavBar/NavBarElements'


function App() {
  return (
    <div className="App">
      <NavBarElements />
      <Routes>
        <Route path="/Character" element={<CharactersList />}></Route>
      </Routes>
    </div>
  );
}

export default App;