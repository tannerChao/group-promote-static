import http from '../http';

export const getLogin = async (info, status = true) => {
    console.log(status)
    let response = await http.Get('user/login', {
        ...info
    }, status);
    return response;
}

export const getExit = async (info, status = true) => {
    let response = await http.Get('user/exit', {
        ...info
    }, status);
    return response;
}

export const getRegister = async (info, status = true) => {
    let response = await http.Get('user/register', {
        ...info
    }, status);
    return response;
}