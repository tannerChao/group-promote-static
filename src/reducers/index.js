import { enableBatching } from 'redux-batched-actions';
import { reducer as formReducer } from "redux-form";
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import login from './login'

export default enableBatching(combineReducers({
    login,
    routing: routerReducer,
    form: formReducer,

}))
