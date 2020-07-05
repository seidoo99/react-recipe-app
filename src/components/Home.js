import React, { Component } from 'react'
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Route>
                <nav className="navbar">
                <Link to='Recipes'>Recipes</Link>
                <Link to="NewRecipes">AddRecipe</Link>
                <Link to="favourite">Favourite</Link>
                <Link to="singleRecipe">Recipe</Link>
	            <Link to="AllRecipe" >All Recipe</Link>
                <Link to="About">about</Link>

                    {/*<form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>*/}
                </nav>
                 <div className="home">
                <h1> Recipes! </h1>
                <h3> a quick and easy app for managing recipes! </h3>
                
                  <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7af156881360cd678f19062bd9c1f8a&auto=format&fit=crop&w=800&q=60" alt=""  />
                </div>
            </Route>
        )
    }
}

export default Home