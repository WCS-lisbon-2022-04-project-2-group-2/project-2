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

    navigate(`/game/wild-pokemon/${region}/${id}`);
  };

  const regions = [
    {
      name: "KANTO",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      onClick: () => handleClick(1, 151, "KANTO"),
    },
    {
      name: "JOHTO",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
      onClick: () => handleClick(152, 251, "JOHTO"),
    },
    {
      name: "HOENN",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
      onClick: () => handleClick(252, 386, "HOENN"),
    },
    {
      name: "SINNOH",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
      onClick: () => handleClick(387, 494, "SINNOH"),
    },
    {
      name: "UNOVA",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png",
      onClick: () => handleClick(495, 649, "UNOVA"),
    },
    {
      name: "KALOS",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png",
      onClick: () => handleClick(650, 721, "KALOS"),
    },
    {
      name: "ALOLA",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png",
      onClick: () => handleClick(722, 809, "ALOLA"),
    },
    {
      name: "GALAR",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png",
      onClick: () => handleClick(810, 904, "GALAR"),
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
