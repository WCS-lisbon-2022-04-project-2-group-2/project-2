import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from '../Characters/Characters';

function CharactersList(){
    const [characters, setCharacters] = useState([])

    const getCharacter = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => setCharacters(response.data.results))
        
        console.log("mounted again and again")
    }
    useEffect(() => {
        getCharacter()
    }, [])
    
    //in the following line "characters" is a State, specifically an array
    const displayCharacters = characters.map(character => <Characters {...character}/>)

    return(
        <div>
            <div className='header'>
                <h1>Pokemon App</h1>
                <button className='btnShowList' type="button" onClick={getCharacter}>Show Characters</button>
            </div>
            <div className='characterList'>
                {displayCharacters}
            </div>
        </div>
    )
};


export default CharactersList;