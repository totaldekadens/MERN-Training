import React, { useContext } from 'react';
import { useState } from "react";
import validateForm from "../../Validation/ValidateForm";
import { modifyPlayer } from '../../Helpers/FetchHelper';
import PlayerForm from './PlayerForm';
import { defaultValues } from '../../Helpers/Common';
import { CurrentPlayerContext } from '../../Context/CurrentPlayerProvider';

const UpdatePlayerForm = () => {

    // Context
    const {currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext);

    // States
    const [updatePlayer, setUpdatePlayer] = useState(currentPlayer)
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

            // Validates values from form
            const checkError = validateForm(updatePlayer);
            
            if(Object.keys(checkError).length > 0) {
                setErrors(checkError)
                return
            }

            // Updates player in database
            let result = await modifyPlayer(currentPlayer._id, updatePlayer)

            if(result) {
                alert("Player was succesfully updated" ); 
                setCurrentPlayer(updatePlayer);
                setUpdatePlayer(updatePlayer);
                setErrors(defaultValues);

            } else {
                console.log("Player was NOT updated"); 
            }

        }catch(err) {
            console.error(err);
        }
    }

    return ( 
        <PlayerForm 
            setState={setUpdatePlayer} 
            state={updatePlayer} 
            errors={errors} 
            text={textToForm} 
            handleClick={handleClick}
        />  
    );
}

export default UpdatePlayerForm;