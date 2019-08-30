import {combineReducers} from 'redux';
import {fork} from 'redux-saga/effects';
import auth, {sagas as loginSaga} from './Auth';
import routes, {sagas as routesSagas} from './Routes';

export default combineReducers({auth, routes});

export function* rootSaga() {
    yield fork(loginSaga);
    yield fork(routesSagas);
}
