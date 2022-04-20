import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PokemonCard.css";

function PokemonCard() {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
      .then((response) => {
        setPokemon(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, [params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops...something went wrong...</div>;
  }

  console.log("pokemon", pokemon);

  const types = pokemon.types.map((typeEl) => (
    <p key={typeEl.type.name}>{typeEl.type.name}</p>
  ));
  const abilities = pokemon.abilities.map((abilityEl) => (
    <p>{abilityEl.ability.name}</p>
  ));

  return (
    <div className="pokemon-card">
      <img
        className="pokemon-img"
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt="pokemon"
      />

      <div className="card-list">
        <ul className="Info-list">
          <li>
            <p className="pokemon-info">Height</p>
            <span>{pokemon.height} ft</span>
          </li>
          <li>
            <p className="pokemon-info">Type</p>
            {types}
          </li>
          <li>
            <p className="pokemon-info">Weight</p>
            <span>{pokemon.weight} pds</span>
          </li>

          <li>
            <p className="pokemon-info">Abilities</p>
            {abilities}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PokemonCard;
