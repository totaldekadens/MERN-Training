import React, { createContext, useState } from "react";

export const CurrentPlayerContext = createContext()

export const CurrentPlayerProvider = ({ children }) => {
    
    const [currentPlayer, setCurrentPlayer] = useState({});
    
    return (
        <CurrentPlayerContext.Provider value={{currentPlayer, setCurrentPlayer}}>
            {children}
        </CurrentPlayerContext.Provider>
    );
};