import React, {useState, createContext} from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    const [generation, setGeneration] = useState([]);
    const [chosenStarter, setChosenStarter] = useState([]);

    return (
        <GameContext.Provider
            value= 
                {{
                    generation, setGeneration,
                    chosenStarter, setChosenStarter
                }}
        >
            {children}
        </GameContext.Provider>
    );
};

export default GameContext;
