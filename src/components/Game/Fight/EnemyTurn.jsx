import React, { useContext, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";

function EnemyTurn() {
  const {
    wildHealth,
    setTextMessageOne,
    setWildFaint,
    setGameOver,
    wildPokemon,
    starterHealth,
    setStarterHealth,
    setStarterFaint,
    setStarterTurnOver,
    setWildTurnOver,
    setWinPokemon,
  } = useContext(GameContext);

  const nameWildPokemon = wildPokemon.name.toUpperCase();
  const moveWild1 = wildPokemon.moves[0].move.name.toUpperCase();
  const moveWild2 = wildPokemon.moves[1].move.name.toUpperCase();
  const moveWild3 = wildPokemon.moves[2].move.name.toUpperCase();
  const moveWild4 = wildPokemon.moves[3].move.name.toUpperCase();
  const wildMoves = [moveWild1, moveWild2, moveWild3, moveWild4];

  useEffect(() => {
    //if enemy health reaches 0, fight is over
    if (wildHealth <= 0) {
      setWildFaint(true);
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    } else if (starterHealth <= 0) {
      setStarterFaint(true);
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    }
  }, [setGameOver, setStarterFaint, setWildFaint, starterHealth, wildHealth]);

  const enemyTurn = (attack) => {
    const effectiveness = Number.parseFloat(Math.random() * (50 - 10) + 10).toFixed(0)
    // if enemy is still alive, proceed with enemy turn

    if (starterHealth - effectiveness <= 0) {
      setStarterHealth(0);
      setTextMessageOne(
        `${nameWildPokemon} used ${attack} for ${effectiveness} damage!`
      );
      setWinPokemon(nameWildPokemon);
    } else {
      setStarterHealth(starterHealth - effectiveness);
      setTextMessageOne(
        `${nameWildPokemon} used ${attack} for ${effectiveness} damage!`
      );
    }
    setTimeout(() => {
      setTextMessageOne("");
    }, 3000);
  };

  const handleEnemyTurn = () => {
    const moveNumber = Math.floor(Math.random() * 4); // results: 0...3
    const wildAttackName = wildMoves[moveNumber];
    enemyTurn(wildAttackName);
    setTimeout(() => {
      setStarterTurnOver(false);
      setWildTurnOver(true);
    }, 3000);
  };

  return (
    <div className="battle-text-content">
      <p id="play-again-text" onClick={() => handleEnemyTurn()}>
        CLICK TO CONTINUE
      </p>
      {/* <button onClick={()=>handleEnemyTurn()}>CLICK TO CONTINUE</button> */}
    </div>
  );
}

export default EnemyTurn;
