import React, { useState, createContext } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [generation, setGeneration] = useState([]);
  const [starter, setStarter] = useState();
  const [wildPokemon, setWildPokemon] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [move, setMove] = useState("");

  return (
    <GameContext.Provider
      value={{
        generation,
        setGeneration,
        starter,
        setStarter,
        wildPokemon, 
        setWildPokemon,
        loading,
        setLoading,
        move, 
        setMove,
        isSelected, 
        setIsSelected
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
