import { combineReducers } from 'redux';

import { usersReducer as users } from '../bus/books/reducer';

export const rootReducer = combineReducers({
  users
});
