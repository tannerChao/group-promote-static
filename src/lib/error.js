import { has } from "lodash";
import { setToken } from '../utils'
export const getError = status => {
    const error = {
        404: {
            status: 404,
            do: () => {
                setToken('')
                console.log('更换路由')
            }
        }
    }
    if (has(error, status)) {
        return error[status]
    }
}