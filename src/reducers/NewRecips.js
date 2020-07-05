const recipReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_RECIPE':
        return state.concat([action.data]);
      case 'DELETE_RECIPE':
        return state.filter((recip)=>recip.id !== action.id);
      case 'EDIT_RECIPE':
        return state.map((recip)=>recip.id === action.id ? {...recip,editing:!recip.editing}:recip)
      case 'UPDATE':
        return state.map((recip)=>{
          if(recip.id === action.id) {
            return {
               ...recip,
               title:action.data.newName,
               message:action.data.newIngredient,
               editing: !recip.editing
            }
          } else return recip;
        })
      default:
        return state;
    }
  }
  export default recipReducer;