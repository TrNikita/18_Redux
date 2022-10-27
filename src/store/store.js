import taskReducer from './task';
import {logger} from './middleware/logger';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import errorReducer from './errors';

const rootReducers = combineReducers({
    errors: errorReducer,
    tasks: taskReducer,
});

function createStore() {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'production',
    });
}

export default createStore;
