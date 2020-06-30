export default function (state = { favorite: [] }, action) {
    
    switch (action.type) {
      case "RECIPE_SELECTED":
        return {
          ...state,
          favorite: [...state.favorite, action.payload]
        }
        break;
      default:
        return state
    }
  
  }