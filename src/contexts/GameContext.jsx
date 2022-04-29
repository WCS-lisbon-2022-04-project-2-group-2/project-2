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
  const [wildFaint, setWildFaint] = useState("");
  const [starterFaint, setStarterFaint] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [wildAttackDamage, setWildAttackDamage] = useState();
  const [wildAttackName, setWildAttackName] = useState("");
  const [starterAttackDamage, setStarterAttackDamage] = useState();
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
        wildAttackDamage, setWildAttackDamage,
        wildAttackName, setWildAttackName,
        starterAttackDamage, setStarterAttackDamage,
        starterAttackName, setStarterAttackName
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;

