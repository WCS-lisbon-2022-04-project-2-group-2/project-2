import React from "react";
import { Link } from 'react-router-dom';
import './PokedexPage.css'

function PokedexPage() {

    function goToPokedex(){

    }

    function goToMyPokemon(){

    }
    return (
        <div>
            <div className="cardPokedexPage">
                <Link to="/pokedex">
                    <h1>Pokédex</h1>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                </Link>
            </div>
            <div className="cardPokedexPage">
                <Link to="/my-pokemon">
                    <h1>My Pokémon</h1>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="my captured pokemon section" />
                </Link>
            </div>
        </div>
      );
    
}

export default PokedexPage;