import React, { useContext } from "react";

import GameContext from "../../../../contexts/GameContext";

import "./MyPokemon.css";

function MyPokemon() {
  // const { capturedPokemons } = useContext(GameContext);
  let capturedPokemons = localStorage.getItem("myPokemon");
  console.log(capturedPokemons)

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
                  style={{
                    backgroundColor: "#92E469",
                    border: "2px solid #78C850",
                    boxShadow: "5px 5px 15px 5px #4E8234",
                  }}
                />
                <span className="pokemon-captured_name">
                  {pokemon.name.toUpperCase()}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MyPokemon;
