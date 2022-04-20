import React from "react"
import { Link } from "react-router-dom";
import "./BurgerMenu.css"


function BurgerMenu({isOpen}) {

   
    return(
        <>
        <div className="burger-container">
            <div className="burger burger1"></div>
            <div className="burger burger2"></div>
            <div className="burger burger3"></div> 
        </div>
           
            <ul className="burger-links">
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
		        <Link to='/game'>Game</Link>
		        <Link to='/pokedex'>Pokédex</Link>
		        <Link to='/quiz'>Quiz</Link>
		       
            </ul>
            

            <style jsx>{`
               
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }

                .burger-links{
                    display: ${ isOpen ? 'grid' : 'none'}
                }
                
            `}</style>
       </>
    )
}

export default BurgerMenu