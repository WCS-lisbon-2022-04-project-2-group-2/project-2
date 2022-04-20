import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Pokedex from './components/PokedexPage/Pokedex/Pokedex';
import NavBarElements from './components/NavBar/NavBarElements'
import NavBar from './components/NavBar/NavBar';
import PokedexPage from './components/PokedexPage/PokedexPage';
import { PokedexContextProvider } from './contexts/PokedexContext';
import MyPokemon from './components/PokedexPage/Pokedex/MyPokemon/MyPokemon';



function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavBarElements />
      <PokedexContextProvider>
        <Routes>
          <Route path="/pokedex-page" element={<PokedexPage />}></Route>
          <Route path="/pokedex" element={<Pokedex />}></Route>
          <Route path="/my-pokemon" element={<MyPokemon />}></Route>
        </Routes>
      </PokedexContextProvider>
    </div>
  );
}

export default App; 