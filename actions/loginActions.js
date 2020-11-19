import axios from 'axios';
import{
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_LOGOUT
} from '../reducers/loginReducer';
import {API_URL} from '../utils/helpers';

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

export const loginFailedReset = () => {
    return {
        type: LOGIN_ERROR,
        payload: null
    }
}

const logout = () => {
    return{
        type: LOGIN_LOGOUT,
    }
}

export const loginFunction = (login, password, successCallback) => async dispatch => {
    dispatch(loginStart());
    try{
        const { data } = await axios.post(`${API_URL}/users/login`,{login, password});
        dispatch(loginSuccess(data));
        successCallback();
    }catch(error){
        console.log(error);
        dispatch(loginFailed(error));
    }
}

export const logoutFunction = (successCallback) => async dispatch => {
    try{
        dispatch(logout());
        successCallback();
    }catch(err){
        console.log('Failed when trying to logout');
    }
}
