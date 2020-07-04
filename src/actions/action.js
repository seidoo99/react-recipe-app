export const selectRecipe = (recipe)=> {
console.log('you clicked on recipe', recipe.name);
return {
    type: 'RECIPE_SELECTED',
    payload: recipe
    }
}

export const removeRecipe = (recipe)=> {
    console.log('you clicked on recipe', recipe.name);
    return {
        type: 'REMOVE_RECIPE',
        payload: recipe
     }
}

export const getRecipe = (recipe)=> {
    console.log('you clicked on recipe', recipe.name);
    return {
        type: 'GET_RECIPE',
        payload: recipe
     }
}
// export const searchRecipe = (value= '')=> {
//     console.log('you clicked on recipe');
//     return {
//         type: 'SEARCH',
//          value
//      }
//     }


export const searchRecipe = text => dispatch => {
        dispatch({
          type: 'SEARCH',
          payload: text
        });
      }
    
  export const getRecipes = text => dispatch => {
              
                  fetch(`localhost:3000/Recipes`)
                  .then(res => res.json()).then(data=> {
                    return dispatch({
                      type: 'GET_RECIPES',
                      payload: data
                    })
                })
              }
    