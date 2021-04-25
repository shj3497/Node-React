import axios from 'axios';
import{
    LOGIN_USER
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