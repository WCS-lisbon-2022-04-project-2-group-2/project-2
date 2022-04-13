import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from '../Characters/Characters';

function CharactersList(){
    //create the array
    const [characters, setCharacters] = useState([])
    const [individual, setIndividual] = useState('')
    const [allPokemon, setAllPokemon] = useState([])


    //create module to fetch data from API
    const getCharacter = () => {

        axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => setCharacters(response.data.results))

            // //for every element obtain the name
            // //for every name obtain the URL for all the pokemon info
            // axios
            // .get(`https://pokeapi.co/api/v2/pokemon/${e.name}`)
            // .then(response => array.push(response.data))
            // //prints the "data" from outside of the map scope
        
    }
    
    // console.log(characters)

    // const getInformation = (event) => {
    //     event.preventDefault()
    //     setIndividual(event.target.id)

    //     axios
    //     .get(`https://pokeapi.co/api/v2/pokemon-form/${individual}`)
    //     .then(response => console.log(response.data.sprites.front_default))
    // }
        // characters.indexOf()

        // axios
        // .get('https://pokeapi.co/api/v2/pokemon/')
        // .then(response => setCharacters(response.data.results))
    
  
    
    //in the following line "characters" is a State, specifically an array
    const displayCharacters = characters.map(character => <Characters {...character} key={character.name}/>)

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