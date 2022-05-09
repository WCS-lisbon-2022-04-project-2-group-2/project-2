import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import backgroundImage from "../../media/images/background.gif";
import GameContext from "../../contexts/GameContext";

function HomePage() {
  const {
    setGeneration,
    setStarter,
    setWildPokemon,
    setWildHealth,
    setStarterHealth,
    setTextMessageOne,
    setTextMessageTwo,
    setWildFaint,
    setStarterFaint,
    setGameOver,
    setStarterTurnOver,
    setWildTurnOver,
  } = useContext(GameContext);

  const handleResetStates = () => {
    setGeneration();
    setStarter();
    setWildPokemon();
    setWildHealth(200);
    setStarterHealth(200);
    setTextMessageOne(" ");
    setTextMessageTwo("");
    setWildFaint(false);
    setStarterFaint(false);
    setGameOver(false);
    setStarterTurnOver(false);
    setWildTurnOver(true);
  };
  return (
    <div
      className="homepage-main-container"
      style={{ background: `url(${backgroundImage})` }}
    >
      <video src={backgroundImage}></video>
      <Link to="/game/choose-generation/">
        <button className="buttonStart" onClick={() => handleResetStates()}>
          FIGHT!
        </button>
      </Link>
    </div>
  );
}
export default HomePage;
