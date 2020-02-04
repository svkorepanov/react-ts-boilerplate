import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app/app';

const REACT_HEADING = 'REACT + TS';

ReactDOM.render(
    <App titleHeading={ REACT_HEADING } />,
    document.getElementById('app'),
);
