import React, { createContext, useState, useEffect } from "react";
import { getAllPlayers } from "../Helpers/FetchHelper";

export const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
    
    const [players, setPlayers] = useState([]);

    useEffect( () => {
    
        (async () => {

            try {
    
                let result = await getAllPlayers();
        
                if(result) {
                setPlayers(result);
                } else {
                    console.log("No players found");
                }
            
            } catch(err) {
                console.error(err)
            }
        }) ();
    }, [players]); // Change this one. infinityloop atm. 
    
    return (
        <PlayerContext.Provider value={{players, setPlayers}}>
            {children}
        </PlayerContext.Provider>
    );
};