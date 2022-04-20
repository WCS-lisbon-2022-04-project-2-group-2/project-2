import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import { Link } from "react-router-dom";
import './ChooseGeneration.css'

function ChooseGeneration(){
    const {generation,setGeneration} = useContext(GameContext);
    console.log(generation)
    return(
        <div>
            <div className="generation-container">
                <Link to="/game/choose-starter" onClick={setGeneration("1")}>
                    <div>
                        <p>Generation 1</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={setGeneration("2")}>
                    <div>
                        <p>Generation 2</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={setGeneration("3")}>
                    <div>
                        <p>Generation 3</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={setGeneration("4")}>
                    <div>
                        <p>Generation 4</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={setGeneration("5")}>
                    <div>
                        <p>Generation 5</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={setGeneration("6")}>
                    <div>
                        <p>Generation 6</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                
            </div>
        </div>
    );
}

export default ChooseGeneration;