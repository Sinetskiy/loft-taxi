import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchAddressListSuccess, fetchAddressListFailure,
     fetchCoordinatesSuccess, fetchCoordinatesFailure, clearCoordinates} from "./actions";

const addressList = handleActions(
    {
        [fetchAddressListSuccess]: (state, action) => action.payload,
        [fetchAddressListFailure]: () => null
    },
    null,
);

const coordinates = handleActions(
    {
        [fetchCoordinatesSuccess]: (state, action) => action.payload,
        [fetchCoordinatesFailure]: () => null,
        [clearCoordinates]: () => null
    },
    null,
);

const error = handleActions(
    {
        [fetchAddressListFailure]: (state, action) => action.payload,
        [fetchCoordinatesFailure]: (state, action) => action.payload
    },
    null,
);

export default combineReducers({
    addressList,
    coordinates,
    error
});

export const getAddressList = state => state.routes.addressList;
export const getCoordinates = state => state.routes.coordinates;
export const getAuthorizeError = state => state.auth.error;