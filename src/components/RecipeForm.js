import React, { Component } from 'react';
import { connect } from 'react-redux';
class RecipeForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const name = this.getName.value;
 const Ingredients = this.getIngredients.value
 const data = {
  id: new Date(),
  name,
  Ingredients,
  editing: false
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
  <h1 className="post_heading">Create Recipe</h1>
  <form id="addRecipeForm" className="form" onSubmit={this.handleSubmit} >
  <p>Recipe Name</p>
   <input required type="text" ref={(input) => this.getName = input}
   placeholder="Enter Recipe Name" /><br /><br />
   <p>Ingredients</p>
   <textarea required rows="5" ref={(input) => this.getIngredients = input}
   cols="28" placeholder="Enter Ingredients" /><br /><br />
   <button>Add Recipe</button><br></br>
   <button >Cancel</button>

  </form>
</div>
);
}
}
export default connect()(RecipeForm);
