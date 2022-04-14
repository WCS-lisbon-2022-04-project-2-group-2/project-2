import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from '../Characters/Characters';

function CharactersList(){
    //create the array
    const [characters, setCharacters] = useState([])
    const [allPokemon, setAllPokemon] = useState([])

    //fetch the pokemon information, result will be an object containing 2 keys: name, url
    const getCharacter = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => setCharacters(response.data.results))
    }
    console.log(characters)

    //fetch information for the individual character, given the url from previous fetch

    const getIndividualInformation = () => {
        characters.map(each => {
            axios
            .get(each.url)
            .then(response => allPokemon.push(response.data))
        })
    }

    console.log(allPokemon)

    const getNext = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => setCharacters(response.data.next))
    }

    useEffect(() => {
        getCharacter()
    }, [])

    useEffect(() => {
        getIndividualInformation()
    },[characters])

  
    
    //in the following line "characters" is a State, specifically an array
    // const displayCharacters = characters.map(each => <Characters {...each} />)
    const displayImages = allPokemon.map(each => <Characters {...each}/>)
    return(
        <div>
            <div className='header'>
                <h1>Pokemon App</h1>
            </div>
            <div className='characterList'>
                {/* {displayCharacters} */}
                {displayImages}
            </div>
                <button className='btnShowList' type="button" onClick={getCharacter}>Load More</button>
        </div>
    )
};


export default CharactersList;