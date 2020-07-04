import React, { Component } from 'react'
import {Link,  withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'
class Recipe extends Component {
  constructor (props) {
      super(props)

      this.state = {
          recipe: {}
      }
  }
    // clickHandler = () => {
    //     this.props.history.push(`/Recipies/${this.props.id}`)
    //     return;
    // }

    componentDidMount (){
        const jobId = this.props.match.params.id;
        console.log(this.props.recipes)
        this.setState({
            recipe: this.props.recipes.find(recipe => {
                return recipe.id == jobId
                
            })
        })
       
    }
    render() {
        return (
            <div>
            <h1>Recipe details</h1>
                <Link to="/">Back To Recipes</Link>
                <ul className="card-deck">
                        <li>
                            <div className='card'>
                                <div className='card-bod'>
                                <h5 class="card-title">Recipe name: {this.state.recipe.name}</h5>
                                <h5 class="card-title">Calories: {this.state.recipe.calories}</h5>
                                <ul>
                                <h5>Ingredients :</h5>
                                
                                <li>2 teaspoons cumin seeds</li>
                                <li>1 teaspoon cracked black peppercorns</li>
                                <li>2 teaspoons dried oregano</li>
                                <li>1/2 cup plus 1 tablespoon olive oil</li>
                               <li>1 clove garlic, minced</li>

                                
                                </ul>
                                </div>
                            </div>
                        </li>
                  
            </ul>
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