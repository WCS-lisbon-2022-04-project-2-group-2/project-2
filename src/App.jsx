import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Pokedex from "./components/PokedexPage/Pokedex/Pokedex";
import NavBarElements from "./components/NavBar/NavBarElements";
import NavBar from "./components/NavBar/NavBar";
import PokedexPage from "./components/PokedexPage/PokedexPage";
import { PokedexContextProvider } from "./contexts/PokedexContext";
import MyPokemon from "./components/PokedexPage/Pokedex/MyPokemon/MyPokemon";
import ChooseStarter from "./components/Game/ChooseStarter/ChooseStarter";
import StarterCard from "./components/Game/ChooseStarter/StarterCard/StarterCard";
import ChooseGeneration from "./components/Game/ChooseGeneration/ChooseGeneration";
import { GameContextProvider } from "./contexts/GameContext";
import HomePage from "./components/HomePage/HomePage";
import PokemonCard from "./components/PokedexPage/Pokedex/PokemonCard/PokemonCard";
import PokemonRegion from "./components/Game/PokemonRegion/PokemonRegion";
import WildPokemon from "./components/Game/WildPokemon/WildPokemon";
import LostBattle from "./components/Game/LostBattle/LostBattle";
import RestartGame from "./components/Game/RestartGame/RestartGame";
import About from "./components/About/About";
import Fight from "./components/Game/Fight/Fight";
import Captured from "./components/Game/Captured/Captured";
import Capture from "./components/Game/Capture/Capture";

import "./App.css";

function App() {
  const location = useLocation();
  const isGameUrl = location.pathname.includes("/game");

  return (
    <div className="App">
      {isGameUrl ? <NavBar /> : <NavBarElements />}

      <PokedexContextProvider>
        <GameContextProvider>
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/pokedex-page" element={<PokedexPage />}></Route>
            <Route path="/pokedex-page/pokedex" element={<Pokedex />}></Route>
            <Route path="/pokedex-page/pokedex/:id" element={<PokemonCard />}></Route>
            <Route path="/pokedex-page/my-pokemon"element={<MyPokemon />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/game/choose-generation" element={<ChooseGeneration />}></Route>
            <Route path="/game/choose-starter" element={<ChooseStarter />}></Route>
            <Route path="/game/starter-card" element={<StarterCard />}></Route>
            <Route path="/game/choose-region" element={<PokemonRegion />}></Route>
            <Route path="/game/wild-pokemon/:region/:id" element={<WildPokemon />}></Route>
            <Route path="/game/fight" element={<Fight />}></Route>
            <Route path="/game/captured" element={<Captured />}></Route>
            <Route path="/game/capture" element={<Capture />}></Route>
            <Route path="/game/lost-battle" element={<LostBattle />} />
            <Route path="/game/restart-game/" element={<RestartGame />} />
          </Routes>
        </GameContextProvider>
      </PokedexContextProvider>
    </div>
  );
}

export default App;
