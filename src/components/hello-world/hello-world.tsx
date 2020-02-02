import React from 'react';
import { createCn } from 'bem-react-classname';

import './hello-world.css';

const cn = createCn('hello-world');

const HelloWorld: React.FC<{}> = () => {
    return <h5 className={ cn() } >Hello world!</h5>
}

export { HelloWorld }
