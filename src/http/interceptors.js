import axios from 'axios'
import { getToken } from "../utils";
import { getError } from '../lib'
/**
 * 请求拦截
 */
axios.defaults.timeout = 30000
axios.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers.Authorization = `token ${getToken()}`;
        }
        return config
    },
    err => {
        Promise.reject(err)
    }
)

/**
 * 响应拦截
 */

axios.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        console.log(err)
        if (err.response) {
            const error = getError(err.response.status)
            error.do()
        }
        return Promise.reject(err.response.data)   // 返回接口返回的错误信息
    }
)


export default axios