import { TAppState } from './app/reducer';

export type TApplicationState = Readonly<{
    app: TAppState;
}>;
