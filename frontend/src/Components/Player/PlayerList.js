import React from 'react';

const PlayerList = (props) => {

    const deletePlayer = async (PlayerId) => {

        try {
            // Todo: Set up a confirmation modul with a "Are you sure?" before it proceeds.

            let urlencoded = new URLSearchParams();

            let requestOptions = {
                method: 'DELETE',
                body: urlencoded,
                redirect: 'follow'
            };

            let response = await fetch(`http://localhost:4000/player/${PlayerId}`, requestOptions);

            let result = await response.json();

            console.log(result);
        }catch(err) {
            console.error(err);
        }
    }

    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Players</h4></li>
            {props.players.map((item) => (
                <a href="#!" className="collection-item" key={item._id} style={{ display: "flex",  flexDirection: "row", justifyContent: "space-between"}} onClick={() => {props.updateCurrentPlayer(item);}}>
                    {item.firstName} {item.lastName}
                    <div onClick={() => {deletePlayer(item._id)}}>X</div>
                </a> 
            ))}
        </ul>
    </div> 
    );
}

export default PlayerList;