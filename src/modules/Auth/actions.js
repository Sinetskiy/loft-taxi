import { createAction } from 'redux-actions';

export const getLoginRequest = createAction('AUTH/GET_LOGIN_REQUEST');
export const getLoginSuccess = createAction('AUTH/GET_LOGIN_SUCCESS');
export const getLoginFailure = createAction('AUTH/GET_LOGIN_FAILURE');
export const setLogout = createAction('AUTH/SET_LOGOUT');
