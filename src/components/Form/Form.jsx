import { useState } from "react";
import rigth from '../../asset/rigth.png'
import left from '../../asset/left.png'
import validation from "./validation.js"
import style from "./Form.module.css"



const Form = ({login})=>{
    const[userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        
    })

    const handleInputChange =(e)=>{
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }));

        setUserData({
            ...userData,
            [e.target.name]: e.target.value 
        });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }    

    return(
        <div>
            
            <form>
                <img src={rigth} alt="AnimeLogin" className={style.imgrigth} />
                <img src={left} alt="AnimeLogin" className={style.imgleft} />
                <h1 className={style.bienvenido}> Welcome to <b>Rick and Morty</b>
                </h1>
                <div className={style.form}>
            
                    <input type="text" placeholder="Enter your username"
                    name="username" 
                    value={userData.username}
                    onChange={handleInputChange}
                    />
                    {errors.e1 ? (
                        <p>{errors.e1}</p>
                    ) : errors.e2 ? (
                        <p>{errors.e2}</p>
                    ) : (
                        <p>{errors.e3}</p>
                    )}
                </div>
                

                <div>
                    
                    <input type="password" placeholder="Enter your password"
                    name="password" 
                    value={userData.password} 
                    onChange={handleInputChange}
                    />
                    {errors.p1 ?(
                        <p>{errors.p1}</p>
                    ) : (
                        <p>{errors.p2}</p>
                    )}
                </div>
                <button type="submit" onClick={handelSubmit}>LOGIN</button>
                <div className={style.invitado}>
                    <p className="login-con">Enter as a guest</p>
                    <p>
                    <b>Gmail</b>: mail@mail.com
                    </p>
                    <p>
                    <b>Password</b>: hola123
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Form;