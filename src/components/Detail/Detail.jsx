import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import style from './Detail.module.css'
import Card from '../card/Card'



export default function Detail(props) {
   
    const[character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);
    
   console.log(character)
    return(
      
          <div className={style.detail}>
            <h1>

              {character.name}
                    
            </h1>
                <div className={style.detailContainer}> 
                  
                  {/* <Card
                      image={character.image}
                      id={character.id}
                      /> */}

                    <h2>Status: {character.status}</h2>
                    <h2>spedie: {character.species}</h2>
                    <h2>Status: {character.gender}</h2>
                    <img src={character.image} alt="" />
                </div>
                  
          </div>
    
    
   )
}
 

