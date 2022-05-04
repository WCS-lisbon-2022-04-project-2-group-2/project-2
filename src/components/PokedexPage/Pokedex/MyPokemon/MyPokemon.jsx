import React, { useContext } from "react";

import useFetch from "../../../../hooks/useFetch";
import GameContext from "../../../../contexts/GameContext";

import "./MyPokemon.css";

function MyPokemon() {
  const { capturedPokemons, wildPokemon } = useContext(GameContext);

  // Para testes de CSS
  const url = "https://pokeapi.co/api/v2/pokemon/4/";
  //   const url = `https://pokeapi.co/api/v2/pokemon/${wildPokemon.id}/`;
  const { response, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops...something went wrong...</div>;
  }

  //   ⁄⁄ TODO: change test array to capturedPokemons
  const testArray = [
    ...capturedPokemons,
    ...capturedPokemons,
    ...capturedPokemons,
    ...capturedPokemons,
    ...capturedPokemons,
    ...capturedPokemons,
  ];

  return (
    <>
      <div className="my-pokemon_container">
        <div className="my-pokemon_info">
          <h2 className="my-pokemon_title">My Pokemons</h2>
          <h3 className="my-pokemon_total">Total: {capturedPokemons.length}</h3>
        </div>
        <div className="my-pokemon_display">
          {capturedPokemons &&
            testArray.map((pokemon) => (
              <div key={pokemon.id}>
                <img
                  className="pokemon-img_captured"
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt="My pokemon captured"
                />
                <span>{pokemon.name}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MyPokemon;
