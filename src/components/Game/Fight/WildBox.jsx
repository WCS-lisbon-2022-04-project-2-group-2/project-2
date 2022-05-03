import React, { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import WildAvatar from "./WildAvatar";

function WildBox() {
  const { wildHealth, wildPokemon, wildFaint } = useContext(GameContext);
  const nameWild = wildPokemon[0].name.toUpperCase();
  // calc enemy progress bar percentage based on HP
  let percentage = (wildHealth / 200) * 100 + "%";
  let num = (wildHealth / 200) * 100;
  let progressColor;

  // use enemy progress bar calc to style colors
  if (num <= 25) {
    progressColor = "progress-bar bg-danger";
  } else if (num <= 50) {
    progressColor = "progress-bar bg-warning";
  } else if (num > 50) {
    progressColor = "progress-bar bg-success";
  }

  return (
    <div>
      {/* ENEMY POKEMON CONTAINER */}
      <div id="enemy-container">
        {/* ENEMY POKEMON INFO BOX */}
        <div id="enemy-info-box">
          <div className="d-flex justify-content-between align-items-center">
            <h2 id="enemy-name">{nameWild}</h2>
          </div>
          <div className="health-points_container">
            <div className="d-flex justify-content-between align-items-center ml-3 mr-1">
              <h5>HP</h5>
              <div className="progress ml-1 both-progress">
                <div
                  className={progressColor}
                  role="progressbar"
                  style={{ width: percentage }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div id="hero-hp" className="d-flex">
              <div className="ml-auto mr-3">
                <h5>
                  {wildHealth}/{200}
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* END ENEMY POKEMON INFO BOX */}

        {/* ENEMY POKEMON AVATAR PICTURE */}
        <div className="mr-sm-4 avatar-box">
          <WildAvatar />

          <div className="oval" />
        </div>
        {/* END ENEMY POKEMON AVATAR PICTURE */}
      </div>
      {/* END ENEMY POKEMON CONTAINER */}
    </div>
  );
}

export default WildBox;
