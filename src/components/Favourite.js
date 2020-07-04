import React, { Component } from 'react'
import Home from './Home'
import data from '../reducers/dummyData'
import {
    Link
} from "react-router-dom";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectRecipe} from '../actions/action'
import {removeRecipe} from '../actions/action'

class Favorite extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          data
    //     }
    // }
    
    // addToFavorites = () => {
    //     alert('Add To Favorites')
    // }
    
    render() {
        return (
            <div >
            <h1>Your selected Items</h1>
                <Link to='Recipes'>Back To Recipes</Link>
                <ul className="card-deck">
                    {
                        this.props.favorite.map(fav =>
                            <li key={fav.id}>
                                <div className='card'>
                                    <a><img className="card-img-top" id='image' src={fav.image} /></a>
                                    <div className='card-bod'>
                                 <h5 class="card-title">{fav.name}</h5>
                                    </div>
                                    <Link class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>this.props.removeRecipe(fav)}>remove</Link>
                                   <Link to = {`/Recipe/${fav.id}`} class="btn btn-outline-success my-2 my-sm-0" type="submit">Details</Link>
                                </div>
                            </li>
                        )}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        favorite: state.favorites.favorite,
        // remove: state.favorites.remove
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        removeRecipe: removeRecipe
    }, dispatch)

    
}
export default connect(mapStateToProps,mapDispatchToProps)(Favorite)