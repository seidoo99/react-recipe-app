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
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#">Recipes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">AddRecipe</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Favourites</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Recipe</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">about</a>
                </li>
                
</ul>
        )
        return (
            <Route>
                <nav class="navbar navbar-light bg-light justify-content-between">
                <Link to='Recipes'>Recipes</Link>
                <Link to="NewRecipes">AddRecipe</Link>
                <Link to="About">about</Link>
                <Link to="Recipe">Recipe</Link>
                <Link to="favourite">Favourites</Link>

                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </Route>
        )
    }
}

export default Home