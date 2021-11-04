/* eslint-disable no-plusplus */
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

const Lesson20: FC<PropTypes> = ()  => {
    const { push } = useHistory();

    /*Объект является итератором, если он умеет обращаться к элементам коллекции по одному за раз,
    при этом отслеживая своё текущее положение внутри этой последовательности.
    В JavaScript итератор - это объект, который предоставляет метод next(),
    возвращающий следующий элемент последовательности.
    Этот метод возвращает объект с двумя свойствами: done и value.

    После создания, объект-итератор может быть явно использован, с помощью вызовов метода next().*/

    function makeIterator(array: Array<any>) {
        let nextIndex = 0;

        return {
            next: function () {
                return nextIndex < array.length
                    ? { value: array[ nextIndex++ ], done: false }
                    : { done: true };
            },
        };
    }

    const it = makeIterator([ 'yo', 'ya' ]);
    console.log(it.next().value); // 'yo'
    console.log(it.next().value); // 'ya'
    console.log(it.next().done);  // true

    // Генераторы - это специальный тип функции, который работает как фабрика итераторов.
    // Функция становится генератором, если содержит один или более yield операторов и
    // использует function* синтаксис.

    function* idMaker() {
        var index = 0;
        while (true) {
            yield index++;
        }
    }

    const iter = idMaker();

    console.log(iter.next().value); // 0
    console.log(iter.next().value); // 1
    console.log(iter.next().value); // 2

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 20: Iterators and generators</HeaderH1>


        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson20 />
    </ErrorBoundary>
);
