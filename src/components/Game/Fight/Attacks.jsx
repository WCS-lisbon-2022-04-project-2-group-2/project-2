import React, { useContext, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";

function Attacks({ el }) {
  const {
    wildHealth,
    setWildHealth,
    setTextMessageOne,
    setTextMessageTwo,
    setWildFaint,
    setGameOver,
    starter,
    wildPokemon,
    starterHealth,
    setStarterFaint,
    setStarterTurnOver,
    setWildTurnOver,
    setWinPokemon,
  } = useContext(GameContext);

  const nameWildPokemon = wildPokemon[0].name.toUpperCase();
  const nameStarter = starter[0].name.toUpperCase();

  useEffect(() => {
    //if enemy health reaches 0, fight is over
    if (wildHealth <= 0) {
      setTextMessageOne(`${nameWildPokemon} fainted.`);
      setTextMessageTwo(`${nameStarter} wins!`);
      setWildFaint(true);
      setTimeout(() => {
        setGameOver(true);
      }, 1000);
    } else if (starterHealth <= 0) {
      setTextMessageOne(`${nameStarter} fainted.`);
      setTextMessageTwo(`${nameWildPokemon} wins!`);
      setStarterFaint(true);
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    }
  }, [
    nameStarter,
    nameWildPokemon,
    setGameOver,
    setStarterFaint,
    setTextMessageOne,
    setTextMessageTwo,
    setWildFaint,
    starterHealth,
    wildHealth,
  ]);

  const handleAttackClick = (attack) => {
    const effectiveness = Number.parseFloat(Math.random()).toFixed(2);
    let damage;
    if (effectiveness >= 0.9) {
      damage = Number.parseFloat(Math.random() * (50 - 41) + 41).toFixed(0);
    } else if (effectiveness >= 0.5 && effectiveness < 0.9) {
      damage = Number.parseFloat(Math.random() * (40 - 31) + 31).toFixed(0);
    } else {
      damage = Number.parseFloat(Math.random() * (30 - 15) + 15).toFixed(0);
    }
    // use getPlayerAttackDamage to calculate enemy health and adjust progress bar
    if (wildHealth - damage <= 0) {
      setWildHealth(0);
      setTextMessageOne(
        `${nameStarter} used ${attack} for ${damage} damage!`
      );
      setWinPokemon(nameStarter);
    } else {
      setWildHealth(wildHealth - damage);
      setTextMessageOne(
        `${nameStarter} used ${attack} for ${damage} damage!`
      );
    }

    setTimeout(() => {
      setStarterTurnOver(true);
      setWildTurnOver(false);
      setTextMessageOne("");
    }, 3000);
    // setTimeout(() => {
    //   const moveNumber = Math.floor(Math.random() * 4); // results: 0...3
    //   const wildAttackName = wildMoves[moveNumber];

    //   // once the state is changed, start enemy turn
    //   enemyTurn(wildAttackName);
    // }, 3000);
  };

  return (
    <div className="attack-container">
      <div>
        <span className="move-pointer" onClick={() => handleAttackClick(el)}>
          {el}
        </span>
      </div>
    </div>
  );
}
export default Attacks;
