import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName= this.getName.value;
  const newIngredient = this.getIngredient.value;
  const data = {
    newName,
    newIngredient
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.recip.id, data: data })
}
render() {
return (
<div key={this.props.recip.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
  <p>Recipe Name:</p>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.recip.name} placeholder="Enter Recipe Name" /><br /><br />
    <p>Ingredients:</p><hr/>
    <textarea required rows="5" ref={(input) => this.getIngredient = input}
    defaultValue={this.props.recip.Ingredients} cols="28" placeholder="Enter Ingredient" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(Edit);