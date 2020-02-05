import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app/app';

const REACT_HEADING = 'REACT + TS husky';

function getWrappedApp(): JSX.Element {
    return (
        <App titleHeading={ REACT_HEADING } />
    );
}

ReactDOM.render(
    getWrappedApp(),
    document.getElementById('app'),
);
