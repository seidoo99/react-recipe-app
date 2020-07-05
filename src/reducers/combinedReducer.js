import {combineReducers} from 'redux'
import recipeReducer from './dummyData'
import favoriteReducer from './favoriteRecipe'
import newRecips from './NewRecips'


const allReducers = combineReducers({
    recipes: recipeReducer,
    favorites: favoriteReducer,
    newRecipe: newRecips
 
});

export default allReducers

