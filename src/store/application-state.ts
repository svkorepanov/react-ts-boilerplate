import { TAppState } from './app/reducer';
import { RouterState } from 'connected-react-router';

export type TApplicationState = Readonly<{
    app: TAppState;
    router: RouterState;
}>;
