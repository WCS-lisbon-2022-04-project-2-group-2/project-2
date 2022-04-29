import React from "react";

import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./RestartGame.css";

function RestartGame() {
  //   const { wildPokemon } = useContext(GameContext);
  let winPokemon = 2;

  const url = `https://pokeapi.co/api/v2/pokemon/${winPokemon}/`;
  const { isLoading, error, response } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops...something went wrong...</div>;
  }

  return (
    <div className="restart-game_container">
      <div>
        <img
          className="win-pokemon_img"
          src={response.sprites.other["official-artwork"].front_default}
          alt="pokemon that won the game"
        />
      </div>
      <div className="btn-choose_container">
        <Link to="/game/choose-region">
          <button className="btn-choose_new_region">CHOOSE NEW REGION</button>
        </Link>
        <Link to="/game/choose-starter">
          <button className="btn-choose_new_fighter">CHOOSE NEW FIGHTER</button>
        </Link>
      </div>
    </div>
  );
}

export default RestartGame;
