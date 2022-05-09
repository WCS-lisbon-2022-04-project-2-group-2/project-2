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

  const nameWildPokemon = wildPokemon[0].name.toUpperCase();
  console.log(wildPokemon[0].moves.length - 1)
  //randomize attacks
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getRandomInts(num) {
    let moves = [];
    console.log(moves)
    while (moves.length < num) {
      let randNum = getRandomInt(0, wildPokemon[0].moves.length - 1);
      if (moves.indexOf(randNum) === -1) {
        moves.push(randNum);
      }
    }
    return moves;
  }
  let moves = getRandomInts(4);
  let wildMoves = [];
  moves.map(el => wildMoves.push(wildPokemon[0].moves[el].move.name.toUpperCase()))
  console.log(wildMoves)
  console.log(wildPokemon[0].moves.length - 1)
  // const moveWild1 = wildPokemon[0].moves[0].move.name.toUpperCase();
  // const moveWild2 = wildPokemon[0].moves[1].move.name.toUpperCase();
  // const moveWild3 = wildPokemon[0].moves[2].move.name.toUpperCase();
  // const moveWild4 = wildPokemon[0].moves[3].move.name.toUpperCase();
  // const wildMoves = [moveWild1, moveWild2, moveWild3, moveWild4];

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
    const effectiveness = Number.parseFloat(Math.random()).toFixed(2);
    let damage;
    if (effectiveness >= 0.9) {
      damage = Number.parseFloat(Math.random() * (50 - 41) + 41).toFixed(0);
    } else if (effectiveness >= 0.5 && effectiveness < 0.9) {
      damage = Number.parseFloat(Math.random() * (40 - 31) + 31).toFixed(0);
    } else {
      damage = Number.parseFloat(Math.random() * (30 - 15) + 15).toFixed(0);
    }
    if (starterHealth - damage <= 0) {
      setStarterHealth(0);
      setTextMessageOne(
        `${nameWildPokemon} used ${attack} for ${damage} damage!`
      );
      setWinPokemon(nameWildPokemon);
    } else {
      setStarterHealth(starterHealth - damage);
      setTextMessageOne(
        `${nameWildPokemon} used ${attack} for ${damage} damage!`
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
