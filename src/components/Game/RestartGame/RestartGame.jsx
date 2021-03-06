import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./RestartGame.css";

function RestartGame() {
  const { winPokemon } = useContext(GameContext);

  //to lower case
  const lowerCaseName = winPokemon.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${lowerCaseName}/`;
  const { isLoading, error, response } = useFetch(url);

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
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
        <Link to="/game/starter-card">
          <button className="btn-choose_new_fighter">CHOOSE NEW FIGHTER</button>
        </Link>
      </div>
    </div>
  );
}

export default RestartGame;
