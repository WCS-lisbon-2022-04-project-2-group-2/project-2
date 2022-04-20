import React, {useState} from 'react'
import { Link } from "react-router-dom";
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
		    <Link to='/about'>
			    About
			</Link>
			<Link to='/game'>
				Game
			</Link>
			<Link to='/pokedex-page'>
				Pokédex
			</Link>
			<Link to='/quiz'>
				Quiz
			</Link>
			<Link to='/news'>
				News
			</Link>
		</div>

		<div className="burger-menu" onClick={toggleBurger}>
			<BurgerMenu isOpen={burgerOpen}/>

		</div>


		<style jsx>{`
             
                @media (max-width: 767px){
                 
                    .navBar-links{
                        display: none;
                        
                    }
					
                }
                
                          
            `}</style>

    </div>
        
    )
}

export default NavBar

