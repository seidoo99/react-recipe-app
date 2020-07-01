import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {bindActionCreator} from 'redux'
import {connect} from 'react-redux'

class Recipe extends Component {

    // createRecipe() {
        
    //           return (
    //               <li></li>
    //           )
    // }
    render() {
        return (
            <ul>
                {this.props.detail }}
            </ul>
        )
    }
}
// function mapStateToProps(state){
//     return {
//        detail: state.detail
//     }
// }

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({
//         selectRecipe: selectRecipe
//     }, dispatch)
export default connect(mapStateToProps)(Recipe);