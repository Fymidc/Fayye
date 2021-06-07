import { combineReducers } from 'redux';
import authReducer from './authReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
    auth:authReducer,
    products:itemsReducer,
})

export default rootReducer;