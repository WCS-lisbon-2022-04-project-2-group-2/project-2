import React from "react";
import BackgroundImg from "../../media/images/pokemon-ball.png";
import "./About.css";

function About() {
  return (
    <div className="about-game">
      <div
        className="about-background_img"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></div>

      <div className="about-game_container">
        <h1>About Pokemon Game</h1>
        <div className="about-game_card">
          <div className="game-rules_desktop">
            <p>
              Pokémon are creatures of all shapes and sizes who live in the wild
              or alongside their human partners. In WildPokémon, players choose
              a starter Pokémon, taking into consideration their Generation, and
              then fight against wild Pokémon found in their desired Region by
              sending their chosen Pokémon into battle with the goal of winning
              and capturing the enemy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
