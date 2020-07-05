import React, { Component } from 'react';
import { connect } from 'react-redux';
class Add extends Component {
render() {
return (
<div className="post">
  <h2 className="post_title">{this.props.recip.name}</h2>
  <p className="post_message">{this.props.recip.Ingredients}</p>
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