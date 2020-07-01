 
import React, { Component } from 'react'
import Home from './Home'
import data from '../reducers/dummyData'
import {
    Link
} from "react-router-dom";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectRecipe} from '../actions/action'

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
                                    <h5 class="card-title">{recipe.name}</h5>
                                    </div>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>this.props.selectRecipe(recipe)}>Favorites</button>
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
        recipes: state.recipes,
    
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectRecipe: selectRecipe
    }, dispatch)

    
}
export default connect(mapStateToProps, mapDispatchToProps)(Recipes)