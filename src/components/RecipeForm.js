import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Route,
  Link
} from "react-router-dom";
class RecipeForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const name = this.getName.value;
 const Ingredients = this.getIngredients.value
 const data = {
  id: new Date(),
  name,
  Ingredients,
  editing: false,

 }
 this.props.dispatch({
 type: 'ADD_RECIPE',
 data
 })
 this.getName.value = '';
 this.getIngredients.value = '';
}

render() {
return (
  
<div className="post-container">

<Link to='AllRecipe'>Back To custom</Link>

  <h1 className="post_heading">Create Recipe</h1>
 
  <form id="addRecipeForm" className="form" onSubmit={this.handleSubmit} >
  <p>Recipe Name</p>
   <input required type="text" ref={(input) => this.getName = input}
   placeholder="Enter Recipe Name" /><br /><br />
   <p>Ingredients</p>
   <textarea required rows="5" ref={(input) => this.getIngredients = input}
   cols="28" placeholder="Enter Ingredients" /><br /><br />
   <button onSubmit={this.handleSubmit}>Add Recipe</button><br></br>
  
  </form>
</div>
);
}
}
export default connect()(RecipeForm);
