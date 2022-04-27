import React, { useContext, useParams } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../../contexts/GameContext";
import "./FightEscape.css";
import useFetch from "../../../hooks/useFetch";
import HealthBar from "../HealthBar/HealthBar";


function FightEscape() {
    const { wildPokemon, wildHealth } = useContext(GameContext);
    const url = `https://pokeapi.co/api/v2/pokemon/${wildPokemon}/`;
    const { isLoading, error, response } = useFetch(url);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Oops...something went wrong...</div>;
    }
    
    const name = response.name.toUpperCase();

    return(
        <div>
            <h1>Wild {name}</h1>
            <HealthBar completed={wildHealth}/>
            <img
                src={response.sprites.front_default}
                alt={`${name}`}
            />

            <Link to="/game/fight"><button>Fight!</button></Link>
            <Link to="/game/choose-region"><button>Escape!</button></Link>
        </div>
    );
    
}

export default FightEscape;