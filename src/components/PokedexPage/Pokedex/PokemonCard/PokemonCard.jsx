import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import spinner from "../../../../media/images/spinner.gif";
import "./PokemonCard.css";

function PokemonCard() {
  const params = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;
  const { isLoading, error, response } = useFetch(url);

  if (isLoading) {
    return (
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="loading"
      />
    );
  }

  if (error) {
    return <div>Oops...something went wrong...</div>;
  }

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
        <h2 className="pokemon-card_name">{response.name.toUpperCase()}</h2>
        <ul className="info-list">
          <div className="info-list1">
            <li className="pokemon-info">
              <p className="pokemon-title">Height</p>
              <span className="pokemon-description">
                {Math.round(parseInt(response.height)) / 10} m
              </span>
            </li>
            <li className="pokemon-info">
              <p className="pokemon-title">Type</p>
              <span className="pokemon-description">{types}</span>
            </li>
          </div>
          <div className="info-list2">
            <li className="pokemon-info">
              <p className="pokemon-title">Weight</p>
              <span className="pokemon-description">
                {Math.round(parseInt(response.weight) * 0.453592 * 100) / 100}{" "}
                Kg
              </span>
            </li>

            <li className="pokemon-info">
              <p className="pokemon-title">Abilities</p>
              <span className="pokemon-description">{abilities} </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default PokemonCard;
