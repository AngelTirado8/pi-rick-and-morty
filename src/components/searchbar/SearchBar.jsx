// import styles from './SearchBar.module.css';
// import { useState } from 'react';


// export default function SearchBar(props) {

//    const [character, setCharacter] = useState("");

//    const handleChange=(e)=>{
//       const{value} = e.target;
//       setCharacter(value)
         
      
//    } 


//    return (
//       <div className={styles.searchbar}>
//          <input
//         type="search"
//         onChange={handleChange}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             props.onSearch(character);
//           }
//         }}
//       />
      
//       <button 
//          className={styles.botonAgregar} 
//          onClick={()=> props.onSearch(character)}>Agregar</button> 

//       <button 
//          onClick={() => props.removeAll(character)}
//          >Borrar</button>
      
//       </div>
//    );
// }

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");

   const handleChange = (e) => {
      const { value } = e.target;
      setCharacter(value);
   };

   return (
         <div className="d-flex">
         <Form.Control
            className="me-2"
            type="search"
            onChange={handleChange}
            onKeyDown={(e) => {
               if (e.key === "Enter") {
               props.onSearch(character);
               }
            }}
         />
         <Button
            className="me-2"
            size="sm"
            variant="success"
            onClick={() => props.onSearch(character)}
         >
            Agregar
         </Button>
         <Button
            className="me-2"
            variant="danger"
            size="sm"
            onClick={() => props.removeAll(character)}
         >
            Borrar
         </Button>
         <Button
            variant="danger"
            size="sm"
            onClick={() => props.logout()}
         >
            Logout
         </Button>
         </div>
   );
   }



