import React from "react";


function Characters(props){

    const { name, sprites, id} = props;
    return(
        <div className="card" id={name}>
            <img src={sprites.front_default} alt="avatar" />
            <h2>{name}{id}</h2>
        </div>
    )
};

export default Characters;