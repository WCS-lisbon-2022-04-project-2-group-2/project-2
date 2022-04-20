import React from "react";
import { useNavigate } from "react-router-dom";
import "./PokemonRegion.css";

function getRandomId(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function PokemonRegion(props) {
  const navigate = useNavigate();

  const handleClick = (min, max) => {
    const id = getRandomId(min, max);

    navigate(`/wild-pokemon/${id}`);
  };

  return (
    <div className="regions-card">
      <div>
        <h3>KANTO</h3>
        <img
          className="region-img"
          src={"#"}
          alt="pokemon region"
          onClick={() => handleClick(1, 150)}
        />
      </div>
      <div>
        <h3>JOHTO</h3>
        <img className="region-img" src={"#"} alt="pokemon region" />
      </div>
      <div>
        <h3>HOENN</h3>
        <img className="region-img" src={"#"} alt="pokemon region" />
      </div>
      <div>
        <h3>SINNOH</h3>
        <img className="region-img" src={"#"} alt="pokemon region" />
      </div>
      <div>
        <h3>UNOVA</h3>
        <img className="region-img" src={"#"} alt="pokemon region" />
      </div>
      <div>
        <h3>KALOS</h3>
        <img className="region-img" src={"#"} alt="pokemon region" />
      </div>
      <div>
        <h3>ALOLA</h3>
        <img className="region-img" src={"#"} alt="pokemon region" />
      </div>
      <div>
        <h3>GALAR</h3>
        <img className="region-img" src={"#"} alt="pokemon region" />
      </div>
    </div>
  );
}

export default PokemonRegion;
