import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {getLoginRequest, getLoginSuccess, getLoginFailure, setLogout} from './actions';

const login = handleActions(
    {
        [getLoginSuccess]: () => true,
        [getLoginFailure]: () => false,
        [setLogout]: () => false,
    },
    null,
);

const error = handleActions(
    {
        [getLoginFailure]: (state, action) => action.payload,
    },
    null,
);

export default combineReducers({
    login,
    error
});

export const getIsAuthorized = state => state.auth.login;
export const getAuthorizeError = state => state.auth.error;