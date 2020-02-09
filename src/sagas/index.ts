import { all, takeLatest } from 'redux-saga/effects';

import { AppActionTypes } from '@/store/app/action-types';

import { initAppWorker } from './workers/init-app-worker';
import { redirectWorker } from './workers/redirect-worker';

export function* sagas() {
    yield all([
        yield takeLatest(AppActionTypes.INIT_APP, initAppWorker),
        yield takeLatest(AppActionTypes.REDIRECT, redirectWorker),
    ]);
}
