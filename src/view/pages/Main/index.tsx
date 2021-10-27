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
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
