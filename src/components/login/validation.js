const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export function validation (userData){
    let errors = {};

    if(!regexEmail.test(userData.username)) errors.username= 'El usuario debe ser un email valido'

    else if(!userData.username) errors.username='El usuario no puede estar vacio'

    else if(userData.username. length > 35) errors.username='el usuario no puede ser mayor a 35 caracteres'

    if(! regexPassword.test(userData.password))errors.password='La contraseña debe tener al menos un numero'

    else if(userData.password < 6 && userData.password > 10) errors.password.length = 'La contraseña debe terner una longitud entre 6 y 10 caracteres'
}