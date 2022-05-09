import React from "react";
import { Link } from "react-router-dom";
import "./PokedexPage.css";
import pokedexImage from "../../media/images/pokedex.png";

function PokedexPage() {
  return (
    <div className="pokedex-page-main-container">
      <div className="cardPokedexPage">
        <Link to="/pokedex-page/pokedex">
          <h1 className="pokedex-title">All Pokémon</h1>
          <img
            className="pokedex-img"
            src={pokedexImage}
            alt="pokedex section"
          />
        </Link>
      </div>
      <div className="cardPokedexPage">
        <Link to="/pokedex-page/my-pokemon">
          <h1 className="pokedex-title">My Pokémon</h1>
          <img
            className="pikatchu-img"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="my captured pokemon section"
          />
        </Link>
      </div>
    </div>
  );
}

export default PokedexPage;
