import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Pokedex from './components/Characters/Pokedex/Pokedex';
import NavBarElements from './components/NavBar/NavBarElements'
import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <NavBarElements /> */}
      <Routes>
        <Route path="/pokedex" element={<Pokedex />}></Route>
      </Routes>
    </div>
  );
}

export default App; 