import { DeepReadonly } from '@/types/deep-readonly';
import { InferValueTypes } from '@/types/common';

import { AppActionTypes } from './action-types';
import * as actions from './actions';

type TActions = ReturnType<InferValueTypes<typeof actions>>;

export type TAppState = DeepReadonly<{
    isAppIited: boolean;
    isError: boolean;
}>;

const initialState: TAppState = {
    isAppIited: false,
    isError: false,
};

export const appReducer = (state = initialState, action: TActions): TAppState => {
    switch (action.type) {
        case AppActionTypes.INIT_APP:
            return {
                ...state,
                isAppIited: true,
            };

        case AppActionTypes.INIT_APP_ERROR:
            return {
                ...state,
                isError: true,
            };
        default:
            return state;
    }
};
