import React, {useState, createContext} from "react";

const PokedexContext = createContext();

export const PokedexContextProvider = ({ children }) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [nextPageUrl, setNextPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    //children binding
    return (
        <PokedexContext.Provider
            value= 
                {{
                    allPokemons, setAllPokemons,
                    currentPageUrl, setCurrentPageUrl,
                    prevPageUrl, setPrevPageUrl,
                    nextPageUrl, setNextPageUrl,
                    loading, setLoading
                }}
        >
            {children}
        </PokedexContext.Provider>
    );
};

export default PokedexContext;
