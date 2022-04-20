import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Pokedex from './components/PokedexPage/Pokedex/Pokedex';
import NavBarElements from './components/NavBar/NavBarElements'
import NavBar from './components/NavBar/NavBar';
import PokedexPage from './components/PokedexPage/PokedexPage';
import { PokedexContextProvider } from './contexts/PokedexContext';
import MyPokemon from './components/PokedexPage/Pokedex/MyPokemon/MyPokemon';
import ChooseStarter from'./components/Game/ChooseStarter/ChooseStarter';
import ChooseGeneration from './components/Game/ChooseGeneration/ChooseGeneration';

import { GameContextProvider } from './contexts/GameContext';


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavBarElements />
      <PokedexContextProvider>
        <Routes>
          <Route path="/pokedex-page" element={<PokedexPage />}></Route>
          <Route path="/pokedex-page/pokedex" element={<Pokedex />}></Route>
          <Route path="/pokedex-page/my-pokemon" element={<MyPokemon />}></Route>
        </Routes>
      </PokedexContextProvider>
      <GameContextProvider>
        <Routes>
          <Route path="/game/choose-generation" element={<ChooseGeneration />}></Route>
          <Route path="/game/choose-starter" element={<ChooseStarter />}></Route>
        </Routes>
      </GameContextProvider>
    </div>
  );
}

export default App; 