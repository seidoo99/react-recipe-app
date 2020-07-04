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
               <h3>{this.state.recipe.name}</h3>
                <h4>{this.state.recipe.calories}</h4> 
                <div>
                   {/* <ul>
                    {this.state.recipe.ingredients.map((ingredient,i)=> 
                        <li key={i}>{ingredient}</li>
                  )}
                    </ul>*/}
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