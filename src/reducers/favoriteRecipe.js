export default function (state = { favorite: [] , recipes: []}, action) {
    
    switch (action.type) {
      case "RECIPE_SELECTED":
        return {
          ...state,
          favorite: [...state.favorite, action.payload]
        }
      case "REMOVE_RECIPE" :
      const id = action.payload.id      
        return {
            ...state,
            favorite: state.favorite.filter((recipe) => recipe.id !== id)
        }
      case "DETAIL_RECIPE" :
      // const id = action.payload.id
        return {
            ...state,
            detail: state.favorite.filter((recipe) => recipe.id === id)
        }

      case "SEARCH": 
        let value = action.payload.value;
        let filteredValues = state.recipes.filter(recipe => {
          return recipe.name.toLowerCase().includes(value) 
      });
        return {
          ...state,
          recipes:filteredValues
          
        }
        case "ADD_RECIPE":
        return {
          ...state, 
        recipes: [...state.recipes, [action.name, action.ingridients, action.visible, action.shown]]
        }
        

        default: 
        return state 
      }

    }