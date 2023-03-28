import styles from './SearchBar.module.css';
import { useState } from 'react';


export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange=(e)=>{
      const{value} = e.target;
      setCharacter(value)
         
      
   } 


   return (
      <div className={styles.searchbar}>
      <input type='search' 
      onChange={handleChange} />
      
      <button className={styles.botonAgregar} onClick={()=> props.onSearch(character)}>Agregar</button> 
      
      </div>
   );
}



