// types 
import { types } from './types';

const initialState = {
    data: [null],
    isFetching: false,
    error: null,
};

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.USERS_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.USERS_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.USERS_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data: null,
            };
        case types.USERS_FILL:
            return {
                ...state,
                data: payload,
                error: null,
            };
        default:
            return state
    }
}