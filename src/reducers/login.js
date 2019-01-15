import { handleActions } from 'redux-actions';
import { filterActions } from 'redux-ignore';
import toLogin from "../actions/login";
import { USER_LOGIN_SET } from "../utils";

const initialState = {
    login: {
        state: 0
    }
};

const loginReducer = handleActions({

    [USER_LOGIN_SET]: (state, action) => {
        console.log(state, action, '-------')
        return {
            ...state,
            login: { state: action.payload }
        };
    },
}, initialState);

export default loginReducer