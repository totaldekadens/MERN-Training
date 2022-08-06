import React from 'react';
import { useState } from "react";
import validateForm from "../../Validation/ValidateForm";
import { modifyPlayer } from '../../Helpers/FetchHelper';
import PlayerForm from './PlayerForm';
import { defaultValues } from '../../Helpers/Common';

const UpdatePlayerForm = (props) => {

    const defaultUpdatePlayer = {
        firstName: props.player.firstName,
        lastName: props.player.lastName,
        phone: props.player.phone,
        email: props.player.email
    }

    // States
    const [updatePlayer, setUpdatePlayer] = useState(defaultUpdatePlayer)
    const [errors, setErrors] = useState(defaultValues)

    // Text to PlayerForm
    const textToForm = {
        submitName: "Update player",
        title: "Update player"
    }
    
    // Updates new player
    const handleClick = async (event) => {
        
        try {
            event.preventDefault();

            const checkError = validateForm(updatePlayer);
            
            if(Object.keys(checkError).length > 0) {
                setErrors(checkError)
                console.log("Player NOT added to the list"); 
                return
            }

            let result = await modifyPlayer(props.player._id, updatePlayer)

            if(result) {
                alert("Player is updated" ); 
                props.setCurrentPlayer(updatePlayer); // Check another solution. Not optimal.
                setUpdatePlayer(defaultUpdatePlayer);
                setErrors(defaultValues); // Not working, check

            } else {
                console.log("Player NOT updated"); 
            }

        }catch(err) {
            console.error(err);
        }
    }

    return ( 
        <PlayerForm setState={setUpdatePlayer} state={updatePlayer} errors={errors} text={textToForm} handleClick={handleClick}/>  
    );
}

export default UpdatePlayerForm;