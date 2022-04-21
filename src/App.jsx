import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Pokedex from "./components/PokedexPage/Pokedex/Pokedex";
import NavBarElements from "./components/NavBar/NavBarElements";
import NavBar from "./components/NavBar/NavBar";
import PokemonCard from "./components/Characters/PokemonCard/PokemonCard";
import PokemonRegion from "./components/Characters/PokemonRegion/PokemonRegion";
import WildPokemon from "./components/Characters/WildPokemon/WildPokemon";
import PokedexPage from "./components/PokedexPage/PokedexPage";
import { PokedexContextProvider } from "./contexts/PokedexContext";
import MyPokemon from "./components/PokedexPage/Pokedex/MyPokemon/MyPokemon";

import "./App.css";

function App() {
  const location = useLocation();
  const isHomeLocation = location.pathname === "/";
  console.log("isHomeLocation", isHomeLocation);

  return (
    <PokedexContextProvider>
      <div className="App">
        {isHomeLocation ? <NavBarElements /> : <NavBar />}

        <Routes>
          <Route path="/" />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonCard />} />
          <Route path="/pokedex-page" element={<PokedexPage />} />
          <Route path="/choose-region" element={<PokemonRegion />} />
          <Route path="/wild-pokemon/:region/:id" element={<WildPokemon />} />
          <Route path="/my-pokemon" element={<MyPokemon />} />
        </Routes>
      </div>
    </PokedexContextProvider>
  );
}

export default App;
