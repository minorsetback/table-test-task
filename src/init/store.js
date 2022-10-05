import { configureStore } from '@reduxjs/toolkit'

//Core
import { rootReducer } from './rootReducer';
import { middleware } from './middleware';

export const store = configureStore({ reducer: rootReducer, middleware: middleware })

