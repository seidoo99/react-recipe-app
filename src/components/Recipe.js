import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {bindActionCreator} from 'redux'
import {connect} from 'react-redux'

class Recipe extends Component {

    createRecipe() {
        return this.props.data.map((recipe => {
              return (
                  <li>{recipe.name}</li>
              )
        })

        )
    }
    render() {
        return (
            <ul>
                {this.createRecipe}
            </ul>
        )
    }
}
function mapStateToProps(state){
    return {
        data: state.a
    }
}
export default connect(mapStateToProps)(Recipe);