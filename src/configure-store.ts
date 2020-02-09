import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { createRootReducer } from '@/store/';
import { sagas } from '@/sagas';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const IS_BROWSER = typeof window !== 'undefined';

const composeEnhancers = IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const routerHistory = IS_BROWSER
    ? createBrowserHistory({ basename: '/' })
    : createMemoryHistory();

export const configureStore = (preloadedeState = {}) => {
    const store = createStore(
        createRootReducer(routerHistory),
        preloadedeState,
        composeEnhancers(applyMiddleware(
            routerMiddleware(routerHistory),
            sagaMiddleware,
        )));

    sagaMiddleware.run(sagas);

    return store;
};
