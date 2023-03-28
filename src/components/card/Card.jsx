import styles from "./Card.module.css"


export default function Card(props) {
   
   return (
      
      <div>
         
         <div className = {styles.card}>

         <button onClick={() => props.onClose(props.id)}>X</button>
         
         <h2>{props.name}</h2>
         <div className={styles.img}>
         <img  src={props.image} alt="imagen not found" /> 
         </div>
            <div className={styles.letras}>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
            </div>
            <div >
               
            </div>
         </div>
      </div>
   );
}
