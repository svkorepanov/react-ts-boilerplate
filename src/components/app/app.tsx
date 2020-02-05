import React from 'react';
import { useDispatch } from 'react-redux';

import { initApp } from '@/store/app/actions';

import { HelloWorld } from '../hello-world/hello-world';

import './app.css';

const App: React.FC = () => {
    const put = useDispatch();

    put(initApp());

    return (
        <div>
            <h1>REACT + TS</h1>
            <div>Просто текст</div>
            <hr/>
            <HelloWorld />
        </div>
    );
};

export { App };
