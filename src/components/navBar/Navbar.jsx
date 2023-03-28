import React from 'react';
import SearchBar from '../searchbar/SearchBar.jsx'
import style from './Navbar.module.css'
import logo from '../navBar/Logo-rick-and-morty.png'



export default function Navbar(props){
    return (
        
        <div className={style.container}>
            <SearchBar onSearch ={props.onSearch}/>
        
        <div className={style.logo}>
            <img src={logo} alt="" />
        </div>
        
        </div>
        
        
    )
}