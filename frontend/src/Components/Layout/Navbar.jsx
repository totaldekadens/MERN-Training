import React, { useState } from 'react';
import AddPlayerForm from "../Interaction/AddPlayerForm";
import Modal from '../Modals/Modal';

const Navbar = () => {

    // State
    const [shouldShowModal, setShouldShowModal] = useState(false)

    return (
        <>
        <div className="row">
            <nav>
                <div className=" blue darken-1" style={{display: "flex", justifyContent: "space-between", padding: "5px 15px 5px 15px"}}>
                <a href="/" style={{fontSize: "35px"}}>Soccer Management</a>
                <div onClick={() => setShouldShowModal(!shouldShowModal)} style={{fontSize: "20px", textAlign: "center", cursor: "pointer"}}><span style={{fontSize: "30px", }}>+</span> Add player</div>
                </div>
            </nav>
        </div>
        <Modal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)} >
            <AddPlayerForm />
        </Modal>  
        </>
    )
}

export default Navbar;