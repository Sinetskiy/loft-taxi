import { createAction } from 'redux-actions';

export const fetchAddressListRequest = createAction(
  'ROUTES/FETCH_ADDRESS_LIST_REQUEST'
);
export const fetchAddressListSuccess = createAction(
  'ROUTES/FETCH_ADDRESS_LIST_SUCCESS'
);
export const fetchAddressListFailure = createAction(
  'ROUTES/FETCH_ADDRESS_LIST_FAILURE'
);
export const fetchCoordinatesRequest = createAction(
  'ROUTES/FETCH_COORDINATES_REQUEST'
);
export const fetchCoordinatesSuccess = createAction(
  'ROUTES/FETCH_COORDINATES_SUCCESS'
);
export const fetchCoordinatesFailure = createAction(
  'ROUTES/FETCH_COORDINATES_FAILURE'
);
export const clearCoordinates = createAction(
  'ROUTES/CLEAR_COORDINATES'
);
