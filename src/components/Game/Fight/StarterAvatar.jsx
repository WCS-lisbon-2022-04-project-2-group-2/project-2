import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";

function StarterAvatar() {
  const { starterFaint, starter } = useContext(GameContext);
  const starterImage = starter[0].sprites.back_default; //add condition in case back_default is not available
  let animation;
  if (starterFaint === true) {
    animation = "animated fadeOut slow";
  } else if (starterFaint === false) {
    animation = "animated 	fadeInUp";
  } else if (starterFaint === "") {
    animation = "hide";
  }
  return (
    <div className={animation}>
      <img className="avatar mx-2" src={starterImage} alt="" />
    </div>
  );
}
export default StarterAvatar;
