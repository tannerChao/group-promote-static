import _ from "lodash";
import { TOKEN, staticState } from "../utils";

export const getToken = () => {
    return localStorage.getItem(TOKEN) || '';
}

export const setToken = info => {
    localStorage.setItem(TOKEN, info);
}

export const getBaseUrl = () => {
    console.log(process.env.NODE_ENV)
    return process.env.NODE_ENV === 'http://10.198.44.52:3000' ? '' : 'http://10.198.44.52:3000'
}

export const getTestState = (name, state = true) => {
    return {
        state,
        data: _.has(staticState, name) ? staticState.name : {}
    }
}

export const getResponseCodeCatch = (response) => {

}

export const getURLParam = (name) => {
    var reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

export const getUrlLocalparam = (name) => {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var index = vars[i].indexOf('=');
        if (vars[i].substring(0, index) === name) { return vars[i].substring(index + 1); }
    }
    return '';
}