import React from "react"
import {Link} from "react-router-dom"
import "./HomePage.css"

function beginGame () {

    return (

        <div>
        <img
          className="homePage-img"
          src={
            "https://cdn.discordapp.com/attachments/961547095179948085/966335426254221332/DVMT-6OXcAE2rZY.jpg"
          }
          alt="Background img"
        />
            <div>
                <button className="buttonStart">
                    <Link to= "/generation">Fight!</Link> 

                </button>
            </div>
        </div>

)   

}
export default beginGame
