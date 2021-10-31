// Core
import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, Clock } from '../../components';

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

let timeoutId: ReturnType<typeof setTimeout> | void = void 0;

const Lesson17: FC<PropTypes> = () => {
    const { push } = useHistory();

    useEffect(() => {
        timeoutId = setTimeout(() => {
            console.log('3 seconds have passed!');
        }, 3000);

        return () => {
            if (timeoutId) {
                clearInterval(timeoutId);
            }
        };
    }, []);

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 17: Timers and Performance</HeaderH1>
            <HeaderH3>setInterval example</HeaderH3>
            <Clock />
            <HeaderH3>setTimeout example in console</HeaderH3>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson17 />
    </ErrorBoundary>
);
