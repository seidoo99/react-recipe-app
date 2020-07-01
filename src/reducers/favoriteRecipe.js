export default function (state = { favorite: [] , detail:{}}, action) {
    
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
      // case "GET_RECIPE" :
      // const id = action.payload.id      
      //   return {
      //       ...state,
      //       detail: state.favorite.filter((recipe) => recipe.id == id)
      //   }
      default:
        return state
    }
  
  }

