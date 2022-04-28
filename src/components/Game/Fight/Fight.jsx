import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../../contexts/GameContext";
import "./Fight.css";
import useFetch from "../../../hooks/useFetch";
import HealthBar from "../HealthBar/HealthBar";
import axios from "axios";
import Typed from 'react-typed';
// import { useTimeout } from 'usehooks-ts'

function Fight() {
    const { starter, wildPokemon, loading, setLoading, move, setMove, isSelected, setIsSelected, textMessageOne, setTextMessageOne,
        textMessageTwo, setTextMessageTwo, wildFaint, setWildFaint, starterFaint, setStarterFaint, wildHealth, setWildHealth, 
        starterHealth, setStarterHealth, gameOver, setGameOver, wildAttackDamage, setWildAttackDamage, wildAttackName, setWildAttackName,
        starterAttackDamage, setStarterAttackDamage, starterAttackName, setStarterAttackName} = useContext(GameContext);
    const urlWildPokemon = `https://pokeapi.co/api/v2/pokemon/${wildPokemon}/`;
    const { isLoading, error, response } = useFetch(urlWildPokemon);

    const urlStarter = `https://pokeapi.co/api/v2/pokemon/${starter}/`;
    const { isLoading : isLoading2, error : error2, response : response2 } = useFetch(urlStarter);

    

    if (isLoading || isLoading2) {
        return <div>Loading...</div>;
    }
    
    if (error || error2) {
        return <div>Oops...something went wrong...</div>;
    }
    
    const nameWildPokemon = response.name.toUpperCase();
    // const typeWildPokemon = response.types[0].type.name.toUpperCase();
    const moveWild1 = response.moves[0].move.name.toUpperCase();
    const moveWild2 = response.moves[1].move.name.toUpperCase();
    const moveWild3 = response.moves[2].move.name.toUpperCase();
    const moveWild4 = response.moves[3].move.name.toUpperCase();
    const wildMoves = [moveWild1, moveWild2, moveWild3, moveWild4]

    const nameStarter = response2.name.toUpperCase();
    // const typeStarter = response2.types[0].type.name.toUpperCase();
    const moveStarter1 = response2.moves[0].move.name.toUpperCase();
    const moveStarter2 = response2.moves[1].move.name.toUpperCase();
    const moveStarter3 = response2.moves[2].move.name.toUpperCase();
    const moveStarter4 = response2.moves[3].move.name.toUpperCase();

  

    const startingBattle = () => {
        setTimeout(() => {
            (() => {
            setTextMessageOne(state => {
                state = (`Wild ${nameWildPokemon} is ready to fight!`)
                return state;
            })

            setEnemyFaint(state => {
                state = false
                return state;
            })
            }),

            (() => {
                setTimeout(() => {
                    setTextMessageOne(`Go ${nameStarter}!`)
                    setStarterFaint(false)

                    (() => {
                        setTimeout(() => {
                            setTextMessageOne("")
                        }, 3000)
                    })
                }, 3000)
            })
        }, 1000);
    };

    const enemyTurn = (wildAttackName) => {
        //wildAttack will be a random number between 0.01 and 0.99
        wildAttack = Number.parseFloat((Math.random() * (0.99 - 0.01)) + 0.01).toFixed(2);
        if (wildAttack >= 0.9){
            setWildAttackDamage(50);
        }else if(wildAttack >= 0.5 && wildAttack < 0.9){
            setWildAttackDamage(30);
        }else{
            setWildAttackDamage(10);
        }
        
        if( wildHealth === 0){ 
            setTextMessageOne(`${nameWildPokemon} fainted.`)
            setTextMessageTwo(`${nameStarter} wins!`)
            setWildFaint(true)
            ,
            () => {
                setTimeout(() => {
                  setGameOver(true)
                }, 3000);
            }
            
        } 
        // if enemy is still alive, proceed with enemy turn
        else {
            prevState => {
                if (prevState.starterHealth - wildAttackDamage <= 0) {
                    setStarterHealth(state => {
                        state = 0;
                        return state;
                    })
                    setTextMessageOne(state =>{
                        state = (`${nameWildPokemon} used ${wildAttackName} for ${wildAttackDamage} damage!`);
                        return state;
                    })
                } else {
                    setStarterHealth(state => {
                        state = prevState.starterHealth - wildAttackDamage
                        return state;
                    })
                    setTextMessageOne(state => {
                        state = `${nameWildPokemon} used ${wildAttackName} for ${wildAttackDamage} damage!`
                        return state;
                    })
                }
            },
            () => {
                setTimeout(() => {
                  if (starterHealth === 0) {
                    setTextMessageOne(`${nameStarter} fainted.`)
                    setTextMessageTwo(`${nameWildPokemon} wins!`)
                    setStarterFaint(true)
                    ,
                    () => {
                        setTimeout(() => {
                            setGameOver(true)
                        }, 3000);
                      }
                  } else {
                      setTextMessageOne("")
                  }
                }, 2000);
            }
        }
    }

    handleAttackClick = (name, damage) => {
        // implicit return single value
        // this.setState(prevState => ({
        //   enemyHP: prevState.enemyHP - damage
        // }));

        //name is the move's Name, damage is the move's Damage
        
        starterAttack = Number.parseFloat((Math.random() * (0.99 - 0.01)) + 0.01).toFixed(2);
        if (starterAttack >= 0.9){
            setStarterAttackDamage(50);
        }else if(starterAttack >= 0.5 && starterAttack < 0.9){
            setStarterAttackDamage(30);
        }else{
            setStarterAttackDamage(10);
        }
    
        // use attack to calculate enemy HP and adjust progress bar
        
        prevState => {
        if (prevState.wildHealth - starterAttackDamage <= 0) {
            setWildHealth(state => {
                state = 0;
                return state;
            })
            setTextMessageOne(state =>{
                state = (`${nameStarterPokemon} used ${starterAttackName} for ${starterAttackDamage} damage!`);
                return state;
            })
        } else {
            setWildHealth(state => {
                state = prevState.wildHealth - starterAttackDamage
                return state;
            })
            setTextMessageOne(state => {
                state = `${starterWildPokemon} used ${starterAttackName} for ${starterAttackDamage} damage!`
                return state;
            })
        }
        },
        () => {
        // wait X seconds before enemy attacks
        setTimeout(() => {
            wildAttack = Number.parseFloat((Math.random() * (0.99 - 0.01)) + 0.01).toFixed(2);
            if (wildAttack >= 0.9){
                setWildAttackDamage(50);
            }else if(wildAttack >= 0.5 && wildAttack < 0.9){
                setWildAttackDamage(30);
            }else{
                setWildAttackDamage(10);
            }
            // calc next the wild move between the 4 available in the wildMoves array
            let moveNumber = Math.floor(Math.random() * 4); // possible results: 0,1,2,3
            setWildAttackName(wildMoves[moveNumber])

            // once the state is changed, start enemy turn
            enemyTurn(wildAttackName);
        }, 3000);
        }
    };

    

    const selectMove = async(element) => {
        
        await setMove(element)
        setSelect(true);
        console.log(select)
    }

    function Moves(){
        return(
            <div className="fight-moves-container">
                <button onClick={() => selectMove(moveStarter1)}>{moveStarter1}</button>
                <button onClick={() => selectMove(moveStarter2)}>{moveStarter2}</button>
                <button onClick={() => selectMove(moveStarter3)}>{moveStarter3}</button>
                <button onClick={() => selectMove(moveStarter4)}>{moveStarter4}</button>
            </div>
        )
    }

    function Messages(move, name ){
        function getEffectiveness(min, max) {
            let value = (Math.random() * (max - min)) + min;
            return Number.parseFloat(value).toFixed(2);
        }


        let effectiveness = getEffectiveness(0.01, 0.99);
        console.log(effectiveness)
        switch (true) {
            case effectiveness >= 0.5 && effectiveness < 0.9:
 
                if (name === nameStarter){
                    let newHealth = starterHealth - 30;
                    if(newHealth < 0){
                        setStarterHealth(0)
                    }else{
                        setStarterHealth(newHealth)
                    }
                }else{
                    let newHealth = wildHealth - 30;
                    if(newHealth < 0){
                        setWildHealth(0)
                    }else{
                        setWildHealth(newHealth)
                    }
                }
                return (
                    <>
                        <Typed
                            strings={[
                                `${name} used ${move}`,
                                `It's effective!`
                            ]}
                            typeSpeed={40}
                            backSpeed={30}
                            // loop
                        />
                        <button onClick={setSelect(false)}>Continue</button>
                    </>
                );
            case effectiveness < 0.5:
                if (name === nameStarter){
                    let newHealth = starterHealth - 10;
                    if(newHealth < 0){
                        setStarterHealth(0)
                    }else{
                        setStarterHealth(newHealth)
                    }
                }else{
                    let newHealth = wildHealth - 10;
                    if(newHealth < 0){
                        setWildHealth(0)
                    }else{
                        setWildHealth(newHealth)
                    }
                }
                return (
                    <>
                        <Typed
                            strings={[
                                `${name} used ${move}`,
                                `It's not very effective...`
                            ]}
                            typeSpeed={40}
                            backSpeed={30}
                            // loop
                        />
                        <button onClick={setSelect(false)}>Continue</button>
                    </>
                );
            case effectiveness >= 0.9:
                if (name === nameStarter){
                    let newHealth = starterHealth - 50;
                    if(newHealth < 0){
                        setStarterHealth(0)
                    }else{
                        setStarterHealth(newHealth)
                    }
                }else{
                    let newHealth = wildHealth - 50;
                    if(newHealth < 0){
                        setWildHealth(0)
                    }else{
                        setWildHealth(newHealth)
                    }
                }
                return (
                    <>
                        <Typed
                            strings={[
                                `${name} used ${move}`,
                                `It's SUPER effective!`
                            ]}
                            typeSpeed={40}
                            backSpeed={30}
                            // loop
                        />
                        <button onClick={setSelect(false)}>Continue</button>
                    </>
                );
            default:
                break;
        }
    }

    useEffect(() => {
        startingBattle();
    })
    return(
        <div className="fight-game-main-container">
            <div className="fight-wild-pokemon-container">
                <h1>Wild {nameWildPokemon}</h1>
                <HealthBar completed={wildHealth}/>
                <img
                    src={response.sprites.front_default || response.sprites.other["official-artwork"].front_default}
                    alt={`${nameWildPokemon}`}
                />
            </div>
            <div className="fight-starter-pokemon-container">
                <HealthBar completed={starterHealth}/>
                <h1>{nameStarter}</h1>
                <img
                    src={response2.sprites.back_default || response2.sprites.front_default}
                    alt={`${nameStarter}`}
                />
            </div>

            {select ? <Messages move={move} name={nameStarter} /> : <Moves /> }
        </div>
    );
    
}
}
export default Fight;