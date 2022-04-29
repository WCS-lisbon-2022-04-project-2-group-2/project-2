import React from "react";
import { useNavigate } from "react-router-dom";
import Kanto from "../../../media/images/Kanto.png";
import Johto from "../../../media/images/Johto.png";
import Hoenn from "../../../media/images/Hoenn.png";
import Sinnoh from "../../../media/images/Sinnoh.png";
import Unova from "../../../media/images/Unova.png";
import Kalos from "../../../media/images/kalos.jpg";
import Alola from "../../../media/images/kalos.jpg";
import Galar from "../../../media/images/Galar.png";
import "./PokemonRegion.css";

function getRandomId(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function PokemonRegion() {
  const navigate = useNavigate();

  const handleClick = (min, max, region) => {
    const id = getRandomId(min, max);

    navigate(`/game/wild-pokemon/${region}/${id}`);
  };

  const regions = [
    {
      name: "KANTO",
      src: `${Kanto}`,
      onClick: () => handleClick(1, 151, "KANTO"),
    },
    {
      name: "JOHTO",
      src: `${Johto}`,
      onClick: () => handleClick(152, 251, "JOHTO"),
    },
    {
      name: "HOENN",
      src: `${Hoenn}`,
      onClick: () => handleClick(252, 386, "HOENN"),
    },
    {
      name: "SINNOH",
      src: `${Sinnoh}`,
      onClick: () => handleClick(387, 494, "SINNOH"),
    },
    {
      name: "UNOVA",
      src: `${Unova}`,
      onClick: () => handleClick(495, 649, "UNOVA"),
    },
    {
      name: "KALOS",
      src: `${Kalos}`,
      onClick: () => handleClick(650, 721, "KALOS"),
    },
    {
      name: "ALOLA",
      src: `${Alola}`,
      onClick: () => handleClick(722, 809, "ALOLA"),
    },
    {
      name: "GALAR",
      src: `${Galar}`,
      onClick: () => handleClick(810, 898, "GALAR"),
    },
  ];

  return (
    <>
      <h1>Choose a Region to Catch new Pokémon</h1>
      <div className="regions-card">
        {regions.map((region) => (
          <div>
            <h3 className="region-name">{region.name}</h3>
            <img
              className="region-img"
              src={region.src}
              alt="pokemon region"
              onClick={region.onClick}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default PokemonRegion;
