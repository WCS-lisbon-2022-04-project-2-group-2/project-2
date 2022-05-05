import React, { useState, createContext } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [generation, setGeneration] = useState([]);
  const [starter, setStarter] = useState();
  const [wildPokemon, setWildPokemon] = useState();
  const [wildHealth, setWildHealth] = useState(50);
  const [starterHealth, setStarterHealth] = useState(50);
  const [textMessageOne, setTextMessageOne] = useState(" ");
  const [textMessageTwo, setTextMessageTwo] = useState("");
  const [wildFaint, setWildFaint] = useState(false);
  const [starterFaint, setStarterFaint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winPokemon, setWinPokemon] = useState("");
  //by default the starter's turn is the first, so starterTurnOver is set to false and wildTurnOver is set to true
  const [starterTurnOver, setStarterTurnOver] = useState(false);
  const [wildTurnOver, setWildTurnOver] = useState(true);

  return (
    <GameContext.Provider
      value={{
        generation,
        setGeneration,
        starter,
        setStarter,
        wildPokemon,
        setWildPokemon,
        starterHealth,
        setStarterHealth,
        wildHealth,
        setWildHealth,
        textMessageOne,
        setTextMessageOne,
        textMessageTwo,
        setTextMessageTwo,
        wildFaint,
        setWildFaint,
        starterFaint,
        setStarterFaint,
        gameOver,
        setGameOver,
        winPokemon,
        setWinPokemon,
        starterTurnOver,
        setStarterTurnOver,
        wildTurnOver,
        setWildTurnOver
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
