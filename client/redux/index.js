import { createStore, combineReducers, applyMiddleware } from 'redux';

//reducers
import room from './roomReducer';

const rootReducer = combineReducers({
    room
})


export default rootReducer;