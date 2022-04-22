import React, { useState } from "react";
import logo from "../../media/images/logo.svg";
import BurgerMenu from "./BurgerMenu";
import "./NavBar.css";

function NavBar(props) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div className="navBar">
      <div>
        <img className="logo-img" src={logo} alt="Logo" />
      </div>

      <button className="btn-pokedex">POKÉDEX</button>

      <div className="burger-menu" onClick={toggleBurger}>
        <BurgerMenu isOpen={burgerOpen} />
      </div>
    </div>
  );
}

export default NavBar;
