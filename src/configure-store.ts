import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '@/store/';
import { sagas } from '@/sagas';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const IS_BROWSER = typeof window !== 'undefined';

const composeEnhancers = IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedeState = {}) => {
    const store = createStore(
        rootReducer,
        preloadedeState,
        composeEnhancers(applyMiddleware(
            sagaMiddleware,
        )));

    sagaMiddleware.run(sagas);

    return store;
};
