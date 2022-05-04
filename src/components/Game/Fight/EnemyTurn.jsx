import React, { useContext, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";

const getPlayerAttackDamage = (effectiveness) => {
    if (effectiveness >= 0.9) {
      return Math.floor(Math.random() * (Math.floor(50) - Math.ceil(40))) + Math.ceil(40);
    } else if (effectiveness >= 0.5 && effectiveness < 0.9) {
      return Math.floor(Math.random() * (Math.floor(39) - Math.ceil(25))) + Math.ceil(25);;
    } else {
      return Math.floor(Math.random() * (Math.floor(24) - Math.ceil(10))) + Math.ceil(10);;
    }
  };
  

function EnemyTurn(){
  
    const {
        wildHealth,
        setTextMessageOne,
        setWildFaint,
        setGameOver,
        starter,
        wildPokemon,
        starterHealth,
        setStarterHealth,
        setStarterFaint,
        setStarterTurnOver,
        setWildTurnOver,
        setWinPokemon
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
            `${nameWildPokemon} used ${attack} for ${getPlayerAttackDamage(
                effectiveness
                )} damage!`
        );
        setWinPokemon(nameWildPokemon);
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
        <div className="battle-text-content">
            <p id="play-again-text" onClick={()=>handleEnemyTurn()}>CLICK TO CONTINUE</p>
            {/* <button onClick={()=>handleEnemyTurn()}>CLICK TO CONTINUE</button> */}
        </div>
    )
}

export default EnemyTurn;