
const validateForm = (player) => {

    const errors = {};

    if(player.firstName == "") {
        errors.firstName = 'Required';
    } else if(player.lastName == "") {
        errors.lastName = 'Required';
    } else if(!player.phone == "" && player.phone.length < 6) {
        errors.phone = 'Phonenumber needs to be more than 6 numbers';
    } 

    return errors;
} 

export default validateForm