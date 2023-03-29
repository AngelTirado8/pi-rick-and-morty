import React, { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/Navbar.jsx'
import About from './components/Vistas/About.jsx'
import Card from './components/card/Card';
import Detail from './components/Vistas/Detail.jsx'



function App () {

  const[characters, setCharacter] = useState([]);

  const onSearch = (character) =>{
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) =>{
      if (data.name){
        const isDuplicate = characters.some((char) => char.id === data.id);
        //aca valida que no este el id duplicado
        if (!isDuplicate){
        setCharacter((oldChars)=> [...oldChars, data]);
        }else {
          window.alert('El personaje ya esta en la lista');
        }
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
}

  const onClose= (id) =>{
    
    setCharacter(characters.filter(char => char.id !== id));
  }

  const removeAll = () =>{
    setCharacter([]);
  }

   //boton randon aqui


  return (
    
    <div className='App' styles={{padding: '25px'}}>
      
      <Navbar onSearch={onSearch} removeAll={removeAll}/>
      <Routes>
        <Route path='/Home' element={<Cards />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Detail/:DetailId' element={<Detail />}/> 
      </Routes>
      
      
      {/* <div className={styles.logo}>
            <img  src={logo} width="5%"/>
      </div> */}
      <hr />
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      <hr />
      
    </div>
  )
}

export default App
