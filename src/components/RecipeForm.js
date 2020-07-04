import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addRecipe} from '../actions/action'
import './RecipeForm.css'
class RecipeForm extends Component {
  render() {
    return (
      <div id="addRecipeForm" className="hidden">
        <input type="text" ref="recipeName" placeholder="Recipe name" /><br />
        <textarea rows="5" ref="ingridients" placeholder="Ingridients"></textarea><br />
        <button onClick={() => {
          if (this.refs.recipeName.value !== '' && this.refs.ingridients.value !== '') {
            this.props.addRecipe(this.refs.recipeName.value, this.refs.ingridients.value, false, false)
            this.refs.recipeName.value = ''
            this.refs.ingridients.value = ''
          } else {
            alert('All fields are required to proceed')
          }
        }}>Add recipe</button><br />
        <button onClick={() => {
          this.refs.recipeName.value = ''
          this.refs.ingridients.value = ''
        }}>Cancel</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addRecipe}, dispatch)
}

export default connect(() => {}, mapDispatchToProps)(RecipeForm)
