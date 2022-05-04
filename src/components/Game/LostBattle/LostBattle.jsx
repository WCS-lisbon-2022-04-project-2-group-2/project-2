import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./LostBattle.css";

function LostBattle() {
  const { wildPokemon } = useContext(GameContext);
  const name = wildPokemon[0].name.toUpperCase();

  return (
    <div className="lost-battle_card">
      <h1 className="lost-battle_title">
        You Lost the Fight! {name} ran away!
      </h1>
      <div className="lost-pokemon_container">
        <img
          className="lost-fight_pokemon"
          src={wildPokemon[0].sprites.other["official-artwork"].front_default}
          alt="pokemon loser"
        />

        <Link to="/game/choose-region">
          <button className="btn-lost_game">Go Back to Region</button>
        </Link>
      </div>
    </div>
  );
}

export default LostBattle;
