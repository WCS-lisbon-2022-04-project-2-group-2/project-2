import React, { useContext } from "react";
import GameContext from "../../../../contexts/GameContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./StarterCard.css";

function StarterCard() {
  const { generation, chosenStarter, setChosenStarter } =
    useContext(GameContext);
  console.log(generation);

  const saveToLocalStorage = async (el) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${el}/`);
    localStorage.setItem(el, res.data.name);
  };

  return (
    <>
      <h1 className="choose-starter_title">Choose a Starter Pokémon</h1>
      <div className="starter-card-container">
        {generation.map((number) => {
          return (
            <div>
              <Link
                to="/game/choose-region"
                onClick={() => saveToLocalStorage(number)}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}
                  alt={`pokemon no.${number}`}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StarterCard;
