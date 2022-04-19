import React from "react";

export default function PokemonList({ allPokemons }) {
  const myData = []
    .concat(allPokemons)
    .sort((a, b) => (a.id > b.id ? 1 : -1));
  return (
    <div>
      {myData.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <img src={item.sprites.other['official-artwork'].front_default} alt="pokemon" />
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
}