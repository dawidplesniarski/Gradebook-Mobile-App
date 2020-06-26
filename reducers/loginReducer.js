export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const initialState = {
    isLoading: false,
    loginData: null,
    loginFailed: null,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                loginData: null,
                loginFailed: null,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loginData: action.payload,
                loginFailed: null,
            };

        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                loginData: null,
                loginFailed: action.payload,
            };
        default:
            return state;
    }
};
