//React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../actions';

export const useFetchUsers = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.fetchAsync(id));
    }, [dispatch, id]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.users);

    return {
        data,
        isFetching,
        error
    }
}