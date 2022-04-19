import React from 'react';
import logo from "../../media/images/logo.svg"
import "./NavBar.css"
import './NavBarElements.css'

function NavBar(props) {
    return (
        <div className='navBar'>
            <div>
			    <img className="logo-img" src={logo} alt="Logo" />
		    </div>

            <button className='btn-pokedex'>POKÉDEX</button>
        </div>
        
    );
}

export default NavBar;