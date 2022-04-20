import React from "react"
import {Link} from "react-router-dom"
import "./HomePage.css"

function beginGame () {

    return(
        <div>
            <button className="buttonStart">
                <Link to= "/generation">Fight!</Link> 
                
            </button>
            
        </div>
    )   

}
export default beginGame
