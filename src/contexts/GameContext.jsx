import React, { useState, createContext } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [generation, setGeneration] = useState([]);
  const [starter, setStarter] = useState();
  const [wildPokemon, setWildPokemon] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [move, setMove] = useState("");
  const [wildHealth, setWildHealth] = useState(200);
  const [starterHealth, setStarterHealth] = useState(200);
  const [textMessageOne, setTextMessageOne] = useState(" ");
  const [textMessageTwo, setTextMessageTwo] = useState("");
  const [wildFaint, setWildFaint] = useState(false);
  const [starterFaint, setStarterFaint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [wildAttackName, setWildAttackName] = useState("");
  const [starterAttackName, setStarterAttackName] = useState("");

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
        setIsSelected,
        starterHealth, 
        setStarterHealth,
        wildHealth,
        setWildHealth,
        textMessageOne, setTextMessageOne,
        textMessageTwo, setTextMessageTwo,
        wildFaint, setWildFaint,
        starterFaint, setStarterFaint,
        gameOver, setGameOver,
        wildAttackName, setWildAttackName,
        starterAttackName, setStarterAttackName
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;

