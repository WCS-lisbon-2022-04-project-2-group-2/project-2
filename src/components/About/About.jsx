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
        <h1>How to Play the Pokemon Game</h1>
        <div className="about-game_card">
          <p className="game-rules">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae perferendis ipsum odio eos delectus! Eum quas corporis
            similique ad maxime mollitia, a ratione qui dignissimos.
            Voluptatibus excepturi exercitationem nesciunt quod.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
