import React, { useContext } from "react";
import GameContext from "../../../../contexts/GameContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./StarterCard.css";

function StarterCard() {
  const { generation, setStarter } = useContext(GameContext);

  // const saveToLocalStorage = async(el) => {
  //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${el}/`)
  //     localStorage.setItem(el, res.data.name);
  // }

  const saveChosen = async (id) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );
    setStarter([res.data]);
  };

  return (
    <div className="choose-starter-main-container">
      <h1 className="choose-starter_title">Choose a Starter Pokémon</h1>
      <div className="starter-card-container">
        {generation.map((number, index) => {
          return (
            <div className="starter-card_pokemon" key={number}>
              <Link to="/game/choose-region" onClick={() => saveChosen(number)}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}
                  alt={`pokemon no.${number}`}
                  style={
                    index < 3
                      ? {
                          backgroundColor: "#92E469",
                          border: "2px solid #78C850",
                          boxShadow: "5px 5px 15px 5px #4E8234",
                        }
                      : index < 6
                      ? {
                          backgroundColor: "#F6A66C",
                          border: "2px solid #F08030",
                          boxShadow: "5px 5px 15px 5px #CB641D",
                        }
                      : {
                          backgroundColor: "#98B6FF",
                          border: "2px solid #6890F0",
                          boxShadow: "5px 5px 15px 5px #445E9C",
                        }
                  }
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StarterCard;
