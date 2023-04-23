const validation =(data)=>{
    
        let errors ={};
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const regexNumber= /\d/;
    
    
        if(!regexEmail.test(data.username)){
            errors.e1 = 'Email inválido';
        }
        console.log(data)
    
        if(!data.username){
            errors.e2= 'Debe ingresar un usuario';
        }
        if(data.username.length > 35){
            errors.e3 = 'El nombre de usuario no puede superar los 35 caracteres';
        }
        if(!regexNumber.test(data.password)){
            errors.e4 = 'La contraseña debe contener al menos un número';
        }
        if(data.password.length < 6 || data.password.length > 10){
            errors.e5 = 'La contraseña debe contener entre 6 y 10 caracteres';
        }
    
        return errors;
    }


    
    export default validation;

