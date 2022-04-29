import React, { useContext, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";

function Attacks () {
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

    const handleAttackClick = (starterAttackName) => {
        // implicit return single value
        // this.setState(prevState => ({
        //   enemyHP: prevState.enemyHP - damage
        // }));
        let starterAttack = Number.parseFloat((Math.random() * (0.99 - 0.01)) + 0.01).toFixed(2);
        if (starterAttack >= 0.9){
            setStarterAttackDamage(50);
        }else if(starterAttack >= 0.5 && starterAttack < 0.9){
            setStarterAttackDamage(30);
        }else{
            setStarterAttackDamage(10);
        }
        
        // use starterAttackDamage to calculate enemy health and adjust progress bar
        if (wildHealth - starterAttackDamage <= 0){
            setWildHealth(0)
            setTextMessageOne(`${nameStarter} used ${starterAttackName} for ${starterAttackDamage} damage!`)
        } else {
            setWildHealth(wildHealth - starterAttackDamage)
            setTextMessageOne(`${nameStarter} used ${starterAttackName} for ${starterAttackDamage} damage!`)
        }
        setTimeout(() => {
            let effectiveness = Number.parseFloat((Math.random() * (0.99 - 0.01)) + 0.01).toFixed(2);
            if (effectiveness >= 0.9){
                setWildAttackDamage(50);
            }else if(effectiveness >= 0.5 && effectiveness < 0.9){
                setWildAttackDamage(30);
            }else{
                setWildAttackDamage(10);
            }
            // determine next wildAttackName between the 4 in the wildMoves array
            let moveNumber = Math.floor(Math.random() * 4);
            setWildAttackName(wildMoves[moveNumber])
    
            // once the state is changed, start enemy turn
            enemyTurn(wildAttackName);
        }, 3000);
    }

    const enemyTurn = (wildAttackName) => {
        //wildAttack will be a random number between 0.01 and 0.99
        let effectiveness = Number.parseFloat((Math.random() * (0.99 - 0.01)) + 0.01).toFixed(2);
        if (effectiveness >= 0.9){
            setWildAttackDamage(50);
        }else if(effectiveness >= 0.5 && effectiveness < 0.9){
            setWildAttackDamage(30);
        }else{
            setWildAttackDamage(10);
        }
        //if enemy health reaches 0, fight is over
        if( wildHealth === 0){ 
            setTextMessageOne(`${nameWildPokemon} fainted.`)
            setTextMessageTwo(`${nameStarter} wins!`)
            setWildFaint(true)
            setTimeout(() => {
                setGameOver(true)
            }, 3000);
            
        } 
        // if enemy is still alive, proceed with enemy turn
        else {
            if (starterHealth <= 0){
                setStarterHealth(0)
                setTextMessageOne(`${nameWildPokemon} used ${wildAttackName} for ${wildAttackDamage} damage!`)
            }
        else {
            setStarterHealth(starterHealth- wildAttackDamage)
            setTextMessageOne(`${nameWildPokemon} used ${wildAttackName} for ${wildAttackDamage} damage!`)
          }
        }
        setTimeout(() => {
            if (starterHealth === 0) {
                setTextMessageOne(`${nameStarter} fainted.`)
                setTextMessageTwo(`${nameWildPokemon} wins!`)
                setStarterFaint(true)
                setTimeout(() => {
                    setGameOver(true)
                }, 3000);
            } else {
                setTextMessageOne("")
            }
        }, 2000);
    }

    
    return (
        <div className="attack-container">
          <div>
            <span
              className="move-pointer"
              onClick={() => handleAttackClick(starterAttackName)}
            >
              {starterAttackName}attack
            </span>
          </div>
        </div>
      );
}
export default Attacks;
