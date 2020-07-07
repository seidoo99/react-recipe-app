import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import './Recipe.css'

class Recipe extends Component {
  constructor (props) {
      super(props)

      this.state = {
          recipe: {}
      }
  }

    componentDidMount (){
        const recipeId = this.props.match.params.id;
        console.log(this.props.recipes)
        this.setState({
            recipe: this.props.recipes.find(recipe => {
                return recipe.id == recipeId
                
            })
        })
       
    }
    render() {
        return (
            <div>
                <h1>Recipe details</h1>
                <Link to="/">Back To Recipes</Link>
        
                            <div className='card'>
                                <div className='card-bod'>
                                        <h5 class="card-title">Recipe name: {this.state.recipe.name}</h5>
                                        <h5 class="card-title">Calories: {this.state.recipe.calories}</h5>
                                        <a><img className="card-img-top" id='image' src={this.state.recipe.image} /></a>
                                        <h5>Ingredients :</h5>
                                <ul>
                                    <li>2 teaspoons cumin seeds</li>
                                    <li>1 teaspoon cracked black peppercorns</li>
                                    <li>2 teaspoons dried oregano</li>
                                    <li>1/2 cupplus 1 tablespoon olive oil</li>
                                    <li>1 clove garlic, minced</li>
                                </ul>
                                </div>
                            </div>
                       </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(Recipe)