import React from 'react';
import { Route, Routes } from "react-router-dom";
import CharactersList from './components/Pokedex/CharactersList/CharactersList';
import NavBarElements from './components/NavBar/NavBarElements'
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <NavBarElements /> */}
      <Routes>
        <Route path="/Character" element={<CharactersList />}></Route>
      </Routes>
    </div>
  );
}

export default App;