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

const Lesson15: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 15: Inheritance, part 2</HeaderH1>
            <HeaderH3>This lesson was about prototypes and prototype chains.
                Prototypes are the mechanism by which JavaScript objects inherit properties from one another.
            </HeaderH3>

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson15 />
    </ErrorBoundary>
);
