import {combineReducers} from 'redux'
import recipeReducer from './dummyData'
import favoriteReducer from './favoriteRecipe'
import removeReducer from './removeRecipe'

const allReducers = combineReducers({
    recipes: recipeReducer,
    favorites: favoriteReducer
    // removeRecipe: removeReducer
});

export default allReducers

