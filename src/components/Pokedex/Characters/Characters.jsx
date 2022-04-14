import React from "react";


function Characters(props){

    const { name, sprites, id} = props;

    return(
        <div className="card" id={name}>
            <img src={sprites.other['official-artwork'].front_default} alt="avatar" />
            <h2>{name}</h2>
            <h2>ID: {id}</h2>
        </div>
    )
};

export default Characters;