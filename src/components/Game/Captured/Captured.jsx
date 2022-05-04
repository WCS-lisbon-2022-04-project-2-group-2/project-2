import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import "./Captured.css"
import GameContext from '../../../contexts/GameContext';

function Captured() {

    const { wildPokemon } = useContext(GameContext)
    const name = wildPokemon[0].name.toUpperCase();
    const image = wildPokemon[0].sprites.other["official-artwork"].front_default;
    const id = wildPokemon[0].id;

    const capturePokemon = () => {
        localStorage.setItem(id, name)
    }

    return (
        <div>
            <div className='captured-pokemon_info'>
                <img className="captured_pokemon"
                src={image}
                alt="Captured Pokemon" 
                />
                <h1 className="captured-pokemon_title">
                Congratulations, {name} was captured!
                </h1>
            </div>
            <div>
                <Link to="/game/restart-game">
                    <button onClick={()=> capturePokemon()} className="btn-save">
                        Save
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Captured;

