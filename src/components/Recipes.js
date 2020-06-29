 
import React, { Component } from 'react'
import Home from './Home'
import data from '../reducers/dummyData'
import {
    Link
} from "react-router-dom";
import {bindActionCreator} from 'redux'
import {connect} from 'react-redux'

class Recipes extends Component {
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
            <div  >
                <Home />

                <ul className="card-deck">
                    {
                        this.props.recipes.map(recipe =>
                            <li key={recipe.id}>
                                <div className='card'>
                                    <a><img className="card-img-top" id='image' src={recipe.image} /></a>
                                    <div className='card-bod'>
                                   <Link><h5 class="card-title">{recipe.name}</h5> </Link> 
                                    </div>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.addToCart}>Favorites</button>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Details</button>
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
        recipes: state.recipes
    }
}
export default connect(mapStateToProps)(Recipes)