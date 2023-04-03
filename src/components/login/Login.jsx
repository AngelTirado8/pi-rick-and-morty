import React from "react";
import { validation } from "./validation";

export default function Login(){
    const[userData, setUserData] = React.useState({
        username:'',
        password:'',
    });

    function handleInputChange(e){
        setUserData({...userData,[e.target.name]: e.target.value})
        setErrors(validation({...userData,[e.target.name]: e.target.value}))
    }

    function handleSubmit(e){
        

    }

    const [errors, setErrors] = React.useState({
        username: '',
        password: '',
    });

    return (
        <div>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    name="username"
                    placeholder="Ingrese el usuario"
                    type="text"
                    value={userData.username}
                    onChange={handleInputChange}/>

                    <p>{errors.username}</p>

                <label htmlFor="password">Password:</label>
                <input 
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Introduzca su password" 
                    value={userData.password}
                    onChange={handleInputChange}/>

                    <p>{errors.password}</p>
                <button
                type="submit"
                onClick={handleSubmit}>Submit
                </button>    
            </form>
        </div>
    )
}

