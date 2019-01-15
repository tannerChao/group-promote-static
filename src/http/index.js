import _axios from './interceptors';
import { getBaseUrl } from '../utils'
const axios = _axios.create()

class Http {


    Get = (method, data, status = { state: true }, errorCatch, header = {}) => {
        const URL = `${getBaseUrl()}/methods${(!method ? '' : '/' + method)}`;
        const baseHeader = {
            format: 'json',
            ...header
        };
        if (process.env.NODE_ENV === 'development' && !status.state) {
            return http.getStaticState(status)
        } else {

            return http.getServiceState(URL, data, errorCatch, baseHeader, 'POST')
        }

    }
    getStaticState = status => {
        return {
            "code": 0,
            "msg": "OK",
            "data": status.data,
            "success": true
        }
    }

    getServiceState = (url, data, errorCatch, headers, method = 'POST') => {
        return axios({
            url,
            method: method,
            headers,
            data
        })
    }
}
const http = new Http();
export default http;
// export default (method, data, status = { state: true }, errorCatch,header = {}) => {
//     // console.log('Request Data:', data);
//     const URL = `${getBaseUrl()}/methods${(!method ? '' : '?' + method)}`;
//     const baseHeader = {
//         format: 'json',
//         method,
//         ...header
//     };
//     const headers = baseHeader;
//     if (process.env.NODE_ENV === 'development' && !status.state) {
//         return {
//             "code": 0,
//             "msg": "OK",
//             "data": status.data,
//             "success": true
//         }
//     }
//     return axios({
//         url: URL,
//         method: 'POST',
//         headers: headers,
//         data
//     })
// };
