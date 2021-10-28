// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

// Book
import { book } from '../../routes/book';

const Main: FC = () => {
    const { push } = useHistory();

    return (
        <Container>
            <button onClick = { () => void push(book.LESSON1) }>
                Lesson 1
            </button>
            <button onClick = { () => void push(book.LESSON2) }>
                Lesson 2
            </button>
            <button onClick = { () => void push(book.LESSON3) }>
                Lesson 3
            </button>
            <button onClick = { () => void push(book.LESSON4) }>
                Lesson 4
            </button>
            <button onClick = { () => void push(book.LESSON5) }>
                Lesson 5
            </button>
            <button onClick = { () => void push(book.LESSON6) }>
                Lesson 6
            </button>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
