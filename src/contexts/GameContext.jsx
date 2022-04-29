import React, { useState, createContext } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [generation, setGeneration] = useState([]);
  const [chosenStarter, setChosenStarter] = useState([]);
  const [wildPokemon, setWildPokemon] = useState("");
  const [winPokemon, setWinPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon/1"
  );


  return (
    <GameContext.Provider
      value={{
        generation,
        setGeneration,
        chosenStarter,
        setChosenStarter,
        wildPokemon,
        setWildPokemon,
        winPokemon,
        setWinPokemon,

      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
