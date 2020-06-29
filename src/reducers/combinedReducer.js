import {combineReducers} from 'redux'
import recipeReducer from './dummyData'


const allReducers = combineReducers({
    recipes: recipeReducer
});

export default allReducers

