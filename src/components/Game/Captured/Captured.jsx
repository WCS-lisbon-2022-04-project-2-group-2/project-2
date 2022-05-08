import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import GameContext from "../../../contexts/GameContext";
import "./Captured.css";

export default function Captured() {
  const navigate = useNavigate();
  const { wildPokemon,
    setWildPokemon,
    setWildHealth,
    setStarterHealth,
    setTextMessageOne,
    setTextMessageTwo,
    setWildFaint,
    setStarterFaint,
    setGameOver,
    setStarterTurnOver,
    setWildTurnOver
  } = useContext(GameContext);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const name = wildPokemon[0].name.toUpperCase();
  const id = wildPokemon[0].id;
  const image = wildPokemon[0].sprites.other["official-artwork"].front_default;
  const type = wildPokemon[0].types[0].type.name;

  const handleResetStates = () => {
    setWildPokemon()
    setWildHealth(10)
    setStarterHealth(60)
    setTextMessageOne(" ")
    setTextMessageTwo("")
    setWildFaint(false)
    setStarterFaint(false)
    setGameOver(false)
    setStarterTurnOver(false)
    setWildTurnOver(true)
  }

  const handleCapturePokemon = () => {
    setIsMessageOpen(true);
    const currentCollection = localStorage.getItem("myPokemon");
    const parsed = JSON.parse(currentCollection) || [];
    parsed.push({ id: id, name: name, image: image, type: type });
    localStorage.setItem("myPokemon", JSON.stringify(parsed));
    // setTimeout(() => {
    //   navigate("/pokedex-page/my-pokemon");
    // }, 4000);
  };

  return (
    <div className="captured-pokemon_card">
      <img className="captured_pokemon" src={image} alt="Captured Pokemon" />
      {isMessageOpen && (
        <div>
          <div className="captured-pokemon_message_container">
            <p className="captured-pokemon_message">
              Congratulations! {name} was captured!
            </p>
          </div>
          <div>
            <Link to="/pokedex-page/my-pokemon"><button className="btn-my-pokemon-captured">CHECK YOUR POKÉMON LIST</button></Link>
            <Link to="/game/choose-region" onClick={handleResetStates}><button className="btn-continue-playing-captured">CONTINUE PLAYING</button></Link>
          </div>
        </div>
      )}

      {!isMessageOpen && (
        <button onClick={handleCapturePokemon} className="btn-capture">
          Capture
        </button>
      )}
    </div>
  );
}
