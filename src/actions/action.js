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

