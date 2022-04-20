import React from 'react';
import axios from "axios"
import { useParams } from "react-router-dom";

function PokemonCard(props) {
    const params = useParams()

const pokemon = {
    image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
}
    const getPokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`).then(response=> console.log("response", response))
    console.log("getPokemon",getPokemon)

    return (
        <div className="pokemon-card">
            <img className="pokemon-img" src={pokemon.image} alt="pokemon" />

            <div className="card-list">
                <ul>
                    <li>Height</li>
                    <li>Type</li>
                    <li>Weight</li>
                    <li>Abilities</li>
                </ul>
            </div>
        </div>
    );
}

export default PokemonCard;