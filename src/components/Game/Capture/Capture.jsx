import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import "./Capture.css";
import GameContext from "../../../contexts/GameContext"

function Capture() {

    const { wildPokemon } = useContext(GameContext)
    const name = wildPokemon[0].name.toUpperCase();
    const image = wildPokemon[0].sprites.other["official-artwork"].front_default;
    
    return (
        <div>
            <div className='catch-pokemon_info'>
                <h1 className="catch-pokemon_title">
                    {name} fainted!
                </h1>
                <img className="catch_pokemon"
                src={image}
                alt="Fainted Pokemon" 
                />
            </div>
            <div className='capture_buttons'>
                <Link to="/game/captured">
                    <button className="btn-catch">
                        Catch
                    </button>
                </Link>
            
                <Link to="/game/choose-generation">
                    <button className='btn-discard'>
                        Discard
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Capture;