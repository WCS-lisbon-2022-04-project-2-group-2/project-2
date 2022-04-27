import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../../contexts/GameContext";
import "./Fight.css";
import useFetch from "../../../hooks/useFetch";
import HealthBar from "../HealthBar/HealthBar";
import axios from "axios";



function Fight() {
    const { starter, wildPokemon, wildHealth, setWildHealth, starterHealth, 
        setStarterHealth, loading, setLoading, move, setMove, isSelected, setIsSelected} = useContext(GameContext);
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
    const typeWildPokemon =response.types[0].type.name.toUpperCase();
    const nameStarter = response2.name.toUpperCase();
    const typeStarter = response2.types[0].type.name.toUpperCase();

    const selectMove = async(element) => {
        await setMove(element)
        isSelected(true);
    }

    function Moves(){
        const move1 = response2.moves[0].move.name.toUpperCase();
        const move2 = response2.moves[1].move.name.toUpperCase();
        const move3 = response2.moves[2].move.name.toUpperCase();
        const move4 = response2.moves[3].move.name.toUpperCase();
        return(
            <div className="fight-moves-container">
                <button onClick={() => selectMove(move1)}>{move1}</button>
                <button onClick={() => selectMove(move2)}>{move2}</button>
                <button onClick={() => selectMove(move3)}>{move3}</button>
                <button onClick={() => selectMove(move4)}>{move4}</button>
            </div>
        )
    }

    function Messages(move){
        function getRandomId(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
        let effectiveness = getRandomId(0.01, 0.99);
        if (effectiveness > 0.5){
            return(
                <div>
                    <div>
                        <p>{nameStarter} uses {move}!</p>
                    </div>
                </div>
            )
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
            { isSelected ? <Messages /> : <Moves /> }
        </div>
    );
    
}

export default Fight;