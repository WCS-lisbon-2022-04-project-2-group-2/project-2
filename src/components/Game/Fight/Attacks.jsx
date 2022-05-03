import React, { useContext, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";

const getPlayerAttackDamage = (effectiveness) => {
  if (effectiveness >= 0.9) {
    return 50;
  } else if (effectiveness >= 0.5 && effectiveness < 0.9) {
    return 30;
  } else {
    return 10;
  }
};

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
    setStarterHealth,
    setStarterFaint
  } = useContext(GameContext);

  const nameWildPokemon = wildPokemon[0].name.toUpperCase();
  const moveWild1 = wildPokemon[0].moves[0].move.name.toUpperCase();
  const moveWild2 = wildPokemon[0].moves[1].move.name.toUpperCase();
  const moveWild3 = wildPokemon[0].moves[2].move.name.toUpperCase();
  const moveWild4 = wildPokemon[0].moves[3].move.name.toUpperCase();
  const wildMoves = [moveWild1, moveWild2, moveWild3, moveWild4];

  const nameStarter = starter[0].name.toUpperCase();

  useEffect(() => {
    //if enemy health reaches 0, fight is over
    if (wildHealth <= 0 ) {
      setTextMessageOne(`${nameWildPokemon} fainted.`);
      setTextMessageTwo(`${nameStarter} wins!`);
      setWildFaint(true);
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    }
    else if(starterHealth <= 0){
      setTextMessageOne(`${nameStarter} fainted.`);
      setTextMessageTwo(`${nameWildPokemon} wins!`);
      setStarterFaint(true);
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    }
  }, [
    wildHealth,
    starterHealth,
    nameWildPokemon,
    nameStarter,
    setGameOver,
    setTextMessageOne,
    setTextMessageTwo,
    setWildFaint,
    setStarterFaint
  ]);

  const enemyTurn = (attack) => {
    const effectiveness = Number.parseFloat(
      Math.random() * (0.99 - 0.01) + 0.01
    ).toFixed(2);
    // if enemy is still alive, proceed with enemy turn

    if (starterHealth <= 0) {
      setStarterHealth(0);
      setTextMessageOne(
        `${nameWildPokemon} used ${attack} for ${getPlayerAttackDamage(
          effectiveness
        )} damage!`
      );
    } else {
      setStarterHealth(starterHealth - getPlayerAttackDamage(effectiveness));
      setTextMessageOne(
        `${nameWildPokemon} used ${attack} for ${getPlayerAttackDamage(
          effectiveness
        )} damage!`
      );
    }
    setTimeout(() => {
      setTextMessageOne("");
    }, 3000);
  };

  const handleAttackClick = (attack) => {
    const effectiveness = Number.parseFloat(
      Math.random() * (0.99 - 0.01) + 0.01
    ).toFixed(2);
    // use getPlayerAttackDamage to calculate enemy health and adjust progress bar
    if (wildHealth - getPlayerAttackDamage(effectiveness) <= 0) {
      setWildHealth(0);
      setTextMessageOne(
        `${nameStarter} used ${attack} for ${getPlayerAttackDamage(
          effectiveness
        )} damage!`
      );
    } else {
      setWildHealth(wildHealth - getPlayerAttackDamage(effectiveness));
      setTextMessageOne(
        `${nameStarter} used ${attack} for ${getPlayerAttackDamage(
          effectiveness
        )} damage!`
      );
    }

    setTimeout(() => {
      const moveNumber = Math.floor(Math.random() * 4); // results: 0...3
      const wildAttackName = wildMoves[moveNumber];

      // once the state is changed, start enemy turn
      enemyTurn(wildAttackName);
    }, 3000);
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
