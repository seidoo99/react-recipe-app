export const selectRecipe = (recipe)=> {
console.log('you clicked on recipe', recipe.name);
return {
    type: 'RECIPE_SELECTED',
    payload: recipe
}
}