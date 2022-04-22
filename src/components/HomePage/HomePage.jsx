import React from "react"
import {Link} from "react-router-dom"
import "./HomePage.css"
import backgroundImage from '../../media/images/background.gif'

function HomePage () {

    return(
        <div className="homepage-main-container" style={{ background: `url(${backgroundImage})`}}>
            <video src={backgroundImage}></video>
            <Link to="/game/choose-generation/">
                <button className="buttonStart">Fight!</button>
            </Link> 
        </div>
    )   

}
export default HomePage;
