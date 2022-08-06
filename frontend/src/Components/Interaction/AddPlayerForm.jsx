import React from 'react';
import { useState } from "react";
import validateForm from "../../Validation/ValidateForm";
import { addPlayer } from '../../Helpers/FetchHelper';
import PlayerForm from './PlayerForm';
import { defaultValues } from '../../Helpers/Common';

const AddPlayerForm = () => {

    // States
    const [newPlayer, setNewPlayer] = useState(defaultValues)
    const [errors, setErrors] = useState(defaultValues)
    
    // Text to PlayerForm
    const textToForm = {
        submitName: "Add player",
        title: "Add a new player"
    }

    // Adds new player
    const handleClick = async (event) => {
        
        try {
            event.preventDefault();

            const checkError = validateForm(newPlayer);
            
            if(Object.keys(checkError).length > 0) {
                setErrors(checkError)
                return
            }

            let result = await addPlayer(newPlayer)

            if(result) {
                console.log("Player added to the list" );
                setNewPlayer(defaultValues);
                setErrors(defaultValues); 

            } else {
                console.log("Player NOT added to the list");
            }

        }catch(err) {
            console.error(err);
        }
    }

    return (  
        <PlayerForm setState={setNewPlayer} state={newPlayer} errors={errors} text={textToForm} handleClick={handleClick}/>      
    );
}

export default AddPlayerForm;