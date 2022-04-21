import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./PokemonCard.css";

function PokemonCard() {
  const params = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;
  const { isLoading, error, response } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops...something went wrong...</div>;
  }

  console.log("response", response);

  const types = response.types.map((typeEl) => (
    <p key={typeEl.type.name}>{typeEl.type.name}</p>
  ));
  const abilities = response.abilities.map((abilityEl) => (
    <p key={abilityEl.ability.name}>{abilityEl.ability.name}</p>
  ));

  return (
    <div className="pokemon-card">
      <img
        className="pokemon-img"
        src={response.sprites.other["official-artwork"].front_default}
        alt="pokemon"
      />

      <div className="card-list">
        <ul className="info-list">
          <div className="info-list1">
            <li className="pokemon-info">
              <p className="pokemon-title">Height</p>
              <span className="pokemon-description">{response.height} ft</span>
            </li>
            <li className="pokemon-info">
              <p className="pokemon-title">Type</p>
              {types}
            </li>
          </div>
          <div className="info-list2">
            <li className="pokemon-info">
              <p className="pokemon-title">Weight</p>
              <span className="pokemon-description">{response.weight} lbs</span>
            </li>

            <li className="pokemon-info">
              <p className="pokemon-title">Abilities</p>
              {abilities}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default PokemonCard;
