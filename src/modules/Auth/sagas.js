import {takeEvery, select, put, call, fork, all, takeLatest} from 'redux-saga/effects';
import {login} from "./api";
import {getLoginFailure, getLoginRequest, getLoginSuccess} from "./actions";

function* sagaAuthorize(action) {
    const {email, password} = action.payload;

    try {
        const response = yield call(login, email, password);
        if (response.success) {
            yield put(getLoginSuccess());
        } else {
            yield put(getLoginFailure(response.error));
        }
    } catch (error) {
        yield put(getLoginFailure(error))
    }
}

export default function* () {
    yield takeLatest(getLoginRequest, sagaAuthorize)
}
