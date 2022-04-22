import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../media/images/logo.svg";
import BurgerMenu from "./BurgerMenu";
import "./NavBarElements.css";

function NavBar() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div className="navBar-container">
      <div>
        <Link to="/">
          <img className="logo-img" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="navBar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Game</Link>
        <Link to="/pokedex-page">Pokédex</Link>
        <Link to="/quiz">Quiz</Link>
      </div>

      <div className="burger-menu" onClick={toggleBurger}>
        <BurgerMenu isOpen={burgerOpen} />
      </div>
    </div>
  );
}

export default NavBar;