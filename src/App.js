import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchbar/SearchBar'
import characters, { Rick } from './data.js'

import Navbar from './components/navBar/Navbar.jsx'


function App () {

  const[characters, setCharacter] = useState([]);

  const onSearch = (character) =>{
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) =>{
      if (data.name){
        setCharacter((oldChars)=> [...oldChars,
        data]);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
}

  const onClose= (id) =>{
    setCharacter(characters.filter(char => char.id !== id));
  }
  return (
    
    <div className='App' styles={{padding: '25px'}}>
      <div>
        <Navbar onSearch={onSearch}/>
      </div>
      
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
