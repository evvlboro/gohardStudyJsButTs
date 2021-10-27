// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import  * as pages  from '../pages';

// Book
import { book } from './book';

export const Private: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = { book.ROOT }>
                <pages.Main />
            </Route>
            <Route
                exact
                path = { book.LESSON1 }>
                <pages.Lesson1 />
            </Route>
            <Route
                exact
                path = { book.LESSON2 }>
                <pages.Lesson2 />
            </Route>

            <Redirect to = '/' />
        </Switch>
    );
};
