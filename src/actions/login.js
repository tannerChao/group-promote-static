import { createActions } from "redux-actions";
import {
    USER_LOGIN,
    USER_LOGIN_GET,
    USER_LOGIN_RESET,
    USER_LOGIN_SET,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGIStER_SUCCESS,
    USER_REGIStER_GET,
    USER_REGIStER_FAIL
} from "../utils";

export default createActions({
    [USER_LOGIN]: (state) => state,
    [USER_LOGIN_RESET]: state => state,
    [USER_LOGIN_GET]: state => state,
    [USER_LOGIN_SET]: state => state,
    [USER_LOGIN_FAIL]: state => state,
    [USER_LOGIN_SUCCESS]: state => state,
    [USER_REGIStER_SUCCESS]: state => state,
    [USER_REGIStER_GET]: state => state,
    [USER_REGIStER_FAIL]: state => state,
})

