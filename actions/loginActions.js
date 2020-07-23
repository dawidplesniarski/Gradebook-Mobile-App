import axios from 'axios';
import{
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_LOGOUT
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

const logout = () => {
    return{
        type: LOGIN_LOGOUT,
    }
}

export const loginFunction = (login, password) => async dispatch => {
    dispatch(loginStart());
    try{
        const { data } = await axios.post('https://node-app-4fun.herokuapp.com/users/login',{login, password});
        dispatch(loginSuccess(data));
    }catch(error){
        console.log(error);
        dispatch(loginFailed(error));
    }
}

export const logoutFunction = () => async dispatch => {
    dispatch(logout());
}
