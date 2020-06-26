import axios from 'axios';
import{
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../reducers/loginReducer';

const loginStart = () => {
    return{
        type: LOGIN_START
    };
};

const loginSuccess = data => {
    return{
        type: LOGIN_SUCCESS,
        payload: data
    };
};

const loginFailed = error => {
    return{
        type: LOGIN_ERROR,
        payload: error
    }
}


export const loginFunction = (login, password) => async dispatch => {
    dispatch(loginStart());
    console.log('Login function launch');
    try{
        const { data } = axios.post('https://node-app-4fun.herokuapp.com/users/login',{login, password});
        dispatch(loginSuccess(data));
    }catch(error){
        dispatch(loginFailed(error));
    }
}
