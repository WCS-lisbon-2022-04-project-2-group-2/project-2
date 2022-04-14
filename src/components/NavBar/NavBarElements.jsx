import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import logo from "../../media/images/logo.svg"
import BurgerMenu from "./BurgerMenu";
import "./NavBarElements.css"


function NavBar(){

	const[burgerOpen, setBurgerOpen] = useState(false);

	const toggleBurger = () => {
		setBurgerOpen(!burgerOpen)
	}

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

		<div className="burger-menu" onClick={toggleBurger}>
			<BurgerMenu isOpen={burgerOpen}/>

		</div>


		<style jsx>{`
             
                @media (max-width: 767px){
                 
                    .navBar-links{
                        display: ${burgerOpen ? 'inline' : 'none'};
						display:grid;
                        height: 50vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: absolute;
						left: 55px;
                        
                    }
					.navBar-links a {
						font-size: 10px;
						

					}
                }
                
               
                
            `}</style>

    </div>
        
    )
}

export default NavBar
