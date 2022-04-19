import React from "react";

export default function PokemonList({ allPokemons }) {
  const myData = []
    .concat(allPokemons)
    .sort((a, b) => (a.id > b.id ? 1 : -1));
  return (
    <div>
      <div className="card" id="name">
        {myData.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.sprites.other['official-artwork'].front_default} alt={`pokemon ${item.name}`}  />
              <h2 className="cardName" >{item.id}. {item.name.toUpperCase()}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}