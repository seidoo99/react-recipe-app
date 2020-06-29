export default function (state = { recipe: [] }, action) {
    
    switch (action.type) {
      case "RECIPE_SELECTED":
        return {
          ...state,
          recipe: [...state.recipe, action.payload]
        }
        break;
      default:
        return state
    }
  
  }