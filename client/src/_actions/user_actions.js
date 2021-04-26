import axios from 'axios';
import{
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';


export function loginUser(dataToSubmit){

    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data)
    // 서버에 날린 데이터에 대한 response를 .then()이후 request에 저장한다.

    // _reducers로 넘겨준다.
    return {
        type: LOGIN_USER,
        payload: request,

    }
}

export function registerUser(dataToSubmit){

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth(){

    // get 방식이므로 dataToSubmit은 필요가 없다.
    const request = axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}