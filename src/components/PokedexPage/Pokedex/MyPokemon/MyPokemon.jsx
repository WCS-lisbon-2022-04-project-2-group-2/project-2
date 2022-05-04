import React, { useContext } from "react";

import GameContext from "../../../../contexts/GameContext";

import "./MyPokemon.css";

function MyPokemon() {
  const { capturedPokemons } = useContext(GameContext);

  return (
    <>
      <div className="my-pokemon_container">
        <div className="my-pokemon_info">
          <h2 className="my-pokemon_title">My Pokemons</h2>
          <h3 className="my-pokemon_total">Total: {capturedPokemons.length}</h3>
        </div>
        <div className="my-pokemon_display">
          {capturedPokemons &&
            capturedPokemons.map((pokemon) => (
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
