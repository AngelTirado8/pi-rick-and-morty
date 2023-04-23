import{ link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../card/Card'
const Favorites = (props)=>{

    const { myFavorites } = props;
    return (
        <div>
            <link to='/home' ><span>To Home</span></link>
            {myFavorites.map((character) =>{
                return <Card
                id={character.id}
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                />
            })}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.MyFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites);