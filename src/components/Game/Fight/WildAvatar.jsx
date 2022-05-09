import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";

function WildAvatar() {
  const { wildFaint, wildPokemon, wildTurnOver } = useContext(GameContext);
  const wildImage = wildPokemon[0].sprites.front_default;
  let animation;
  if (wildFaint === true) {
    animation = "animated fadeOut slow";
  } else if (wildFaint === false) {
    animation = "animated zoomIn slow";
  } else if (wildFaint === "") {
    animation = "hide";
  }
  return (
    <div className={animation}>
      {wildTurnOver
        ? <img className="avatar mr-3 mt-4" src={wildImage} alt="" />
        : <img className="avatar mr-3 mt-4 playing-pokemon" src={wildImage} alt="" />}

    </div>
  );
}

export default WildAvatar;
