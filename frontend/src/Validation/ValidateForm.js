
const validateForm = (player) => {

    const errors = {};

    if(player.firstName == "") {
        errors.firstName = 'Required';
    } 

    if(player.lastName == "") {
        errors.lastName = 'Required';
    } 

    if(player.email == "") {
        errors.email = 'Required';
        
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(player.email)) {
        errors.email = 'invalid email address'
    }

    if(!player.phone == "" && player.phone.length < 6) {
        errors.phone = 'Phonenumber needs to be more than 6 numbers';
    } 

    return errors;
} 

export default validateForm