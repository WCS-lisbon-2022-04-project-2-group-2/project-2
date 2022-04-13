import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../../media/images/logo.svg"
import "./NavBar.Elements.css"


function NavBar(){
    return(
        <div className="navBar-container">
		<div>
			<img className="logo-img" src={logo} alt="Logo" />
		</div>

		<div className="navBar-links">
		    <NavLink to='/about' activeStyle>
			        About</NavLink>
		<NavLink to='/Game' activeStyle>
			Game
		</NavLink>
		<NavLink to='/pokedex' activeStyle>
			Pokédex
		</NavLink>
		<NavLink to='/quiz' activeStyle>
			Quiz
		</NavLink>
		<NavLink to='/news' activeStyle>
			News
		</NavLink>
		</div>
        </div>
        
    )
}

export default NavBar
