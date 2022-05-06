import React from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";



function BurgerMenu({ isOpen }) {

  const body = document.querySelector('body');
  isOpen ? body.style.overflowY = "hidden" : body.style.overflowY = "initial";
  
  return (
    <>
      <div className="burger-container">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>

      <div className="burger-links_container">
        <ul className="burger-links">
          <Link to="/about">About</Link>
          <Link to="/">Game</Link>
          <Link to="/pokedex-page">Pokédex</Link>
        </ul>
      </div>

      <style jsx>{`
        .burger1 {
          transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
        }
        .burger2 {
          transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
        }

        .burger-links {
          display: ${isOpen ? "grid" : "none"};
        }
      `}</style>
    </>
  );
}

export default BurgerMenu;
