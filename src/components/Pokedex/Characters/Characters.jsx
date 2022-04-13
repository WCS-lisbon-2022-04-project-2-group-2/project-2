import React, {useEffect} from "react";
import axios from "axios"

function Characters(props){


    const getIndividualCharacters = () => {
       axios
            .get({url})
            .then(response => console.log(response.data))
    }
    
    
        getIndividualCharacters()
    

    const { name , url} = props;
    return(
        <div className="card" id={name}>
            <h2>{name}</h2>
            <img src='' alt={`pokemon ${name}`}/>
        </div>
    )
};

export default Characters;