import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/app/app';

import { configureStore } from './configure-store';

function getWrappedApp(store): JSX.Element {
    return (
        <Provider store={ store }>
            <App />
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
