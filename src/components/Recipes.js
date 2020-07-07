 
import React, { Component } from 'react'
import {
    Link, Route
} from "react-router-dom";
import './Recipes.css'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectRecipe} from '../actions/action'


class Recipes extends Component {
   
    
    render() {
        return (      
            <div  >
            <Route>
            <nav className="navbar">
                <Link to="/"><b>Home</b></Link>
                <Link to="Recipes">Recipes</Link>
                <Link to="NewRecipes">AddRecipe</Link>
                <Link to="favourite">Favourite</Link>
                <Link to="AllRecipe" >Custom Recipes</Link>
                <Link to="About">about</Link>
        </nav>
            </Route>

                <ul className="card-deck">
                    {
                        this.props.recipes.map(recipe =>
                            <li key={recipe.id}>
                                <div className='card'>
                                    <a><img className="card-img-top" id='image' src={recipe.image} /></a>
                                    <div className='card-bod'>
                                    <h5 className="card-title">{recipe.name}</h5>
                                    </div>
                                    <Link className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>this.props.selectRecipe(recipe)}>Favorite recipe</Link>
                                    <Link to = {`/Recipe/${recipe.id}`}class="btn btn-outline-success my-2 my-sm-0" type="submit">Recipe Details</Link>
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