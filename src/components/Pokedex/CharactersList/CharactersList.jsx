import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../PokemonList/PokemonList';
import Pagination from './Pagination';

function CharactersList(){
    const [allPokemons, setAllPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    // const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
  
    const pokeInfo = async() => {
      setLoading(true)
      const res = await axios.get(currentPageUrl)
          setNextPageUrl(res.data.next)
          // setPrevPageUrl(res.data.previous)
          getPokemon(res.data.results)
          setLoading(false)
    }
  
    const getPokemon= async(res)=>{
      res.map(async(el) => {
        const result = await axios.get(el.url)
        setAllPokemons(state =>{
          state=[...state, result.data]
          return state;
        })
      })
      
    }
  
    useEffect(() => {
      pokeInfo()
    },[currentPageUrl])
  
  
    function gotoNextPage() {
      setCurrentPageUrl(nextPageUrl)
    }
  
    // function gotoPrevPage() {
    //   setCurrentPageUrl(prevPageUrl)
    // }
  
    if (loading) return "...Loading..."
  
    return (
      <>
        <PokemonList allPokemons={allPokemons} />
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          // gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </>
    );
}

export default CharactersList;