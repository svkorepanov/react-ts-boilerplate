import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { Root } from '@/routing/root';

import { configureStore, routerHistory } from './configure-store';

function getWrappedApp(store): JSX.Element {
    return (
        <Provider store={ store }>
            <ConnectedRouter history={ routerHistory }>
                <Root />
            </ConnectedRouter>
        </Provider>
    );
}

{
    const store = configureStore();

    ReactDOM.render(
        getWrappedApp(store),
        document.getElementById('app'),
    );
}
