export default function (state = { favorite: [] , detail:{}, recipes:[]}, action) {
    
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
      // case "DETAIL_RECIPE" :
      // const id = action.payload 
      //   return {
      //       ...state,
      //       detail: state.favorite.filter((recipe) => recipe.id == id)
      //   }

      case "SEARCH": 
        const {value} = action.payload.value;
        return {
          // ...state,
          // text: action.payload,
          // loading: false
          ...state,
          recipes: state.recipes.filter((val) => val.includes(value))
        };
    
      default:
        return state
    }
  
  }

