import React, { Component } from 'react'
import {search} from '../actions/action'
import {connect} from 'react-redux'
class Search extends Component {
handleInput = e => {
    e.preventDefault();
}
onChange = e => {
    this.props.search(e.target.value)
}
render() {
    return (
        <div>
            <form className="form-inline" style={{ marginBottom:"2rem" }} onSubmit={this.handleInput}>
                <input className="form-control mr-sm-2" 
                type="text" 
                name="recipeName" 
                onChange={this.onChange}
                />
                <button className="btn btn-outline-success">Search</button>
            </form>
        </div>
    )
}
}

// recipes.filter(name => {
//     return name.name.toLowerCase().indexOf(filterText.toLowerCase()) > 0
// }).map(name => {
//     return (
//         <li key={name.id}>{name.name}</li>
//     )
// })

const mapStateToProps = state => ({
value: state.recipes.value
// recipes : search(state)
})


export default connect(mapStateToProps, {search})(Search)