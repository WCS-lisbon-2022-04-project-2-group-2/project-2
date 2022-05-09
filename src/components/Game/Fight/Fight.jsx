import React, { useContext, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";
import "./Fight.css";
import WildBox from "./WildBox";
import StarterBox from "./StarterBox";
import TextBox from "./TextBox";
import Attacks from "./Attacks";
import FightOver from "./FightOver";
import EnemyTurn from "./EnemyTurn";
import EnemyFaints from "./EnemyFaints";

function Fight() {
  const {
    starter,
    wildPokemon,
    textMessageOne,
    setTextMessageOne,
    gameOver,
    starterTurnOver,
    wildTurnOver,
    wildHealth,
  } = useContext(GameContext);

  const nameWildPokemon = wildPokemon[0].name.toUpperCase();
  const nameStarter = starter[0].name.toUpperCase();
  console.log(starter[0].moves.length - 1)

  //Define 4 random numbers that will be the index of the random moves, based on the moves array length
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getRandomInts(num) {
    let moves = [];
    while (moves.length < num) {
      let randNum = getRandomInt(0, starter[0].moves.length - 1);
      if (moves.indexOf(randNum) === -1) {
        moves.push(randNum);
      }
    }
    return moves;
  }

  //generate random moves given the 4 random numbers
  let starterMoves = [];
  const moves = getRandomInts(4);
  moves.map((el) =>
    starterMoves.push(starter[0].moves[el].move.name.toUpperCase())
  );

  // const moveStarter1 = starter[0].moves[0].move.name.toUpperCase();
  // const moveStarter2 = starter[0].moves[1].move.name.toUpperCase();
  // const moveStarter3 = starter[0].moves[2].move.name.toUpperCase();
  // const moveStarter4 = starter[0].moves[3].move.name.toUpperCase();
  // const starterMoves = [moveStarter1, moveStarter2, moveStarter3, moveStarter4];

  const startingBattle = () => {
    setTimeout(() => {
      setTextMessageOne(`Wild ${nameWildPokemon} appeared!`);
      // setWildFaint(false)
      setTimeout(() => {
        setTextMessageOne(`Go ${nameStarter}!`);
        // setStarterFaint(false)
        setTimeout(() => {
          setTextMessageOne("");
        }, 1000);
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    startingBattle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container h-100">
      <div className="row row h-100 justify-content-center align-items-center">
        <div className="col-sm-12">
          {/* BATTLE SCREEN CONTAINER */}
          <div id="battle-container" className="px-2 mx-auto">
            <WildBox />
            <StarterBox />
            {/* TEXT BOX SECTION */}
            <div id="text-box">
              <div id="text-box-content">
                {/* Show initial message and attack messages from both starter and wild */}
                {textMessageOne !== "" && gameOver === false && <TextBox />}
                {/* Show CONTINUE button after Starter Attack */}
                {textMessageOne === "" &&
                  gameOver === false &&
                  starterTurnOver === true &&
                  wildTurnOver === false &&
                  wildHealth > 0 && <EnemyTurn />}
                {/* Show CONTINUE button after wildHealth reaches 0 and pokemon FAINTS */}
                {textMessageOne === "" &&
                  gameOver === false &&
                  starterTurnOver === true &&
                  wildTurnOver === false &&
                  wildHealth <= 0 && <EnemyFaints />}
                {/* Show the 4 starter attacks */}
                {textMessageOne === "" &&
                  gameOver === false &&
                  starterTurnOver === false &&
                  wildTurnOver === true &&
                  starterMoves.map((el) => {
                    return <Attacks key={el} el={el} />;
                  })}
                {/* Show GAME OVER message */}
                {gameOver === true && <FightOver />}
              </div>
            </div>
            {/* END TEXT BOX SECTION */}
          </div>
          {/* END BATTLE SCREEN CONTAINER */}
        </div>
      </div>
    </div>
  );
}

export default Fight;
