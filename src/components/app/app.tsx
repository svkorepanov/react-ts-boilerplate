import React from 'react';

import { HelloWorld } from '../hello-world/hello-world';

type TProps = {
    title: string;
}

const App: React.FC<TProps> = ({ title }) => {
    return (
        <div>
            <h1>{ title }</h1>
            <hr/>
            <HelloWorld />
        </div>
    )
}

export { App };