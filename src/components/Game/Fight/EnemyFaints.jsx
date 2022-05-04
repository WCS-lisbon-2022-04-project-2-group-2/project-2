import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";

function EnemyFaints() {
  const {
    setTextMessageOne,
    setTextMessageTwo,
    setWildFaint,
    setGameOver,
    starter,
    wildPokemon,
  } = useContext(GameContext);

  const nameWildPokemon = wildPokemon.name.toUpperCase();
  const nameStarter = starter[0].name.toUpperCase();

  const handleFinalPart = () => {
    setTextMessageOne(`${nameWildPokemon} fainted.`);
    setTextMessageTwo(`${nameStarter} wins!`);
    setWildFaint(true);
    setTimeout(() => {
      setGameOver(true);
    }, 3000);
  };

  return (
    <div className="battle-text-content">
      <p id="play-again-text" onClick={() => handleFinalPart()}>
        CLICK TO CONTINUE
      </p>
    </div>
  );
}

export default EnemyFaints;
