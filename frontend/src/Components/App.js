import React, { useEffect, useState } from 'react';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import PlayerForm from './Player/PlayerForm';

const App = () => { 

  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  const updateCurrentPlayer = (item) => {
    setCurrentPlayer(item);
  }

  useEffect( () => {
    const url = 'http://localhost:4000/players';

    (async () => {
      
      try {
        const response = await fetch(url)
        const result = await response.json();

        setPlayers(result)

      } catch(err) {
          console.error(err)
      }
      }) ();
  }, [players]);
    
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="/" className="brand-logo">Soccer Management</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={players}
            updateCurrentPlayer={updateCurrentPlayer}/>
          </div>
          <div className="col s9"><PlayerSingle player={currentPlayer}/></div>
        </div>
        <div className="row">
          <div className="col s12"><PlayerForm /></div>
        </div>
      </div>
    );
}

export default App;