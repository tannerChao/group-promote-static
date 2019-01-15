import { combineEpics } from 'redux-observable';
import { getLoginStateEpic, setLoginStateEpic, getRegisterEpic, getRegisterSuccessEpic } from "./login";

export default combineEpics(
    // loginEpic,
    // exitEpic,
    getLoginStateEpic,
    setLoginStateEpic,
    getRegisterEpic,
    getRegisterSuccessEpic
);