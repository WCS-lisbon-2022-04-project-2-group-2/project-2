import React from "react";


function Characters(props){

    const { name, sprites,types, height, weight} = props;

    return(
        <div className="card" id={name}>
            <img src={sprites.other['official-artwork'].front_default} alt="avatar" />
            <h2 className="cardName">{name.toUpperCase()}</h2>
            <div className="cardInfo">
                <h3>Type: {types[0].type.name.toUpperCase()}</h3>
                <h3>Height: {height}ft</h3>
                <h3>Weight: {weight}lb</h3>
            </div>
        </div>
    )
};

export default Characters;