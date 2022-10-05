//Types
import { types } from './types';
import { api } from '../../api';

export const usersActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.USERS_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.USERS_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.USERS_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.USERS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    fetchAsync: () => async (dispatch) => {
        dispatch(usersActions.startFetching());
        let response = await api.users.fetch();
        if (response.status === 200) {
            dispatch(usersActions.fill(response.data));
        } else {
            const error = {
                status: response.status
            };
            dispatch(usersActions.setFetchingError(error));
        }
        dispatch(usersActions.stopFetching());
    }
})