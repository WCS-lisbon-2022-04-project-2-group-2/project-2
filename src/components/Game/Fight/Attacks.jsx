import React, { useContext, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";

function Attacks (props) {
    const {el} = props;

    const {starterAttackName, starterAttackDamage, setStarterAttackDamage, wildHealth, setWildHealth, 
        setTextMessageOne, setTextMessageTwo, setWildFaint, setGameOver, starter, wildPokemon, 
        setWildAttackDamage, wildAttackName, setWildAttackName, starterHealth, setStarterHealth, 
        setStarterFaint, wildAttackDamage} = useContext(GameContext)

    const nameWildPokemon = wildPokemon[0].name.toUpperCase();
    const moveWild1 = wildPokemon[0].moves[0].move.name.toUpperCase();
    const moveWild2 = wildPokemon[0].moves[1].move.name.toUpperCase();
    const moveWild3 = wildPokemon[0].moves[2].move.name.toUpperCase();
    const moveWild4 = wildPokemon[0].moves[3].move.name.toUpperCase();
    const wildMoves = [moveWild1, moveWild2, moveWild3, moveWild4]

    const nameStarter = starter[0].name.toUpperCase();

    // const enemyTurn = (attack) => {
    //     //wildAttack will be a random number between 0.01 and 0.99
    //     let effectiveness = Number.parseFloat((Math.random() * (0.99 - 0.01)) + 0.01).toFixed(2);
    //     let wildAttackDamage;
    //     if (effectiveness >= 0.9){
    //         wildAttackDamage = 50;
    //     }else if(effectiveness >= 0.5 && effectiveness < 0.9){
    //         wildAttackDamage = 30;
    //     }else{
    //         wildAttackDamage = 10;
    //     }
        
    //     //if enemy health reaches 0, fight is over
    //     if( wildHealth === 0){ 
    //         setTextMessageOne(`${nameWildPokemon} fainted.`)
    //         setTextMessageTwo(`${nameStarter} wins!`)
    //         setWildFaint(true)
    //         setTimeout(() => {
    //             setGameOver(true)
    //         }, 3000);
            
    //     } 
    //     // if enemy is still alive, proceed with enemy turn
    //     else {
    //         if (starterHealth <= 0){
    //             setStarterHealth(0)
    //             setTextMessageOne(`${nameWildPokemon} used ${attack} for ${wildAttackDamage} damage!`)
    //         }
    //     else {
    //         setStarterHealth(starterHealth- wildAttackDamage)
    //         setTextMessageOne(`${nameWildPokemon} used ${attack} for ${wildAttackDamage} damage!`)
    //       }
    //     }
    //     setTimeout(() => {
    //         if (starterHealth === 0) {
    //             setTextMessageOne(`${nameStarter} fainted.`)
    //             setTextMessageTwo(`${nameWildPokemon} wins!`)
    //             setStarterFaint(true)
    //             setTimeout(() => {
    //                 setGameOver(true)
    //             }, 3000);
    //         } else {
    //             setTextMessageOne("")
    //         }
    //     }, 2000);
    // }

    // const handleAttackClick = (attack) => {
  
    //     let starterAttackDamage;
    //     let effectiveness = Number.parseFloat((Math.random() * (0.99 - 0.01)) + 0.01).toFixed(2);
    //     if (effectiveness >= 0.9){
    //         starterAttackDamage = 50;
    //     }else if(effectiveness >= 0.5 && effectiveness < 0.9){
    //         starterAttackDamage = 30;
    //     }else{
    //         starterAttackDamage = 10;
    //     }
        
    //     // use starterAttackDamage to calculate enemy health and adjust progress bar
    //     if (wildHealth - starterAttackDamage <= 0){
    //         setWildHealth(0)
    //         setTextMessageOne(`${nameStarter} used ${attack} for ${starterAttackDamage} damage!`)
    //     } else {
    //         setWildHealth(wildHealth - starterAttackDamage)
    //         setTextMessageOne(`${nameStarter} used ${attack} for ${starterAttackDamage} damage!`)
    //     }
    //     setTimeout(() => {
    //         let moveNumber = Math.floor(Math.random() * 4);  // results: 0...3
    //         let wildAttackName = wildMoves[moveNumber];
    
    //         // once the state is changed, start enemy turn
    //         enemyTurn(wildAttackName);
    //     }, 3000);
    // }

    
    return (
        <div className="attack-container">
          <div>
            <span
              className="move-pointer"
              onClick={() => props.handleAttackClick(el)}
            >
              {el}
            </span>
          </div>
        </div>
      );
}
export default Attacks;
