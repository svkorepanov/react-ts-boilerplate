import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { useDispatch } from 'react-redux';

import { initApp } from '@/store/app/actions';

import { App } from '@/components/app/app';

const Root: React.FC = () => {
    const put = useDispatch();

    useEffect(() => {
        put(initApp());
    }, [put]);

    return (
        <Switch>
            <Route exact={ true } path='/'>
                <App />
            </Route>
            <Route path='*'>
                404
            </Route>
        </Switch>
    );
};

export { Root };
