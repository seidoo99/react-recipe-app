import React from 'react';
import './App.css';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Favourite from './components/Favourite'
import Recipe from './components/Recipe';
import About from './components/About'
import RecipeForm from './components/RecipeForm'
import AllRecipes from './components/AllRecipes'
import Add from './components/Add'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
           
	<Router >

    <div className="App">
  <Route path='/' exact component={Home}/>
  <Route path='/Recipes' exact component={Recipes}/>
  <Route path='/newRecipes' component={RecipeForm}/>
  <Route path='/favourite' exact component={Favourite}/>
  <Route path='/AllRecipe' exact component={AllRecipes}/>
	<Route path='/Recipe/:id' exact component={Recipe}/>
	<Route path='/About' exact component={About}/>
	<Route path='/singleRecipe' exact component={Add}/>
	
    </div>
    
    </Router>
    
  );
}

export default App;
