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
        // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
        // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
        // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
        setTimeout(function () {
            resolve('Success!'); // Ура! Всё прошло хорошо!
        }, 250);
    });

    myFirstPromise.then((successMessage) => {
        // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
        // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
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
