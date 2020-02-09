import { push } from 'connected-react-router';
import { put } from 'redux-saga/effects';

import { redirect } from '@/store/app/actions';

export function* redirectWorker(action: ReturnType<typeof redirect>) {
    if (action.isExternal) {
        window.location.assign(action.path);
    } else {
        yield put(push(action.path));
    }
}
