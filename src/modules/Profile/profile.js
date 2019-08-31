import {handleActions} from 'redux-actions';
import {saveProfileAction} from './actions';

const profile = handleActions(
    {
        [saveProfileAction]: (state, action )=> action.payload
    },
    null,
);

export default profile;