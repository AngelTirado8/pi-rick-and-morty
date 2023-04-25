import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../../redux/action';
import { connect } from "react-redux";
import { useState, useEffect } from "react";


export function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const { addFav, removeFav, myFavorites } = props;

   const handleFavorite =()=>{
      isFav ? removeFav(props.id): addFav(props);
      setIsFav(!isFav);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      
      <div>   
        

         <div className = {styles.card}>
         {
         isFav ? (
            <button className={styles.fav} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={styles.fav} onClick={handleFavorite}>🤍</button>
            )}
         <button className={styles.close} onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.name}</h2>
         <div className={styles.img}>
         <Link to={`/detail/${props.id}`} >
         <img  src={props.image} alt="imagen not found" />
         </Link>
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

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character)=>{
         dispatch(addFav(character));
      },
      removeFav: (id) =>{
         dispatch(removeFav(id));
      }
   }
};

const mapStateToProps= (state)=>{
   return{
      myFavorites: state.myFavorites,
      
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);


