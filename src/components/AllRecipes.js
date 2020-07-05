import React, { Component } from 'react';
import { connect } from 'react-redux';
import Add from './Add';
import Edit from './Edit';
class AllRecipes extends Component {
render() {
return (
<div>
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