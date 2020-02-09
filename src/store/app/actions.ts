import { AppActionTypes } from './action-types';

export const initApp = () => {
    return { type: AppActionTypes.INIT_APP };
};

export const initAppError = (error: any) => {
    return { type: AppActionTypes.INIT_APP_ERROR, error };
};

export const redirect = (path: string, isExternal = false) => {
    return { type: AppActionTypes.REDIRECT, path, isExternal };
};
