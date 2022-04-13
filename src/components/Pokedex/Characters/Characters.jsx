import React from "react";


function Characters(props){
    const { name} = props;
    return(
        <div className="card">
            <h2>{name}</h2>
        </div>
    )
};

export default Characters;