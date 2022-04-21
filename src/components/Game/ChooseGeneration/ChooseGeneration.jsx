import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import { Link } from "react-router-dom";
import './ChooseGeneration.css'

function ChooseGeneration(){
    const {setGeneration} = useContext(GameContext);

    const gen1 = [1,2,3,4,5,6,7,8,9]
    const gen2 = [152,153,154,155,156,157,158,159,160]
    const gen3 = [252,253,254,255,256,257,258,259,260]

    function selectGen(element) {
        switch (element) {
            case "1":
                setGeneration(gen1);
                break;
            case "2":
                setGeneration(gen2);
                break;
            case "3":
                setGeneration(gen3);
                break;
            default:
                break;
        }
        }
    return(
        <div>
            <div className="generation-container">
                <Link to="/game/choose-starter" onClick={() => selectGen("1")}>
                    <div>
                        <p>Generation 1</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={() => selectGen("2")}>
                    <div>
                        <p>Generation 2</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={() => selectGen("3")}>
                    <div>
                        <p>Generation 3</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={() => selectGen("4")}>
                    <div>
                        <p>Generation 4</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={() => selectGen("5")}>
                    <div>
                        <p>Generation 5</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>
                <Link to="/game/choose-starter" onClick={() => selectGen("6")}>
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