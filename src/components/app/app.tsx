import React from 'react';

import './app.css';

import { HelloWorld } from '../hello-world/hello-world';

type TProps = {
    titleHeading: string;
};

const App: React.FC<TProps> = ({ titleHeading }) => {
    return (
        <div>
            <h1>{ titleHeading }</h1>
            <div>Просто текст</div>
            <hr/>
            <HelloWorld />
        </div>
    );
};

export { App };
