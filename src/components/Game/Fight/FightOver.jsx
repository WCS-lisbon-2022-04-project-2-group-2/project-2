import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import { Link } from "react-router-dom";

function FightOver () {
    const {starter,wildPokemon,setStarterHealth,setWildHealth,setGameOver,setTextMessageOne,setTextMessageTwo,
        setWildFaint,setStarterFaint} = useContext(GameContext)

    //reset all states after the fight is over
    const handleFightOver = () =>{
        starter()
        wildPokemon()
        setStarterHealth(200)
        setWildHealth(200)
        setGameOver(false)
        setTextMessageOne(" ")
        setTextMessageTwo("")
        setWildFaint(false)
        setStarterFaint(false)
    }
    return (
        <div className="battle-text-content">
            <p id="play-again-text">
                <Link to="/game/capture" onClick={() => handleFightOver()}>
                    Click Here To Continue
                </Link>
            </p>
        </div>
    );
  }

export default FightOver;
