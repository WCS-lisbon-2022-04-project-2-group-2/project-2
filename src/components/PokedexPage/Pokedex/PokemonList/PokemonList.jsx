import React, { useContext } from "react";
import PokedexContext from "../../../../contexts/PokedexContext";
import { Link } from "react-router-dom";
import "./PokemonList.css";

export default function PokemonList() {
  const { allPokemons } = useContext(PokedexContext);
  const myData = [].concat(allPokemons).sort((a, b) => (a.id > b.id ? 1 : -1));
  return (
    <div className="mainContainer">
      <div className="mainCardContainer" id="name">
        {myData.map((item) => {
          return (
            <Link key={item.id} to={`/pokedex-page/pokedex/${item.id}`}>
              <div className="card">
                <img
                  src={item.sprites.other["official-artwork"].front_default}
                  alt={`pokemon ${item.name}`}
                />

                <h2 className="cardName">
                  {item.id}. {item.name.toUpperCase()}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
