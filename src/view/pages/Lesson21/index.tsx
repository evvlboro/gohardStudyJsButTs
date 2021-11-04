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

const Lesson21: FC<PropTypes> = () => {
    const { push } = useHistory();
    let myFirstPromise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('Success!');
        }, 250);
    });

    myFirstPromise.then((successMessage) => {
        console.log('Ура! ' + successMessage);
    });

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 21: Asynchronous programming</HeaderH1>


        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson21 />
    </ErrorBoundary>
);
