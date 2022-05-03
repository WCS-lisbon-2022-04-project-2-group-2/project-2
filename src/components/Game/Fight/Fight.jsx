import React, { useContext, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";
import "./Fight.css";
import Typed from "react-typed";
import WildBox from "./WildBox";
import StarterBox from "./StarterBox";
import TextBox from "./TextBox";
import Attacks from "./Attacks";
import FightOver from "./FightOver";


const getPlayerAttackDamage = (effectiveness) => {
  if (effectiveness >= 0.9) {
    return 50;
  } else if (effectiveness >= 0.5 && effectiveness < 0.9) {
    return 30;
  } else {
    return 10;
  }
};

function EnemyTurn(){
  
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
      setStarterFaint,
      setStarterTurnOver,
      textMessageOne,
      gameOver,
      starterTurnOver,
      wildTurnOver,
      setWildTurnOver
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

      setWildFaint(true);
      setTimeout(() => {
          setGameOver(true);
      }, 3000);
      }
      else if(starterHealth <= 0){

      setStarterFaint(true);
      setTimeout(() => {
          setGameOver(true);
      }, 3000);
      }
  }, []);

  const enemyTurn = (attack) => {
      const effectiveness = Number.parseFloat(Math.random() * (0.99 - 0.01) + 0.01).toFixed(2);
      // if enemy is still alive, proceed with enemy turn

      if (starterHealth - getPlayerAttackDamage(effectiveness)<=0) {
      setStarterHealth(0);
      setTextMessageOne(
          `${nameStarter} is exhausted!`
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

    const handleEnemyTurn = () => {
      const moveNumber = Math.floor(Math.random() * 4); // results: 0...3
      const wildAttackName = wildMoves[moveNumber];
      enemyTurn(wildAttackName)
      setTimeout(() => {
        setStarterTurnOver(false)
        setWildTurnOver(true)
      }, 3000);
    }
    
    return (
      <div>
        <button onClick={()=>handleEnemyTurn()}>Continue to Enemy turn</button>
      </div>
  )
}

// function ContinueToStarterTurn(){

//   const handleStarterTurn = () => {
//     setStarterTurnOver(false)
//     setWildTurnOver(false)
  
//   }
//   return (
//       <div>
//       <button onClick={()=>handleStarterTurn()}>Continue to Starter turn</button>
//       </div>
//   )
//   }


function Fight() {
  const {
    starter,
    wildPokemon,
    textMessageOne,
    setTextMessageOne,
    wildFaint,
    starterFaint,
    gameOver,
    starterTurnOver,
    wildTurnOver,
    wildHealth,
    setTextMessageTwo,
    setGameOver,
    setWildFaint
  } = useContext(GameContext);

  const nameWildPokemon = wildPokemon[0].name.toUpperCase();

  const nameStarter = starter[0].name.toUpperCase();
  const moveStarter1 = starter[0].moves[0].move.name.toUpperCase();
  const moveStarter2 = starter[0].moves[1].move.name.toUpperCase();
  const moveStarter3 = starter[0].moves[2].move.name.toUpperCase();
  const moveStarter4 = starter[0].moves[3].move.name.toUpperCase();
  const starterMoves = [moveStarter1, moveStarter2, moveStarter3, moveStarter4];

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
  }, []);

  function FinalPart(){

    const handleFinalPart = () => {
          setTextMessageOne(`${nameWildPokemon} fainted.`);
          setTextMessageTwo(`${nameStarter} wins!`);
          setWildFaint(true);
          setTimeout(() => {
            setGameOver(true);
          }, 3000);
    }

    return (
      <div>
        <button onClick={()=>handleFinalPart()}>Continue</button>
      </div>
    )
  }

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
                {/* Show initial message, attack messages from starter and wild */}
                {textMessageOne !== "" && gameOver === false && <TextBox />}

                {/* Show Continue button after Starter Attack */}
                {textMessageOne === "" && gameOver === false && starterTurnOver === true && wildTurnOver === false && wildHealth > 0 && <EnemyTurn />}

                {textMessageOne === "" && gameOver === false && starterTurnOver === true && wildTurnOver === false && wildHealth <= 0 && <FinalPart />}

                {/* Show Continue button after Enemy Attack */}
                {/* {textMessageOne === "" && gameOver === false && starterTurnOver === false && wildTurnOver === true && <ContinueToStarterTurn />} */}

                {/* Show the 4 starter attacks */}
                {textMessageOne === "" && gameOver === false && starterTurnOver === false && wildTurnOver === true && starterMoves.map((el) => {return <Attacks key={el} el={el} />;})}

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
