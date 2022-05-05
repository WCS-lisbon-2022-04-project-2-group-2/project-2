import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../../contexts/GameContext";
import "./LostBattle.css";

function LostBattle() {
  const { wildPokemon } = useContext(GameContext);
  const name = wildPokemon[0].name.toUpperCase();
  const image = wildPokemon[0].sprites.other["official-artwork"].front_default;
  return (
    <div className="lost-battle_card">
      <h1 className="lost-battle_title">
        You Lost the Fight! {name} ran away!
      </h1>
      <div className="lost-pokemon_container">
        <img
          className="lost-fight_pokemon"
          src={image}
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
