import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {getLoginRequest, getLoginSuccess, getLoginFailure, setLogout} from './actions';

const login = handleActions(
    {
        [getLoginRequest]: (state, action) => action.payload,
        [getLoginSuccess]: () => true,
        [getLoginFailure]: (state, action) => action.payload,
        [setLogout]: () => false,
    },
    null,
);

export default combineReducers({
    login
});

export const getIsAuthorized = state => !!state.auth.login;
export const getAuthorizeError = state => state.auth.login && state.auth.login.error;