import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";

function WildAvatar() {
  const { wildFaint, wildPokemon } = useContext(GameContext);
  const wildImage = wildPokemon.sprites.front_default;
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
      <img className="avatar mr-3 mt-4" src={wildImage} alt="" />
    </div>
  );
}

export default WildAvatar;
