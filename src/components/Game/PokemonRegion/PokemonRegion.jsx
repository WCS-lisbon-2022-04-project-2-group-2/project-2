import React from "react";
import { useNavigate } from "react-router-dom";
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

    navigate(`/wild-pokemon/${region}/${id}`);
  };

  const regions = [
    {
      name: "KANTO",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      onClick: () => handleClick(1, 150, "KANTO"),
    },
    {
      name: "JOHTO",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      onClick: () => handleClick(151, 300, "JOHTO"),
    },
    {
      name: "HOENN",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png",
      onClick: () => handleClick(301, 450, "HOENN"),
    },
    {
      name: "SINNOH",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png",
      onClick: () => handleClick(451, 600, "SINNOH"),
    },
    {
      name: "UNOVA",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png",
      onClick: () => handleClick(601, 750, "UNOVA"),
    },
    {
      name: "KALOS",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png",
      onClick: () => handleClick(751, 900, "KALOS"),
    },
    {
      name: "ALOLA",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      onClick: () => handleClick(901, 1050, "ALOLA"),
    },
    {
      name: "GALAR",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png",
      onClick: () => handleClick(1051, 1200, "GALAR"),
    },
  ];

  return (
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
  );
}

export default PokemonRegion;
