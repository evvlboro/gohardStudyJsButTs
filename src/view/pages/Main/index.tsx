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
            <button onClick = { () => void push(book.LESSON7) }>
                Lesson 7
            </button>
            <button onClick = { () => void push(book.LESSON8) }>
                Lesson 8
            </button>
            <button onClick = { () => void push(book.LESSON9) }>
                Lesson 9
            </button>
            <button onClick = { () => void push(book.LESSON10) }>
                Lesson 10
            </button>
            <button onClick = { () => void push(book.LESSON11) }>
                Lesson 11
            </button>
            <button onClick = { () => void push(book.LESSON12) }>
                Lesson 12
            </button>
            <button onClick = { () => void push(book.LESSON13) }>
                Lesson 13
            </button>
            <button onClick = { () => void push(book.LESSON14) }>
                Lesson 14
            </button>
            <button onClick = { () => void push(book.LESSON15) }>
                Lesson 15
            </button>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
