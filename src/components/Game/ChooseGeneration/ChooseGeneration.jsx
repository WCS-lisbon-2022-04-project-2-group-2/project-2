import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import GameContext from "../../../contexts/GameContext";
import "./ChooseGeneration.css";
// import "swiper/css";

function ChooseGeneration() {
  const { setGeneration } = useContext(GameContext);

  const gen1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gen2 = [152, 153, 154, 155, 156, 157, 158, 159, 160];
  const gen3 = [252, 253, 254, 255, 256, 257, 258, 259, 260];
  const gen4 = [387, 388, 389, 390, 391, 392, 393, 394, 395];
  const gen5 = [495, 496, 497, 498, 499, 500, 501, 502, 503];
  const gen6 = [650, 651, 652, 653, 654, 655, 656, 657, 658];
  const gen7 = [722, 723, 724, 725, 726, 727, 728, 729, 730];
  const gen8 = [810, 811, 812, 813, 814, 815, 816, 817, 818];

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
      case "4":
        setGeneration(gen4);
        break;
      case "5":
        setGeneration(gen5);
        break;
      case "6":
        setGeneration(gen6);
        break;
      case "7":
        setGeneration(gen7);
        break;
      case "8":
        setGeneration(gen8);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <h1 className="choose-generation_title">
        Choose a Generation of Pokémon
      </h1>
      <div className="generation-container">
        <Link to="/game/choose-starter" onClick={() => selectGen("1")}>
          <div>
            <p>Generation 1</p>
            <div className="starter-triangle-container">
              <div className="top-triangle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                  alt="pokedex section"
                />
              </div>
              <div className="bottom-triangle">
                <div className="bottom-left">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                    alt="pokedex section"
                  />
                </div>
                <div className="bottom-right">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                    alt="pokedex section"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/choose-starter" onClick={() => selectGen("2")}>
          <div>
            <p>Generation 2</p>
            <div className="starter-triangle-container">
              <div className="top-triangle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
                  alt="pokedex section"
                />
              </div>
              <div className="bottom-triangle">
                <div className="bottom-left">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
                    alt="pokedex section"
                  />
                </div>
                <div className="bottom-right">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png"
                    alt="pokedex section"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/choose-starter" onClick={() => selectGen("3")}>
          <div>
            <p>Generation 3</p>
            <div className="starter-triangle-container">
              <div className="top-triangle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
                  alt="pokedex section"
                />
              </div>
              <div className="bottom-triangle">
                <div className="bottom-left">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png"
                    alt="pokedex section"
                  />
                </div>
                <div className="bottom-right">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png"
                    alt="pokedex section"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/choose-starter" onClick={() => selectGen("4")}>
          <div>
            <p>Generation 4</p>
            <div className="starter-triangle-container">
              <div className="top-triangle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
                  alt="pokedex section"
                />
              </div>
              <div className="bottom-triangle">
                <div className="bottom-left">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"
                    alt="pokedex section"
                  />
                </div>
                <div className="bottom-right">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png"
                    alt="pokedex section"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/choose-starter" onClick={() => selectGen("5")}>
          <div>
            <p>Generation 5</p>
            <div className="starter-triangle-container">
              <div className="top-triangle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png"
                  alt="pokedex section"
                />
              </div>
              <div className="bottom-triangle">
                <div className="bottom-left">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png"
                    alt="pokedex section"
                  />
                </div>
                <div className="bottom-right">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png"
                    alt="pokedex section"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/choose-starter" onClick={() => selectGen("6")}>
          <div>
            <p>Generation 6</p>
            <div className="starter-triangle-container">
              <div className="top-triangle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png"
                  alt="pokedex section"
                />
              </div>
              <div className="bottom-triangle">
                <div className="bottom-left">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png"
                    alt="pokedex section"
                  />
                </div>
                <div className="bottom-right">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png"
                    alt="pokedex section"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/choose-starter" onClick={() => selectGen("7")}>
          <div>
            <p>Generation 7</p>
            <div className="starter-triangle-container">
              <div className="top-triangle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png"
                  alt="pokedex section"
                />
              </div>
              <div className="bottom-triangle">
                <div className="bottom-left">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png"
                    alt="pokedex section"
                  />
                </div>
                <div className="bottom-right">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png"
                    alt="pokedex section"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/choose-starter" onClick={() => selectGen("8")}>
          <div>
            <p>Generation 8</p>
            <div className="starter-triangle-container">
              <div className="top-triangle">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png"
                  alt="pokedex section"
                />
              </div>
              <div className="bottom-triangle">
                <div className="bottom-left">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png"
                    alt="pokedex section"
                  />
                </div>
                <div className="bottom-right">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png"
                    alt="pokedex section"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/*               
                <Link to="/game/choose-starter" onClick={() => selectGen("7")}>
                    <div>
                        <p>Generation 7</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>    
                <Link to="/game/choose-starter" onClick={() => selectGen("8")}>
                    <div>
                        <p>Generation 8</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>    
                <Link to="/game/choose-starter" onClick={() => selectGen("9")}>
                    <div>
                        <p>Generation 9</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokedex section"/>
                    </div>
                </Link>                */}
      </div>
    </div>
  );
}

export default ChooseGeneration;
