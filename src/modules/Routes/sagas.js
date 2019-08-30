import {takeEvery, select, put, call, fork, all, takeLatest} from 'redux-saga/effects';
import {getAddressList, getCoordinatesOfRoute} from "./api";
import {
    fetchAddressListRequest, fetchAddressListSuccess, fetchAddressListFailure,
    fetchCoordinatesRequest, fetchCoordinatesSuccess, fetchCoordinatesFailure
} from "./actions";

function* actionsWatcher() {
    yield takeEvery(fetchAddressListRequest, fetchAddressList);
    yield takeLatest(fetchCoordinatesRequest, fetchRoutesCoordinates);
}

function* fetchAddressList() {
    try {
        const response = yield call(getAddressList);
        yield put(fetchAddressListSuccess(response.addresses));
    } catch (error) {
        yield put(fetchAddressListFailure(error))
    }
}

function* fetchRoutesCoordinates(action) {

    const {startAddress, destinationAddress} = action.payload;

    try {
        const response = yield call(getCoordinatesOfRoute, startAddress, destinationAddress);
        debugger;
        yield put(fetchCoordinatesSuccess(response));
    } catch (error) {
        yield put(fetchCoordinatesFailure(error))
    }
}

export default function* () {
    yield fork(actionsWatcher);
}
