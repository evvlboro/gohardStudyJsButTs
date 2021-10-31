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

const Lesson13: FC<PropTypes> = () => {
    const { push } = useHistory();

    const obj = {
        name: 'Yauhen',
        age:  24,
    };
    const arr = [ 'Yauhen', 24 ];
    const [ z, w ] = arr;

    const nArr = [ ...arr, 2, 5 ];

    const { name, age } = obj;

    const nowObj = {
        ...obj,
        age: 25,
    };

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 13: Destructuring</HeaderH1>

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson13 />
    </ErrorBoundary>
);
