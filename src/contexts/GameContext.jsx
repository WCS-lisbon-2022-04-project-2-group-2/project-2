import React, {useState, createContext} from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    const [generation, setGeneration] = useState([]);


    return (
        <GameContext.Provider
            value= 
                {{
                    generation, setGeneration

                }}
        >
            {children}
        </GameContext.Provider>
    );
};

export default GameContext;
