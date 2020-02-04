import React from 'react';
import { createCn } from 'bem-react-classname';

import './hello-world.css';

export type TProps = {
    someProp?: string;
}

const cn = createCn('hello-world');

const HelloWorld: React.FC<TProps> = () => {
    return (
        <div className={ cn() }>
            <h5 className={ cn('title') } >Hello world!</h5>
        </div>
    );
};

export { HelloWorld };
