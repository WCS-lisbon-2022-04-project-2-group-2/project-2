import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Pokedex from './components/Characters/Pokedex/Pokedex';
import NavBarElements from './components/NavBar/NavBarElements'
import NavBar from './components/NavBar/NavBar';


import { PokedexContextProvider } from './contexts/PokedexContext';



function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavBarElements />
      <PokedexContextProvider>
        <Routes>
          <Route path="/pokedex" element={<Pokedex />}></Route>
        </Routes>
      </PokedexContextProvider>
    </div>
  );
}

export default App; 