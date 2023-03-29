import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export default function Detail(props) {
   
    const[character, setCharacter] = useState([]);
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
    
   
    return(
    
    <div>
        <h5>
            {character.name}
        </h5>
    </div>
   )
}
 

