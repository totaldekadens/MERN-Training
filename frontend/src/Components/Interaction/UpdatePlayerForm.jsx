import React from 'react';
import { useState } from "react";
import validateForm from "../Validation/ValidateForm";

const UpdatePlayerForm = (props) => {

    const defaultPlayer = {
        firstName: props.player.firstName,
        lastName: props.player.lastName,
        phone: props.player.phone,
        email: props.player.email
    }

    const defaultError = {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    }

    const [updatePlayer, setUpdatePlayer] = useState(defaultPlayer)
    const [errors, setErrors] = useState(defaultError)
    
    const submitPlayer = async (event) => {
        
        try {
            event.preventDefault();

            const checkError = validateForm(updatePlayer);
            
            if(Object.keys(checkError).length > 0) {
                setErrors(checkError)
                console.log("Player NOT added to the list"); 
                return
            }

            const requestOptions = {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatePlayer)
            };

            let response = await fetch(`http://localhost:4000/player/${props.player._id}`, requestOptions)

            let result = await response.json();

            if(result) {
                alert("Player is updated" ); 
                props.setCurrentPlayer(updatePlayer); // Check another solution. Not optimal.
                setUpdatePlayer(defaultPlayer);
                setErrors(defaultError);

            } else {
                console.log("Player NOT updated"); 
            }

        }catch(err) {
            console.error(err);
        }
    }

    return ( 
        <div className="row">
            <h2 className='center'>Update player</h2>
            <form className="col s12" onSubmit={submitPlayer}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" onChange={(event) => {setUpdatePlayer(currentState => ({ ...currentState, firstName: event.target.value}))}} value={updatePlayer.firstName} type="text" />
                        <label className="active" htmlFor="firstName">* First Name</label><p style={{color: "red", margin: "0"}}>{errors.firstName ? errors.firstName : ""}</p>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" onChange={(event) => {setUpdatePlayer(currentState => ({ ...currentState, lastName: event.target.value}))}} value={updatePlayer.lastName} type="text" />
                        <label className="active" htmlFor="lastName">* Last Name</label><p style={{color: "red", margin: "0"}}>{errors.lastName ? errors.lastName : ""}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6" >
                        <input id="phone" onChange={(event) => {setUpdatePlayer(currentState => ({ ...currentState, phone: event.target.value}))}} value={updatePlayer.phone} type="number" />
                        <label className="active" htmlFor="phone">Phone</label><p style={{color: "red", margin: "0"}}>{errors.phone ? errors.phone : ""}</p>
                    </div>
                    <div className="input-field col s6" >
                        <input id="email" onChange={(event) => {setUpdatePlayer(currentState => ({ ...currentState, email: event.target.value}))}} value={updatePlayer.email} type="email" />
                        <label className="active" htmlFor="email">* Email</label><p style={{color: "red", margin: "0"}}>{errors.email ? errors.email : ""}</p>
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
                    <button className='btn waves-effect waves-light yellow darken-3' style={{marginRight: "10px"}} name='reset'>Reset values</button>
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Update player</button>
                </div>
            </form>
        </div>      
    );
}

export default UpdatePlayerForm;