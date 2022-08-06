import React from 'react';
import { deletePlayer } from '../../Helpers/FetchHelper';

const PlayerList = (props) => {

    // Deletes player
    const handleClick = async (playerId) => {

        try {
            
            if(playerId) {
                // Todo: Set up a confirmation modul with a "Are you sure?" before it proceeds.
                let result = await deletePlayer(playerId);
                console.log(result);

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
                {props.players ? props.players.map((item) => (
                    <a href="#!" className="collection-item" key={item._id} style={{ display: "flex",  flexDirection: "row", justifyContent: "space-between"}} onClick={() => {props.updateCurrentPlayer(item);}}>
                        {item.firstName} {item.lastName}
                        <div onClick={() => {handleClick(item._id)}}>X</div>
                    </a> 
                    )) 
                : 
                    <h3>Players not found</h3>
                }
            </ul>
        </div> 
    );
}

export default PlayerList;