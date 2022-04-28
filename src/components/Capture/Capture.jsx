import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import useFetch from '../../hooks/useFetch';
import "./Capture.css";

import GameContext from '../../contexts/GameContext';


export default function Capture() {

    const { wildPokemon } = useContext(GameContext)

        // Para testes de CSS
        const url = "https://pokeapi.co/api/v2/pokemon/1/";

        // correcta
        // const url = `https://pokeapi.co/api/v2/pokemon/${wildPokemon}/`;

        const { isLoading, error, response } = useFetch(url);
        
        if (isLoading) {
            return <div>Loading...</div>;
        }
        
        if (error) {
            return <div>Oops...something went wrong...</div>;
        }
        
        const name = response.name.toUpperCase();

        const capturePokemon = () => {
            localStorage.setItem(wildPokemon, name)
        }

    return (
        <div>
            <h1 className="catch-pokemon_title">
                {name} fainted!
            </h1>
            <img className="catch_pokemon"
            src={response.sprites.other["official-artwork"].front_default}
            alt="Fainted Pokemon" 
            />
            <div>
            <Link to="/game/captured">
                <button onClick={()=> capturePokemon()} className="btn-catch">
                    Catch
                </button>
            </Link>
            
            <Link to="/game/choose-generation">
                <button className='btn-discard'>
                    Discard
                </button>
            </Link>
            </div>
        </div>
    );
}
