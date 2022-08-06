import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import UpdatePlayerForm from '../Interaction/UpdatePlayerForm';

const PlayerSingle = (props) => {
    const [shouldShowModal, setShouldShowModal] = useState(false)

    return ( 
        <>
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpeg" alt='bild' />
                        {Object.keys(props.player).length > 0 ? 
                            <>
                            <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                            <div onClick={() => setShouldShowModal(!shouldShowModal) } className="btn-floating halfway-fab" style={{width: "100px", textAlign: "center", borderRadius: "5px"}}>Update player</div>
                            </>
                        : 
                            ""
                        } 
                    </div>
                    {Object.keys(props.player).length > 0 ? 
                        <>
                        <div className="card-content">
                            <p>Phone: {props.player.phone} - Email: {props.player.email}</p>
                            <p>Strength: {props.player.strength} - Endurance: {props.player.endurance}</p> 
                        </div>
                        <div className='card-action'>
                            Team: {props.player.team}
                        </div>
                        </>
                    : 
                        ""
                    }
                </div>
            </div>
        </div>
        <Modal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)} >
            {Object.keys(props.player).length > 0 ? 
                <UpdatePlayerForm player={props.player}/>
            : 
                <h3>Something went wrong</h3>
            }
        </Modal> 
        </>
    );
};

export default PlayerSingle;