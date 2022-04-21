import React from "react"
import {Link} from "react-router-dom"
import "./HomePage.css"

function HomePage () {

    return(
        <div className="homepage-main-container">
            <Link to="/game/choose-generation/">
                <button className="buttonStart">Fight!</button>
            </Link> 
        </div>
    )   

}
export default HomePage;
