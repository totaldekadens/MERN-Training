import React, { useContext } from 'react';
import { deletePlayer } from '../../Helpers/FetchHelper';
import { PlayerContext } from '../../Context/PlayerProvider';
import { CurrentPlayerContext } from '../../Context/CurrentPlayerProvider';

const PlayerList = () => {

    // Context
    const {players} = useContext(PlayerContext)
    const {currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext)
    
    const updateCurrentPlayer = (item) => {
        setCurrentPlayer(item);
    }

    // Deletes player
    const handleClick = async (playerId) => {

        try {
            
            if(playerId) {
                // Todo: Set up a confirmation modul with a "Are you sure?" before it proceeds.
                let result = await deletePlayer(playerId);
                
                if(result) {
                    if(currentPlayer._id == playerId) {
                        setCurrentPlayer({});
                    }
                } else {
                    console.log("Player was not deleted");
                }

            } else {
                console.log("Id was not found")
            }  

        }catch(err) {
            console.error(err);
        }
    }

    return ( 
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {players ? players.map((item) => (
                    <div 
                        key={item._id} 
                        className="collection-item"
                        style={{ 
                            display: "flex",  
                            flexDirection: "row", 
                            justifyContent: "space-between", 
                            width: "100%", 
                            alignItems: "center"}}
                        >
                        <div 
                            style={{ color: "darkCyan", cursor: "pointer" }}
                            onClick={() => {updateCurrentPlayer(item);}}
                        >
                            {item.firstName} {item.lastName}
                        </div> 
                        <div onClick={() => {handleClick(item._id)}} style={{cursor: "pointer", color: "red"}}>X</div> {/* Fix icon later */}
                    </div>
                )) 
                : 
                    <h3>Players not found</h3>
                }
            </ul>
        </div> 
    );
}

export default PlayerList;