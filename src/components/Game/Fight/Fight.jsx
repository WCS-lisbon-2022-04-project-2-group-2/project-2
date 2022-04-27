import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../../contexts/GameContext";
import "./Fight.css";
import useFetch from "../../../hooks/useFetch";
import HealthBar from "../HealthBar/HealthBar";
import axios from "axios";
import Typed from 'react-typed';
import { useTimeout } from 'usehooks-ts'




function Fight() {
    const [visible, setVisible] = useState(true);
    const hide = () => setVisible(false);
    useTimeout(hide, 5000);
    const [wildHealth, setWildHealth] = useState(100);
    const [starterHealth, setStarterHealth] = useState(100);
    const { starter, wildPokemon, loading, setLoading, move, setMove, isSelected, setIsSelected} = useContext(GameContext);
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

    const nameStarter = response2.name.toUpperCase();
    // const typeStarter = response2.types[0].type.name.toUpperCase();
    const moveStarter1 = response2.moves[0].move.name.toUpperCase();
    const moveStarter2 = response2.moves[1].move.name.toUpperCase();
    const moveStarter3 = response2.moves[2].move.name.toUpperCase();
    const moveStarter4 = response2.moves[3].move.name.toUpperCase();

    const selectMove = async(element) => {
        await setMove(element)
        setIsSelected(true);
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
                        <button onClick={setIsSelected(false)}>Continue</button>
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
                                `${nameStarter} used ${move}`,
                                `It's not very effective...`
                            ]}
                            typeSpeed={40}
                            backSpeed={30}
                            // loop
                        />
                        <button onClick={setIsSelected(false)}>Continue</button>
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
                setIsSelected(false);
                return (
                    <>
                        <Typed
                            strings={[
                                `${nameStarter} used ${move}`,
                                `It's SUPER effective!`
                            ]}
                            typeSpeed={40}
                            backSpeed={30}
                            // loop
                        />
                        <button onClick={setIsSelected(false)}>Continue</button>
                    </>
                );
            default:
                break;
        }
    }
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

            {visible && isSelected ? <Messages move={move} name={nameStarter} /> : <Moves /> }
        </div>
    );
    
}

export default Fight;