// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Main, Lesson1 } from '../pages';

// Book
import { book } from './book';

export const Private: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = { book.ROOT }>
                <Main />
            </Route>
            <Route
                exact
                path = { book.LESSON1 }>
                <Lesson1 />
            </Route>

            <Redirect to = '/' />
        </Switch>
    );
};
