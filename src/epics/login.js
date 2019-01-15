import "rxjs";

import { mergeMap, mapTo, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { replace } from 'react-router-redux'
import { USER_LOGIN_SUCCESS, USER_LOGIN_GET, USER_LOGIN_FAIL, USER_LOGIN_SET, USER_REGIStER_GET } from "../utils";
import { getTestState } from "../utils";
import loginAction from "../actions/login";
import { getLogin, getRegister } from '../methods'

export const getLoginStateEpic = (action$) =>
    action$.pipe(
        ofType(USER_LOGIN_GET),
        mergeMap(
            async action => await getLogin(action.payload, getTestState('login', false))
        ),
        map(res => {
            if (res.success && res.code === 0) {
                return loginAction[USER_LOGIN_SET](1)
            } else {
                return loginAction[USER_LOGIN_FAIL](0)
            }

        }))

export const setLoginStateEpic = (action$, store) =>
    action$.pipe(
        ofType(USER_LOGIN_SET),
        mapTo(replace('/home/user')))



export const getRegisterEpic = (action$, store) =>
    action$.pipe(
        ofType(USER_REGIStER_GET),
        mergeMap(
            async action => await getRegister(action.payload, getTestState('register', true))
        ),
        map(res => {
            console.log(res)
            if (res.success && res.code === 0) {
                return loginAction[USER_LOGIN_SUCCESS](1)
            } else {
                return loginAction[USER_LOGIN_FAIL](0)
            }

        }))

export const getRegisterSuccessEpic = (action$, store) =>
    action$.pipe(
        ofType(USER_LOGIN_SUCCESS),
        mapTo(loginAction[USER_LOGIN_GET]({
            ...store.value
        })))
