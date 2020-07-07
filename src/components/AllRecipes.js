import React, { Component } from 'react';
import { connect } from 'react-redux';
import {

  Route,
  Link
} from "react-router-dom";
import Add from './Add';
import Edit from './Edit';
class AllRecipes extends Component {
render() {
return (
<div>

    <Route>
        <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="Recipes">Recipes</Link>
        <Link to="NewRecipes">AddRecipe</Link>
        <Link to="favourite">Favourite</Link>
        <Link to="AllRecipe" >Custom Recipes</Link>
        <Link to="About">About</Link>
        </nav>
        </Route>
        
  <h2 className="post_heading">list of custom Recipes</h2>
  {this.props.newRecipe.map((recip) => (
  <div key={recip.id}>
    {recip.editing ? <Edit recip={recip} key={recip.id} /> : <Add recip={recip}
    key={recip.id} />}
  </div>
))}
</div>
);
}
}

const mapStateToProps = (state) => {
return {
newRecipe: state.newRecipe
}
}
export default connect(mapStateToProps)(AllRecipes);