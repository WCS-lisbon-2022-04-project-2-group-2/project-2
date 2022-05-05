import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import useFetch from "../../../hooks/useFetch";

import GameContext from "../../../contexts/GameContext";
import "./Captured.css";

export default function Captured() {
  const navigate = useNavigate();
  const { wildPokemon, setCapturedPokemons } = useContext(GameContext);

  const [isMessageOpen, setIsMessageOpen] = useState(false);

  // Para testes de CSS
  // const url = "https://pokeapi.co/api/v2/pokemon/6/";

  // correcta

  //   const url = `https://pokeapi.co/api/v2/pokemon/${wildPokemon.id}/`;

  // const { isLoading, error, response } = useFetch(url);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Oops...something went wrong...</div>;
  // }

  const name = wildPokemon[0].name.toUpperCase();

  const id = wildPokemon[0].id;
  const image = wildPokemon[0].sprites.other["official-artwork"].front_default;
  // const handleCapturePokemon = () => {
  //   setIsMessageOpen(true);
  // setCapturedPokemons((prevState) => [...prevState, response]);
  // localStorage.setItem(id, name);

  const handleCapturePokemon = () => {
    setIsMessageOpen(true);
    const currentCollection = localStorage.getItem("myPokemon");
    const parsed = JSON.parse(currentCollection) || [];
    parsed.push({ id: id, name: name });
    localStorage.setItem("myPokemon", JSON.stringify(parsed));
    setTimeout(() => {
      navigate("/pokedex-page/my-pokemon");
    }, 3000);
  };
  // }

  //   setTimeout(() => {
  //     navigate("/pokedex-page/my-pokemon");
  //   }, 3000);
  // };

  return (
    <div className="captured-pokemon_card">
      <div className="captured-pokemon_info">
        <img className="captured_pokemon" src={image} alt="Captured Pokemon" />
        {isMessageOpen && (
          <div className="captured-pokemon_message_container">
            <p className="captured-pokemon_message">
              Congratulations! {name} was captured!
            </p>
          </div>
        )}
      </div>

      {!isMessageOpen && (
        <button onClick={handleCapturePokemon} className="btn-capture">
          Capture
        </button>
      )}
    </div>
  );
}
