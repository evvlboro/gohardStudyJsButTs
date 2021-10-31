/* eslint-disable react/no-this-in-sfc */
// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Button, HeaderH1, HeaderH3 } from '../../elements';

// Book
import { book } from '../../routes/book';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson14: FC<PropTypes> = () => {
    const { push } = useHistory();


    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 14: Inheritance, part 1</HeaderH1>
            <HeaderH3>
                This lesson was about such basic concepts as the programming paradigm
                (imperative and declarative), OPP and its principles, objects and classes.
            </HeaderH3>
            <p>Example of inheritance in the console.</p>

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson14 />
    </ErrorBoundary>
);
