import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import { Link } from "react-router-dom";

function FightOver() {
  const { wildFaint, starterFaint } = useContext(GameContext);

  return (
    <div className="battle-text-content">
      <p id="play-again-text">
        {starterFaint ? (
          <Link to="/game/lost-battle">CLICK TO CONTINUE</Link>
        ) : null}
        {wildFaint ? <Link to="/game/captured">CLICK TO CONTINUE</Link> : null}
      </p>
    </div>
  );
}

export default FightOver;
