import {combineReducers} from 'redux'
import recipeReducer from './dummyData'
import favoriteReducer from './favoriteRecipe'


const allReducers = combineReducers({
    recipes: recipeReducer,
    favorites: favoriteReducer
 
});

export default allReducers

