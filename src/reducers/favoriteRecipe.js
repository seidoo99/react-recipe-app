export default function (state = { favorite: [] , text: '', recipes: []}, action) {
    
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
            detail: state.favorite.filter((recipe) => recipe.id == id)
        }

      // case "SEARCH": 
      //   let value = action.payload.value;
      //   let filteredValues = state.recipes.filter(recipe => {
      //     return recipe.name.toLowerCase().includes(value) 
      // });
      //   return {
      //     ...state,
      //     recipes:filteredValues
          
      //   }
      case "SEARCH":
        return {
          ...state,
          text: action.payload,
          
        };

        case "GET_RECIPE":
            return {
              ...state,
              movies: action.payload,
              loading: false
            };
      default:
        return state
    }
  
  }
