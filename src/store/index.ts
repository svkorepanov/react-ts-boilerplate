import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History as IHistory } from 'history';

import { TApplicationState } from './application-state';

import { appReducer } from './app/reducer';

export const createRootReducer = (routerHistory: IHistory) => {
    return combineReducers<TApplicationState>({
        app: appReducer,
        router: connectRouter(routerHistory),
    });
};
