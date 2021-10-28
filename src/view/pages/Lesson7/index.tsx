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

type InspectContract<T> = (
    array: Array<T>
) => Array<T>

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name:    'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

type ArrayItems = typeof array[number]

const Lesson7: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 7: Improved array capabilities</HeaderH1>
            <HeaderH3>Tasks</HeaderH3>
            <ul>
                <li>
                    <Button onClick = { () => {
                        /**
                         * Задача 1.
                         *
                         * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
                         * и возвращать новый массив.
                         * Этот новый массив должен содержать исключительно длины строк, которые были в
                         * переданном массиве.
                         * Если строк в переданном массиве не было — нужно вернуть пустой массив.

                         */
                        const inspect: InspectContract<ArrayItems> = (array) => {
                            const filteredArray = array.filter((item) => typeof item === 'string');
                            const result = filteredArray.map((item) => typeof item === 'string' ? item.length : null);

                            if (result.length === 0) {
                                return [] as Array<ArrayItems>;
                            }

                            return result as Array<ArrayItems>;
                        };


                        // Решение

                        const result = inspect(array);
                        console.log(result); // [ 7, 11, 7, 12 ]
                    } }>
                        Task 1
                    </Button>
                </li>
            </ul>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson7 />
    </ErrorBoundary>
);
