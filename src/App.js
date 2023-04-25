import React, { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Menu from "./components/navBar/Menu.jsx";
import Form from "./components/Form/Form.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from "./components/Favorites/Favorites";
import { useEffect } from "react";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [characters, setCharacter] = useState([]);
  const username = "mail@mail.com";
  const password = "hola123";
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();

    useEffect(() =>{
    console.log("access effect:", access);
    localStorage.getItem("access") === null && navigate('/');
  }, [access])

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

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      localStorage.setItem("access", "true");
      setAccess(true);
      navigate("/home");
    }
  }
  
  function logout() {
    localStorage.clear();
    setAccess(false);
    navigate("/");
  }

  return (
    <div className="App">
      {pathname !== "/" && (
        <Menu onSearch={onSearch} removeAll={removeAll} logout={logout} />
      )}

        <Routes>
          { localStorage.getItem("access") === null && <Route path="/" element={<Form login={login} />} /> }
          { localStorage.getItem("access") === 'true' && <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/> }
          { localStorage.getItem("access") === 'true' && <Route path="/about" element={<About />} /> }
          { localStorage.getItem("access") === 'true' && <Route path="/favorites" element={<Favorites />} /> }
          { localStorage.getItem("access") === 'true' && <Route path="/detail/:id" element={<Detail />} /> }
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
