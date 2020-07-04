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

export const searchRecipe = (value= '')=> {
    console.log('you clicked on recipe');
    return {
        type: 'SEARCH',
        payload: value
     }
    }
    export const addRecipe = (recipeName, recipeIngridients) => ({
        type: 'ADD_RECIPE',
        name: recipeName,
        ingridients: recipeIngridients,
        visible: false,
        shown: false
      })
    