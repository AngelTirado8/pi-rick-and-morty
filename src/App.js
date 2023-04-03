
import React, { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Menu from './components/navBar/Menu.jsx'
import Login from "./components/login/Login.jsx"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [characters, setCharacter] = useState([]);
  const location = useLocation();
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const isDuplicate = characters.some((char) => char.id === data.id);
          //aca valida que no este el id duplicado
          if (!isDuplicate) {
            setCharacter((oldChars) => [...oldChars, data]);
          } else {
            window.alert("El personaje ya esta en la lista");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacter(characters.filter((char) => char.id !== id));
  };

  const removeAll = () => {
    setCharacter([]);
  };

  //boton randon aqui
  // const randomCard = () => {
  //   let randomNumber = Math.floor(Math.random() * characters.length);
  //   setCharacter([characters[randomNumber]]);
  // }

  return (
    <div className="App" styles={{ padding: "25px" }}>
      
      {location.pathname !== '/' && <Menu onSearch={onSearch} removeAll={removeAll} />}
      <hr/>
      <Routes>

        <Route path="/" element={<Login />}/>

        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
      
    </div>
  );
}

export default App;