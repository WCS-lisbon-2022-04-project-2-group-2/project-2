import React, { useContext } from "react";
import useFetch from "../../../../hooks/useFetch";
import GameContext from "../../../../contexts/GameContext";
import "./MyPokemon.css";

function MyPokemon() {
  const { totalPokemon, wildPokemon } = useContext(GameContext);

  const url = `https://pokeapi.co/api/v2/pokemon/${wildPokemon}/`;
  const { response } = useFetch(url);

  return (
    <>
      <div className="my-pokemon_container">
        <div>
          <h2 className="my-pokemon_title">My Pokemons</h2>
          <h3 className="my-pokemon_total">Total: {totalPokemon}</h3>
        </div>
        <img
          className="pokemon-img"
          src={response.sprites.other["official-artwork"].front_default}
          alt="pokemon"
        />
      </div>
    </>
  );
}

export default MyPokemon;
