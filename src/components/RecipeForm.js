import React, { Component } from 'react';
import { connect } from 'react-redux';
class RecipeForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const name = this.getName.value;
 const Ingredients = this.getIngredients.value;
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
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getName = input}
   placeholder="Enter Recipe Name" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getIngredients = input}
   cols="28" placeholder="Enter Ingredients" /><br /><br />
   <button>Add Recipe</button>
  </form>
</div>
);
}
}
export default connect()(RecipeForm);
