import React, { useState } from "react";
import logo from "../../media/images/logo.svg";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div className="navBar">
      <div className="logo-container">
        <h3 className="app-name">WildPokémon</h3>
        <Link to="/">
          <img className="logo-img" src={logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link to="/pokedex-page">
          <button className="btn-pokedex">POKÉDEX</button>
        </Link>
      </div>
      <div className="burger-menu" onClick={toggleBurger}>
        <BurgerMenu isOpen={burgerOpen} />
      </div>
    </div>
  );
}

export default NavBar;
