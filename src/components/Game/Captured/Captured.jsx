import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import useFetch from "../../../hooks/useFetch";

import GameContext from '../../../contexts/GameContext';

export default function Captured() {

    const { wildPokemon } = useContext(GameContext)

    // Para testes de CSS
    //  const url = "https://pokeapi.co/api/v2/pokemon/4/";

    // correcta
    const url = `https://pokeapi.co/api/v2/pokemon/${wildPokemon}/`;

    const { isLoading, error, response } = useFetch(url);
        
     if (isLoading) {
        return <div>Loading...</div>;
    }
        
    if (error) {
        return <div>Oops...something went wrong...</div>;
    }
        
    const name = response.name.toUpperCase();

    const capturedPokemon = () => {
        localStorage.setItem(wildPokemon, name)
    }

    return (
        <div>
            <div className='captured-pokemon_info'>
            <img className="captured_pokemon"
            src={response.sprites.other["official-artwork"].front_default}
            alt="Captured Pokemon" 
            />
            <h1 className="captured-pokemon_title">
            Congratulations, {name} was captured!
            </h1>
            </div>
            <Link to="/game/restart-game">
                <button onClick={()=> capturedPokemon()} className="btn-save">
                    Save
                </button>
            </Link>
        </div>
    );
}

