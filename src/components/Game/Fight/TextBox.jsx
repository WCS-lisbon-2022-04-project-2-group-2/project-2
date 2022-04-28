import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";

function TextBox(){
    const { textMessageOne, textMessageTwo} = useContext(GameContext)
    return (
        <div className="battle-text-content">
          <p>
            {textMessageOne} <br /> {textMessageTwo}
          </p>
        </div>
      );
}
export default TextBox;
