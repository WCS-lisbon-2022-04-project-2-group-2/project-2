import React, { useContext, useState, useEffect } from "react";
import GameContext from "../../../contexts/GameContext";
import { useNavigate } from "react-router-dom";
import "./LostBattle.css";

function LostBattle() {
  const navigate = useNavigate();
  const { wildPokemon } = useContext(GameContext);
  const name = wildPokemon[0].name.toUpperCase();
  const image = wildPokemon[0].sprites.other["official-artwork"].front_default;
  const [isPokemonIn, setIsPokemonIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPokemonIn(false);
    }, 1500);
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <div className="lost-battle_card">
      <h1 className="lost-battle_title">
        You Lost the Fight! {name} ran away!
      </h1>
      {/* <Link to="/">
        <button className="btn-lost_game">PLAY AGAIN</button>
      </Link> */}
      <div className="lost-pokemon_container">
        {isPokemonIn && (
          <img className="lost-fight_pokemon" src={image} alt="pokemon loser" />
        )}
        {!isPokemonIn && (
          <img
            className="lost-fight_pokemon"
            src={image}
            alt="pokemon loser"
            style={{ display: "none" }}
          />
        )}
      </div>
    </div>
  );
}

export default LostBattle;
