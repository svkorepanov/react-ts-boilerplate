import { combineReducers } from 'redux';

import { TApplicationState } from './application-state';

import { appReducer } from './app/reducer';

export const rootReducer = combineReducers<TApplicationState>({
    app: appReducer,
});
