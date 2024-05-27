import { LOGIN, LOGIN_FAILED, LOG_FAILED, CLEAN_USER } from './action-types';
import axios from 'axios';

// Token del local Storage
const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser');
var config = {}
if (loggedUserJSON) {
    const token = JSON.parse(loggedUserJSON);
    config["headers"] = {
        token: token.tokenUser,
    }
}

export const loginWithProvider = (provider) => {
    return async function(dispatch) {
        try {
            const user = (await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/fromProvider`, provider)).data;
            dispatch({ type: LOGIN, payload: user });
        } catch (error) {
            dispatch({ type: LOGIN_FAILED, payload: error.response.data });
        }
    }
};
