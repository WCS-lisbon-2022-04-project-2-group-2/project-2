import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../../contexts/GameContext";
import "./Fight.css";
import Typed from 'react-typed';
import WildBox from './WildBox';
import StarterBox from './StarterBox';
import TextBox from './TextBox';

 function Fight() {
    const { starter, wildPokemon, loading, setLoading, move, setMove, isSelected, setIsSelected, textMessageOne, setTextMessageOne,
        textMessageTwo, setTextMessageTwo, wildFaint, setWildFaint, starterFaint, setStarterFaint, wildHealth, setWildHealth, 
        starterHealth, setStarterHealth, gameOver, setGameOver, wildAttackDamage, setWildAttackDamage, wildAttackName, setWildAttackName,
        starterAttackDamage, setStarterAttackDamage, starterAttackName, setStarterAttackName} = useContext(GameContext);

    const nameWildPokemon = wildPokemon[0].name.toUpperCase();
    const moveWild1 = wildPokemon[0].moves[0].move.name.toUpperCase();
    const moveWild2 = wildPokemon[0].moves[1].move.name.toUpperCase();
    const moveWild3 = wildPokemon[0].moves[2].move.name.toUpperCase();
    const moveWild4 = wildPokemon[0].moves[3].move.name.toUpperCase();
    const wildMoves = [moveWild1, moveWild2, moveWild3, moveWild4]

    const nameStarter = starter[0].name.toUpperCase();
    const moveStarter1 = starter[0].moves[0].move.name.toUpperCase();
    const moveStarter2 = starter[0].moves[1].move.name.toUpperCase();
    const moveStarter3 = starter[0].moves[2].move.name.toUpperCase();
    const moveStarter4 = starter[0].moves[3].move.name.toUpperCase();
    const starterMoves = [moveStarter1, moveStarter2, moveStarter3, moveStarter4]

  
    const startingBattle = () => {
        setTimeout(() => {
          setTextMessageOne(`Wild ${nameWildPokemon} appeared!`)
          setWildFaint(false)
          setTimeout(() => {
            setTextMessageOne(`Go ${nameStarter}!`)
            setStarterFaint(false)
    
            setTimeout(() => {
            setTextMessageOne('')
            }, 3000)
        }, 3000)
        }, 1000)
       
    }
    
    useEffect(() => {
        startingBattle()
    }, [wildFaint])


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

    //reset all states after the fight is over
    const handleFightOver = () =>{
        setStarterHealth(200)
        setWildHealth(200)
        setGameOver(false)
        setTextMessageOne("")
        setTextMessageTwo("")
        setWildFaint(false)
        setStarterFaint(false)
    }

    return (
        <div className="container h-100">
          <div className="row row h-100 justify-content-center align-items-center">
            <div className="col-sm-12">
              {/* BATTLE SCREEN CONTAINER */}
              <div id="battle-container" className="px-2 mx-auto">
                <WildBox/>
                <StarterBox/>
                {/* TEXT BOX SECTION */}
                <div id="text-box">
                  <div id="text-box-content">
                    {textMessageOne !== "" &&
                      gameOver === false && (
                        <TextBox/>
                      )}
                    {textMessageOne === "" &&
                      gameOver === false &&
                      Object.keys(starterMoves).map((key, index) => {
                        return (
                          <Attacks
                            key={key}
                            index={index}
                            details={this.state.playerAttacks[key]}
                            handleAttackClick={this.handleAttackClick}
                          />
                        );
                      })}
  
                    {this.state.gameOver === true && (
                      <PlayAgain handlePlayAgain={this.handlePlayAgain} />
                    )}
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


// //     const selectMove = async(element) => {
        
// //         await setMove(element)
// //         setSelect(true);
// //         console.log(select)
// //     }

// //     function Moves(){
// //         return(
// //             <div className="fight-moves-container">
// //                 <button onClick={() => selectMove(moveStarter1)}>{moveStarter1}</button>
// //                 <button onClick={() => selectMove(moveStarter2)}>{moveStarter2}</button>
// //                 <button onClick={() => selectMove(moveStarter3)}>{moveStarter3}</button>
// //                 <button onClick={() => selectMove(moveStarter4)}>{moveStarter4}</button>
// //             </div>
// //         )
// //     }

// //     function Messages(move, name ){
// //         function getEffectiveness(min, max) {
// //             let value = (Math.random() * (max - min)) + min;
// //             return Number.parseFloat(value).toFixed(2);
// //         }


// //         let effectiveness = getEffectiveness(0.01, 0.99);
// //         console.log(effectiveness)
// //         switch (true) {
// //             case effectiveness >= 0.5 && effectiveness < 0.9:
 
// //                 if (name === nameStarter){
// //                     let newHealth = starterHealth - 30;
// //                     if(newHealth < 0){
// //                         setStarterHealth(0)
// //                     }else{
// //                         setStarterHealth(newHealth)
// //                     }
// //                 }else{
// //                     let newHealth = wildHealth - 30;
// //                     if(newHealth < 0){
// //                         setWildHealth(0)
// //                     }else{
// //                         setWildHealth(newHealth)
// //                     }
// //                 }
// //                 return (
// //                     <>
// //                         <Typed
// //                             strings={[
// //                                 `${name} used ${move}`,
// //                                 `It's effective!`
// //                             ]}
// //                             typeSpeed={40}
// //                             backSpeed={30}
// //                             // loop
// //                         />
// //                         <button onClick={setSelect(false)}>Continue</button>
// //                     </>
// //                 );
// //             case effectiveness < 0.5:
// //                 if (name === nameStarter){
// //                     let newHealth = starterHealth - 10;
// //                     if(newHealth < 0){
// //                         setStarterHealth(0)
// //                     }else{
// //                         setStarterHealth(newHealth)
// //                     }
// //                 }else{
// //                     let newHealth = wildHealth - 10;
// //                     if(newHealth < 0){
// //                         setWildHealth(0)
// //                     }else{
// //                         setWildHealth(newHealth)
// //                     }
// //                 }
// //                 return (
// //                     <>
// //                         <Typed
// //                             strings={[
// //                                 `${name} used ${move}`,
// //                                 `It's not very effective...`
// //                             ]}
// //                             typeSpeed={40}
// //                             backSpeed={30}
// //                             // loop
// //                         />
// //                         <button onClick={setSelect(false)}>Continue</button>
// //                     </>
// //                 );
// //             case effectiveness >= 0.9:
// //                 if (name === nameStarter){
// //                     let newHealth = starterHealth - 50;
// //                     if(newHealth < 0){
// //                         setStarterHealth(0)
// //                     }else{
// //                         setStarterHealth(newHealth)
// //                     }
// //                 }else{
// //                     let newHealth = wildHealth - 50;
// //                     if(newHealth < 0){
// //                         setWildHealth(0)
// //                     }else{
// //                         setWildHealth(newHealth)
// //                     }
// //                 }
// //                 return (
// //                     <>
// //                         <Typed
// //                             strings={[
// //                                 `${name} used ${move}`,
// //                                 `It's SUPER effective!`
// //                             ]}
// //                             typeSpeed={40}
// //                             backSpeed={30}
// //                             // loop
// //                         />
// //                         <button onClick={setSelect(false)}>Continue</button>
// //                     </>
// //                 );
// //             default:
// //                 break;
// //         }
// //     }

    
//     return(
//         <div className="fight-game-main-container">
//             {/* <div className="fight-wild-pokemon-container"> */}
//                 {/* <h1>Wild {nameWildPokemon}</h1>
//                 <HealthBar completed={wildHealth}/>
//                 <img
//                     src={response.sprites.front_default || response.sprites.other["official-artwork"].front_default}
//                     alt={`${nameWildPokemon}`}
//                 />
//             </div>
//             <div className="fight-starter-pokemon-container">
//                 <HealthBar completed={starterHealth}/>
//                 <h1>{nameStarter}</h1>
//                 <img
//                     src={response2.sprites.back_default || response2.sprites.front_default}
//                     alt={`${nameStarter}`}
//                 />
//             </div>

//             {select ? <Messages move={move} name={nameStarter} /> : <Moves /> } */}
//             {textMessageOne}
//         </div>
//     );
    
// }

