import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList/PokemonList';
import Pagination from './Pagination/Pagination';
import PokedexContext from '../../../contexts/PokedexContext';

function Pokedex(){
  const 
      {
        allPokemons, setAllPokemons,
        currentPageUrl, setCurrentPageUrl,
        prevPageUrl, setPrevPageUrl,
        nextPageUrl, setNextPageUrl,
        loading, setLoading
      } = useContext(PokedexContext);
  
    const pokeInfo = async() => {
      setLoading(true)
      const res = await axios.get(currentPageUrl)
          setNextPageUrl(res.data.next)
          setPrevPageUrl(res.data.previous)
          getPokemon(res.data.results)
          setLoading(false)
          setAllPokemons([])
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
  
    function gotoPrevPage() {
      setCurrentPageUrl(prevPageUrl)
    }
  
    if (loading) return "...Loading..."
  
    return (
      <div>
          <div className='characterList'>
            <PokemonList />
          </div>
          <Pagination
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
          />
      </div>
    );
}

export default Pokedex;