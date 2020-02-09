import React from 'react';
import { useDispatch } from 'react-redux';

import { HelloWorld } from '../hello-world/hello-world';

import { redirect } from '@/store/app/actions';

import './app.css';

const App: React.FC = () => {
    const put = useDispatch();

    const handleClick = () => {
        put(redirect('/nowhere'));
    };

    return (
        <div>
            <h1>REACT + TS</h1>
            <button onClick={ handleClick } >Move to nowhere</button>
            <div>Просто текст</div>
            <hr/>
            <HelloWorld />
        </div>
    );
};

export { App };
