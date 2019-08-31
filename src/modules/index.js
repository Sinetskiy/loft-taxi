import {combineReducers} from 'redux';
import {fork} from 'redux-saga/effects';
import auth, {sagas as loginSaga} from './Auth';
import routes, {sagas as routesSagas} from './Routes';
import profile from './Profile';

export default combineReducers({auth, routes, profile});

export function* rootSaga() {
    yield fork(loginSaga);
    yield fork(routesSagas);
}
