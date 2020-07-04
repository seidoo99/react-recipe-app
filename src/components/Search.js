import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchRecipe, getRecipes
} from '../actions/action';

export class Search extends Component {
  onChange = e => {
    this.props.searchRecipe(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getRecipes(this.props.text);

  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="search_recipes"
              onChange={this.onChange}
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
  text: state.recipes.text
});

export default connect(
  mapStateToProps,
  { searchRecipe, getRecipes, }
)(Search);