import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./WildPokemon.css";

function WildPokemon() {
  const params = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;
  const { isLoading, error, response } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops...something went wrong...</div>;
  }

  const name = response.name.toUpperCase();

  return (
    <div className="wild-pokemon_card">
      <h1 className="enemy-name">WILD {name} APPEARED! </h1>

      <img
        className="enemy-img"
        src={response.sprites.other["official-artwork"].front_default}
        alt="pokemon region"
      />
      <div className="wild-pokemon-btn_container">
        <Link to={"/game/fight"}>
          <button className="wild-pokemon-btn_fight">FIGHT</button>
        </Link>
        <Link to={"/game/choose-region"}>
          <button className="wild-pokemon-btn_escape">ESCAPE</button>
        </Link>
      </div>
    </div>
  );
}

export default WildPokemon;
