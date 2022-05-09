import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../../contexts/GameContext";
import "./FightEscape.css";
import HealthBar from "../HealthBar/HealthBar";

function FightEscape() {
  const { wildPokemon, wildHealth } = useContext(GameContext);

  const name = wildPokemon.name.toUpperCase();

  return (
    <div>
      <h1>Wild {name}</h1>
      <HealthBar completed={wildHealth} />
      <img src={wildPokemon.sprites.front_default} alt={`${name}`} />

      <Link to="/game/fight">
        <button>Fight!</button>
      </Link>
      <Link to="/game/choose-region">
        <button>Escape!</button>
      </Link>
    </div>
  );
}

export default FightEscape;
