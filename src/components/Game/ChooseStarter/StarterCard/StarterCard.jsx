import React, {useContext} from "react";
import GameContext from "../../../../contexts/GameContext";
import axios from "axios";
import { Link } from "react-router-dom";
import './StarterCard.css'

function StarterCard() {
    const {generation, setStarter} = useContext(GameContext);

    // const saveToLocalStorage = async(el) => {
    //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${el}/`)
    //     localStorage.setItem(el, res.data.name);
    // }

    const saveChosen = async(element) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${element}/`)
        setStarter([res.data])
    }
    
   
    return (
        <>
        <h1>Choose a Starter Pokémon</h1>
        <div className="starter-card-container">
           { generation.map(number => {
               return (
                    <div>
                        <Link to="/game/choose-region" onClick={() => saveChosen(number)}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`} alt={`pokemon no.${number}`} />
                        </Link>
                    </div>
               ) 
           })}
        </div>
        </>
    );
}

export default StarterCard; 