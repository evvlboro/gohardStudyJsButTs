// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Button, HeaderH1 } from '../../elements';

// Book
import { book } from '../../routes/book';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson19: FC<PropTypes> = () => {
    const { push } = useHistory();
    const sym = Symbol('foo');
    console.log(sym);

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 19: Symbols </HeaderH1>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson19 />
    </ErrorBoundary>
);
