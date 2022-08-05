import React, { useEffect, useState } from 'react';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import AddPlayerForm from './Interaction/AddPlayerForm';
import Modal from './Modal/Modal';

const App = () => { 

  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [shouldShowModal, setShouldShowModal] = useState(false)

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
      <>
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className=" blue darken-1" style={{display: "flex", justifyContent: "space-between", padding: "5px 15px 5px 15px"}}>
              <a href="/" style={{fontSize: "35px"}}>Soccer Management</a>
              <div onClick={() => setShouldShowModal(!shouldShowModal)} style={{fontSize: "20px", textAlign: "center", cursor: "pointer"}}><span style={{fontSize: "30px", }}>+</span> Add player</div>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={players}
            updateCurrentPlayer={updateCurrentPlayer}/>
          </div>
          <div className="col s9"><PlayerSingle player={currentPlayer} setCurrentPlayer={setCurrentPlayer} /></div>
        </div>
      </div>
      <Modal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)} >
        <AddPlayerForm />
      </Modal>  
    </>
    );
}

export default App;