import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchAddressListRequest, fetchAddressListSuccess, fetchAddressListFailure,
    fetchCoordinatesRequest, fetchCoordinatesSuccess, fetchCoordinatesFailure} from "./actions";

const addressList = handleActions(
    {
        [fetchAddressListRequest]: (state, action) => action.payload,
        [fetchAddressListSuccess]: (state, action) => action.payload,
        [fetchAddressListFailure]: (state, action) => action.payload,
    },
    null,
);

const coordinates = handleActions(
    {
        [fetchCoordinatesRequest]: (state, action) => {
            debugger;
           return  action.payload
        },
        [fetchCoordinatesSuccess]: (state, action) => action.payload,
        [fetchCoordinatesFailure]: (state, action) => action.payload
    },
    null,
);

export default combineReducers({
    addressList,
    coordinates
});

export const getAddressList = state => state.routes.addressList;
// export const getAuthorizeError = state => state.auth.login && state.auth.login.error;