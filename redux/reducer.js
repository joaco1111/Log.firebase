import { LOGIN, LOGIN_FAILED, LOG_FAILED, CLEAN_USER } from './action-types';

const initialState = {
    user: null,
    loginError: '',
    logError: '',
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                loginError: ''
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loginError: action.payload
            };
        case LOG_FAILED:
            return {
                ...state,
                logError: action.payload
            };
        case CLEAN_USER:
            return initialState;
        default:
            return state;
    }
};

export default rootReducer;
