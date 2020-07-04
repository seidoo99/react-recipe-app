import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Favourite from './components/Favourite'
import Recipe from './components/Recipe';
import About from './components/About'
import RecipeForm from './components/RecipeForm'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import favoriteRecipe from './reducers/favoriteRecipe';

function App() {
  return (
    <Router >
    <div className="App">
    <Route path='/' exact component={Home}/>
	<Route path='/Recipes' exact component={Recipes}/>
	<Route path='/favourite' exact component={Favourite}/>
	<Route path='/Recipe/:id' exact component={Recipe}/>
	<Route path='/About' exact component={About}/>
	<Route path='/newRecipes' component={RecipeForm}/>
    </div>
    </Router>
  );
}

export default App;
