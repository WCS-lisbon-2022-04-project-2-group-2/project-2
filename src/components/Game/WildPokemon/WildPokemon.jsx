import React, {useContext} from "react";
import { Link } from "react-router-dom";
import GameContext from "../../../contexts/GameContext";
import "./WildPokemon.css";

function WildPokemon() {
  const { wildPokemon} = useContext(GameContext);
  const name = wildPokemon[0].name.toUpperCase();
  const image = wildPokemon[0].sprites.other["official-artwork"].front_default;

  return (
    <div className="wild-pokemon_card">
      <h1 className="enemy-name">WILD {name} APPEARED! </h1>

      <img
        className="enemy-img"
        src={image}
        alt="pokemon region"
      />
      <div className="wild-pokemon-btn_container">
        <Link to={"/game/fight"}>
          <button className="wild-pokemon-btn_fight">FIGHT</button>
        </Link>
        <Link to={"/game/choose-region"}>
          <button className="wild-pokemon-btn_escape">ESCAPE</button>
        </Link>
      </div>
    </div>
  );
}

export default WildPokemon;
