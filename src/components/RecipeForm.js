import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeForm extends Component {

  render() {

    return (
      <div>
        <h1 className="recipeName">Create a New Recipe</h1>
    
      <form >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value=""
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            type="text"
            name="ingredients"
            value=""
          />
          <button type="submit">Add Recipe</button>
        </div>
      </form>
      </div>
    )
  }
}


export default RecipeForm;
