import React, { Component } from 'react'
import {
    BrowserRouter as Route, Link
} from "react-router-dom";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectRecipe} from '../actions/action'
import {removeRecipe} from '../actions/action'

class Favorite extends Component {   
    render() {
        return (
            <div >
            <Route>
                <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="Recipes">Recipes</Link>
                <Link to="NewRecipes">AddRecipe</Link>
                <Link to="favourite">Favourite</Link>
                <Link to="AllRecipe" >Custom Recipes</Link>
                <Link to="About">About</Link>
                </nav>
            </Route>
                <h1>Your favourite Recipes</h1>
                <Link to='/'>Back</Link>
                <ul className="card-deck">
                    {
                        this.props.favorite.map(fav =>
                            <li key={fav.id}>
                                <div className='card'>
                                    <a href="#"><img className="card-img-top" id='image' alt="" src={fav.image} /></a>
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