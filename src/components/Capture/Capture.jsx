import React from 'react';


function capture() {
    return (
        <div>
            <h1 className="catch-pokemon_title">{} fainted!</h1>
            <img className="catch_pokemon" src={"#"} alt="Fainted Pokemon" />

            
            <button className="btn-catch">Catch</button>
        </div>
    );
}

export default capture;