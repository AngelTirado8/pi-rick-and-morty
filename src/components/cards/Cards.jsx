import Card from '../card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         <div className={styles.divCards}>
            {characters.map(character => 
               <Card 
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose= {props.onClose}
               />)}
         </div>  
      </div>
   )
}
