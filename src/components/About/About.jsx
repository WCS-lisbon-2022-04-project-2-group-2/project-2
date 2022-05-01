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
              or alongside their human partners (called “Trainers”). During
              their adventures, Pokémon grow and become more experienced and
              even, evolve into stronger Pokémon. In the Pokémon Game, players
              choose a starter Pokémon, taking in consideration their Generation
              and the Region and then play against each other, sending their
              Pokémon into battle with the goal of winning and catch the enemy
              (collecting cards).
            </p>
          </div>

          {/* <p className="game-rules_mobile">
            Pokémon are creatures of all shapes and sizes who live in the wild
            or alongside their human partners (called “Trainers”). During their
            adventures, Pokémon grow and become more experienced and even,
            evolve into stronger Pokémon. In the Pokémon Game, players choose a
            starter Pokémon, taking in consideration their Generation and the
            Region and then play against each other, sending their Pokémon into
            battle with the goal of winning and catch the enemy (collecting
            cards).
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default About;
