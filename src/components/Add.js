import React, { Component } from 'react';
import { connect } from 'react-redux';
class Add extends Component {
render() {
return (
<div className="post">
  <span className="post_title">recipe : {this.props.recip.name}</span>
  <h5 className="post_message">Ingredients: <hr/>{this.props.recip.Ingredients}</h5>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_RECIPE', id: this.props.recip.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_RECIPE', id: this.props.recip.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Add);