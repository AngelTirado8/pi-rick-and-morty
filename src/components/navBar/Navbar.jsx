import React from 'react';
import SearchBar from '../searchbar/SearchBar.jsx'
import style from './Navbar.module.css'
import logo from '../navBar/Logo-rick-and-morty.png'
import { NavLink } from 'react-router-dom'



export default function Navbar(props){
    return (
        
        <div className={style.container}>
            <SearchBar onSearch ={props.onSearch} removeAll={props.removeAll}/>
        
        <div className={style.logo}>
            <img src={logo} alt="" />
        </div>

        <div>
            <div className={style.link}>
            <ul className={style.ul}>
                <li>
                    <NavLink to= '/About'>About</NavLink>
                </li>
                <li>
                    <NavLink to= '/'>Home</NavLink>
                </li>
               
            </ul>
            </div>

        </div>
        
        </div>
        
        
    )
}