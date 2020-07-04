import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchRecipe
} from '../actions/action';

export class Search extends Component {
  
   filterByInput(e){
    let input = e.target.value;
    this.props.recipes.dispatch(searchRecipe({value: input}))
 }


  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <form id="searchForm">
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="search_recipes"
              onChange = { e => {this.filterByInput(e)}}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(
  mapStateToProps,
  { searchRecipe }
)(Search);